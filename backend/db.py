import os

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import create_database, database_exists

from log import logger

PG_URI = os.getenv("PG_URI")
logger.info(f"connecting to postgres at: {PG_URI}")

engine = create_engine(PG_URI)
if not database_exists(engine.url):
    logger.info("creating database since it did not exist...")
    create_database(engine.url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
