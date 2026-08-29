import models
from sqladmin import Admin, ModelView
from core.database import engine

def setup_admin(app):
    # Initialize sqladmin
    admin = Admin(app, engine, title="SalesGenAI Database Admin")

    # Automatically register all models exported in models.__all__
    for model_name in models.__all__:
        model = getattr(models, model_name)
        
        # We only want to register SQLAlchemy mapped classes
        if not hasattr(model, '__table__'):
            continue

        # Create a dynamic ModelView class for each model
        class AdminView(ModelView, model=model):
            column_list = [c.name for c in model.__table__.c]
            name = model_name
            name_plural = f"{model_name}s"
            icon = "fa-solid fa-table" # Default icon
            
        # Give the class a proper name for debugging
        AdminView.__name__ = f"{model_name}Admin"
        
        admin.add_view(AdminView)
