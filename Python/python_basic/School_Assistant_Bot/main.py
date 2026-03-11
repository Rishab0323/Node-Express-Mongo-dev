from fastapi import FastAPI,HTTPException
import uvicorn
import numpy as np
from fastapi.responses import JSONResponse
from services.service_request import (
    load_model,
    initialize_knowledge_base,
    find_most_similar,
    generate_embedding
)

from services.llm_services import (
    load_llm,
    generate_answer
)


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


@app.on_event("startup")
async def startup_event():
    load_model()
    initialize_knowledge_base()
    load_llm()


@app.post("/embedding")
def get_embedding(request: EmbeddingRequest):
    try:
        embedding = generate_embedding(request.text)
        return {"embedding": embedding}
    except Exception as e:
        raise HTTPException(status_code=500, detail="failed to generate embedding")
    
#ask query to model
@app.post("/ask")
def ask(request: EmbeddingRequest):
    try:
        result = find_most_similar(request.text)
        context = result["answer"]
        similarity_score = result["similarity_score"]
        llm_answer = generate_answer(context, request.text)
    
        return {
        "question" : request.text,
        "retrieved_context" : context,
        "generated_answer" : llm_answer,
        "similarity_score" : similarity_score
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail="failed to process query")


if __name__ == "__main__":
    uvicorn.run("main:app")