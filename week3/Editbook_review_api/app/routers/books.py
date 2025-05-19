from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from .. import models, schemas, dependencies
from ..database import get_db

router = APIRouter(prefix="/books", tags=["Books"])

@router.post("/", response_model=schemas.BookResponse)
def create_book(
    book: schemas.BookCreate, 
    db: Session = Depends(get_db), 
    current_user: models.User = Depends(dependencies.get_current_user)
):
    # Création du livre
    db_book = models.Book(
        **book.dict(),
        owner_id=current_user.id
    )
    
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    
    return db_book

@router.get("/", response_model=List[schemas.BookResponse])
def read_books(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # Récupération de tous les livres
    books = db.query(models.Book).offset(skip).limit(limit).all()
    return books

@router.get("/{book_id}", response_model=schemas.BookWithReviews)
def read_book(book_id: int, db: Session = Depends(get_db)):
    # Récupération d'un livre avec ses critiques
    book = db.query(models.Book).filter(models.Book.id == book_id).first()
    
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
        
    return book

@router.put("/{book_id}", response_model=schemas.BookResponse)
def update_book(
    book_id: int, 
    book_update: schemas.BookUpdate, 
    db: Session = Depends(get_db), 
    current_user: models.User = Depends(dependencies.get_current_user)
):
    # Récupération du livre
    db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    # Vérification des permissions (propriétaire ou admin)
    if db_book.owner_id != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    # Mise à jour des champs non nuls
    update_data = book_update.dict(exclude_unset=True)
    
    for key, value in update_data.items():
        setattr(db_book, key, value)
    
    db.commit()
    db.refresh(db_book)
    
    return db_book

@router.delete("/{book_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_book(
    book_id: int, 
    db: Session = Depends(get_db), 
    current_user: models.User = Depends(dependencies.is_admin)
):
    # Suppression d'un livre (admin seulement)
    db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    db.delete(db_book)
    db.commit()
    
    return None