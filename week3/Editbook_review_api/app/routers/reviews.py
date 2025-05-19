from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from .. import models, schemas, dependencies
from ..database import get_db

router = APIRouter(tags=["Reviews"])

@router.post("/books/{book_id}/reviews", response_model=schemas.ReviewResponse)
def create_review(
    book_id: int,
    review: schemas.ReviewCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(dependencies.get_current_user)
):
    # Vérification de l'existence du livre
    db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    # Vérification si l'utilisateur a déjà posté une critique
    existing_review = db.query(models.Review).filter(
        models.Review.book_id == book_id,
        models.Review.user_id == current_user.id
    ).first()
    
    if existing_review:
        raise HTTPException(status_code=400, detail="You have already reviewed this book")
    
    # Création de la critique
    db_review = models.Review(
        **review.dict(),
        book_id=book_id,
        user_id=current_user.id
    )
    
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    
    return db_review

@router.get("/books/{book_id}/reviews", response_model=List[schemas.ReviewResponse])
def read_reviews(book_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # Vérification de l'existence du livre
    db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    # Récupération des critiques
    reviews = db.query(models.Review).filter(models.Review.book_id == book_id).offset(skip).limit(limit).all()
    
    return reviews

@router.put("/reviews/{review_id}", response_model=schemas.ReviewResponse)
def update_review(
    review_id: int,
    review_update: schemas.ReviewUpdate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(dependencies.get_current_user)
):
    # Récupération de la critique
    db_review = db.query(models.Review).filter(models.Review.id == review_id).first()
    
    if db_review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    
    # Vérification des permissions (propriétaire ou admin)
    if db_review.user_id != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    # Mise à jour des champs non nuls
    update_data = review_update.dict(exclude_unset=True)
    
    for key, value in update_data.items():
        setattr(db_review, key, value)
    
    db.commit()
    db.refresh(db_review)
    
    return db_review

@router.delete("/reviews/{review_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_review(
    review_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(dependencies.get_current_user)
):
    # Récupération de la critique
    db_review = db.query(models.Review).filter(models.Review.id == review_id).first()
    
    if db_review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    
    # Vérification des permissions (propriétaire ou admin)
    if db_review.user_id != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    db.delete(db_review)
    db.commit()
    
    return None