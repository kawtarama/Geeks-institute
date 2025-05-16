from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    name: str
    email: str
    address: Optional[str] = None  

class UserOut(BaseModel):
    id: int
    name: str
    email: str
    address: Optional[str] = None

    class Config:
        orm_mode = True
