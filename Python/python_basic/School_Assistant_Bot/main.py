from fastapi import FastAPI,HTTPException
import uvicorn
from fastapi.responses import JSONResponse
from services.service_request import load_model, generate_embedding
from model.model_schema import EmbeddingRequest

app = FastAPI()

students = {
    1: {
        "name": "John Doe",
        "class_name": "Class A",
        "room_number": 101,
        "floor": 2,
        "marks": {
            "maths": 90,
            "science": 85,
            "english": 92
        }
    },
    2: {
        "name": "Jane Smith",
        "class_name": "Class B",
        "room_number": 201,
        "floor": 3,
        "marks": {
            "maths": 88,
            "science": 92,
            "english": 95
        }
    }
}
@app.get("/")
def read_root():    
    return {"message": "Welcome to the AI School Knowledge Assistant backend!"}

@app.get("/health")
def check_health():
    return {"status": "OK"}

@app.get("/student/{student_id}")
def get_student(student_id: int):
    if student_id not in students:                  #import HTTPException then 
        return {"error": "Student not found"}       #raise HTTPException(status_code=404, detail="Student not found")

    return students[student_id]


@app.event("startup")
async def startup_event():
    load_model()


@app.post("/embedding")
def get_embedding(request: EmbeddingRequest):
    try:
        embedding = generate_embedding(request.text)
        return {"embedding": embedding}
    except Exception as e:
        raise HTTPException({"message":"failed to generate embedding"}status_code=500, detail=str(e))
    

if __name__ == "__main__":
    uvicorn.run("main:app")