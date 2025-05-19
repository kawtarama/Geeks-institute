from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models
from .database import engine
from .routers import auth, books, reviews, users
# Décommentez si vous souhaitez utiliser le middleware personnalisé
# from .middleware import AuthMiddleware  
from app.middleware import AuthMiddleware
# Création des tables dans la base de données
models.Base.metadata.create_all(bind=engine)

# Initialisation de l'application
app = FastAPI(
    title="Book Review API",
    description="API pour gérer les livres et les critiques",
    version="1.0.0"
)

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # À ajuster en production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
 
)

# Ajout du middleware personnalisé (optionnel)
# app.add_middleware(AuthMiddleware)

# Enregistrement des routeurs
app.include_router(auth.router)
app.add_middleware(
    AuthMiddleware,
)

app.include_router(books.router)
app.include_router(reviews.router)
app.include_router(users.router)

# Route de base
@app.get("/")
def read_root():
    return {"message": "Bienvenue sur l'API de critiques de livres"}