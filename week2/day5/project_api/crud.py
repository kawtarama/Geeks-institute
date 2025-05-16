from sqlalchemy.orm import Session
import models, schemas

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(name=user.name, email=user.email, address=user.address)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    user = get_user(db, user_id)
    if user:
        db.delete(user)
        db.commit()
        return True
    return False

def update_user(db: Session, user_id: int, user_update: schemas.UserCreate):
    user = get_user(db, user_id)
    if user:
        user.name = user_update.name
        user.email = user_update.email
        user.address = user_update.address
        db.commit()
        db.refresh(user)
        return user
    return None
