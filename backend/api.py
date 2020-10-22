from fastapi import FastAPI

from db import Base, engine
from item.router import router as item_router

Base.metadata.create_all(bind=engine)
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello From API!"}


app.include_router(
    item_router,
    prefix="/items",
    tags=["items"],
)
