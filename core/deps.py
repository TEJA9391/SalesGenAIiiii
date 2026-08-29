"""
FastAPI dependency: get current authenticated user from Bearer token.
"""
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from core.database import get_db
from core.security import decode_token
from models.user import User
from models.user_session import UserSession
from typing import List, Callable, Optional

bearer_scheme = HTTPBearer()
bearer_scheme_optional = HTTPBearer(auto_error=False)


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
    db: Session = Depends(get_db),
) -> User:
    token = credentials.credentials
    payload = decode_token(token)
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    user_id: str = payload.get("sub")
    jti: str = payload.get("jti")

    user = db.query(User).filter(User.id == user_id, User.is_active == True, User.deleted_at == None).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found or suspended")

    if jti:
        session = db.query(UserSession).filter(UserSession.token_jti == jti).first()
        if session and session.is_revoked:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Session has been revoked or logged out",
            )

    return user


def get_current_user_optional(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(bearer_scheme_optional),
    db: Session = Depends(get_db),
) -> User:
    if credentials and credentials.credentials:
        token = credentials.credentials
        payload = decode_token(token)
        if payload:
            user_id: str = payload.get("sub")
            if user_id:
                user = db.query(User).filter(User.id == user_id, User.is_active == True).first()
                if user:
                    return user
    
    # Fallback to existing user in database or create default admin user
    user = db.query(User).first()
    if not user:
        from models.organization import Organization
        org = db.query(Organization).first()
        if not org:
            org = Organization(name="SalesGenie Workspace")
            db.add(org)
            db.flush()
        user = User(
            organization_id=org.id,
            email="admin@salesgenie.ai",
            full_name="Workspace Admin",
            role="super_admin",
            is_active=True
        )
        db.add(user)
        db.commit()
    return user


def require_role(allowed_roles: List[str]) -> Callable:
    def role_checker(current_user: User = Depends(get_current_user)) -> User:
        user_role = (current_user.role or "sales_rep").lower()
        if current_user.is_superuser or user_role == "super_admin":
            return current_user
        if user_role not in [r.lower() for r in allowed_roles]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Action requires one of the following roles: {', '.join(allowed_roles)}",
            )
        return current_user
    return role_checker


def get_current_admin(current_user: User = Depends(get_current_user)) -> User:
    role = (current_user.role or "").lower()
    if role not in ("admin", "super_admin", "superadmin") and not current_user.is_superuser:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not enough permissions")
    return current_user
