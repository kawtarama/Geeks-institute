from pydantic import BaseModel, EmailStr, Field, validator
from typing import List, Optional
from datetime import datetime

# User schemas
class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    role: str
    created_at: datetime

    class Config:
        orm_mode = True

# Book schemas
class BookBase(BaseModel):
    title: str
    author: str
    description: Optional[str] = None
    publication_year: Optional[int] = None

class BookCreate(BookBase):
    pass

class BookUpdate(BookBase):
    title: Optional[str] = None
    author: Optional[str] = None

class BookResponse(BookBase):
    id: int
    owner_id: int
    created_at: datetime

    class Config:
        orm_mode = True

# Review schemas
class ReviewBase(BaseModel):
    text: str
    rating: int = Field(..., ge=1, le=5)

    @validator('rating')
    def check_rating(cls, v):
        if v < 1 or v > 5:
            raise ValueError('Rating must be between 1 and 5')
        return v

class ReviewCreate(ReviewBase):
    pass

class ReviewUpdate(BaseModel):
    text: Optional[str] = None
    rating: Optional[int] = Field(None, ge=1, le=5)

class ReviewResponse(ReviewBase):
    id: int
    book_id: int
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

# Book with reviews
class BookWithReviews(BookResponse):
    reviews: List[ReviewResponse] = []

    class Config:
        orm_mode = True

# Token schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None