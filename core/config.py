import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "SalesGenie AI"
    VERSION: str = "2.1.0"

    # Security
    SECRET_KEY: str = os.getenv("SECRET_KEY", "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # PostgreSQL configuration (individual vars for flexibility)
    POSTGRES_SERVER: str = os.getenv("POSTGRES_SERVER", "localhost")
    POSTGRES_USER: str = os.getenv("POSTGRES_USER", "postgres")
    POSTGRES_PASSWORD: str = os.getenv("POSTGRES_PASSWORD", "password")
    POSTGRES_DB: str = os.getenv("POSTGRES_DB", "salesgenie")
    POSTGRES_PORT: str = os.getenv("POSTGRES_PORT", "5432")

    @property
    def SQLALCHEMY_DATABASE_URI(self) -> str:
        """Build the DB URL from environment.
        Priority:
          1. DATABASE_URL env var (full DSN — set this in .env for prod)
          2. Individual POSTGRES_* vars assembled into a DSN
          3. SQLite fallback for local dev without Postgres
        """
        # Full DSN override
        full_url = os.getenv("DATABASE_URL")
        if full_url:
            # Heroku/Render ship 'postgres://' — SQLAlchemy needs 'postgresql://'
            return full_url.replace("postgres://", "postgresql://", 1)

        # Individual vars — if Postgres is running, use it
        pg_user = os.getenv("POSTGRES_USER")
        pg_pass = os.getenv("POSTGRES_PASSWORD")
        pg_db   = os.getenv("POSTGRES_DB")
        if pg_user and pg_pass and pg_db:
            host = os.getenv("POSTGRES_SERVER", "localhost")
            port = os.getenv("POSTGRES_PORT", "5432")
            return f"postgresql://{pg_user}:{pg_pass}@{host}:{port}/{pg_db}"

        # Local dev fallback: SQLite
        return "sqlite:///./salesgenie.db"

    # Redis / Celery Config (future proofing)
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")

    class Config:
        # Allow property overrides alongside model fields
        ignored_types = (property,)

settings = Settings()
