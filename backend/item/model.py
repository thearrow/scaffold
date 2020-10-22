from pydantic import BaseModel
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from db import Base


# ==========================================
# sqlalchemy models for database interaction
# ==========================================
class Item(Base):
    __tablename__ = "item"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    subitems = relationship("SubItem", back_populates="parent")


class SubItem(Base):
    __tablename__ = "subitem"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    is_active = Column(Boolean, default=True)
    parent_id = Column(Integer, ForeignKey("item.id"))
    parent = relationship("Item", back_populates="subitems")


# ==========================================
# pydantic models for api validation
# ==========================================
class ItemAPICreate(BaseModel):
    title: str
    description: str


class ItemAPI(ItemAPICreate):
    id: int

    class Config:
        orm_mode = True


class SubItemAPICreate(BaseModel):
    email: str
    is_active: bool


class SubItemAPI(SubItemAPICreate):
    id: int

    class Config:
        orm_mode = True
