import logging

from fastapi import FastAPI

app = FastAPI()
logger = logging.getLogger("uvicorn.info")
logger.info("api starting...")


@app.get("/")
async def root():
    return {"message": "Hello From API!"}
