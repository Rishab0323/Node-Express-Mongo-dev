import numpy as np
from sentence_transformers import SentenceTransformer

# Global model variable
model = None

knowledge_base = [
    "School timings are from 8am to 3pm.",
    "Library rules include no food, no loud talking, and no damage to books.",
    "Exam rules include no cheating, no leaving the room, and no talking.",
]

knowledge_embeddings = None

def load_model():
    global model
    if model is None:
        print("loading model...")
        model = SentenceTransformer("all-MiniLM-L6-v2")
        print("model loaded successfully.")

def intialize_knowledge_base():
    global knowledge_embeddings
    if model is None:
        raise ValueError("Model not loaded")
    knowledge_embeddings = model.encode(knowledge_base)

    ##cosine similarity
    norms = np.linalg.norm(knowledge_embeddings, axis=1, keepdims=True)
    knowledge_embeddings = knowledge_embeddings / norms

    print("knowledge base initialized successfully.")


def find_most_similar(text: str):
    """
    Find most similar knowledge text using cosine similarity.
    """
    global knowledge_embeddings, model
    query_embedding = model.encode(text)
    
    # Normalize query embedding
    query_embedding = query_embedding / np.linalg.norm(query_embedding)

    # Compute cosine similarity
    similarities = np.dot(knowledge_embeddings, query_embedding)
    top_index = np.argmax(similarities)
    return knowledge_base[top_index], float(similarities[top_index])


def generate_embedding(text: str):
    if model is None:
        raise ValueError("Model not loaded")

    embedding = model.encode(text)
    return embedding.tolist()