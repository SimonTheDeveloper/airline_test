from fastapi import FastAPI
from . import models, schemas, crud, database

app = FastAPI()

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/flights/", response_model=List[schemas.Flight])
async def read_flights():
    return await crud.get_flights()
