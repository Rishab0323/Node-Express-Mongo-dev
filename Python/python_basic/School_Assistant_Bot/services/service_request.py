import numpy as np
import faiss
from sentence_transformers import SentenceTransformer

# Global model variable
model = None
faiss_index = None
knowledge_text = []


knowledge_embeddings = None

def load_model():
    global model
    if model is None:
        print("loading model...")
        model = SentenceTransformer("all-MiniLM-L6-v2")
        print("model loaded successfully.")

def initialize_knowledge_base():
    global knowledge_text, faiss_index

    knowledge_text = [
    "School timings are from 8am to 3pm.",
    "Library rules include no food, no loud talking, and no damage to books.",
    "Exam rules include no cheating, no leaving the room, and no talking.",
    ]

    if model is None:
        raise ValueError("Model not loaded")

    # Generate embedding
    knowledge_embeddings = model.encode(knowledge_text)

    knowledge_embeddings = np.array(knowledge_embeddings).astype("float32")
    faiss.normalize_L2(knowledge_embeddings)

    #embedding dimension
    dimension = knowledge_embeddings.shape[1]

    # Create FAISS index
    faiss_index = faiss.IndexFlatIP(dimension)
    faiss_index.add(knowledge_embeddings)

    print("FAISS index initialized successfully.")


def find_most_similar(text: str, threshold: float = 0.5):
    global faiss_index, model,knowledge_text

    if model is None or faiss_index is None:
        raise ValueError("System not initialized properly")

    if not text.strip():
        raise ValueError("Query text cannot be empty")

    query_embedding = model.encode([text])
    query_embedding = np.array(query_embedding).astype("float32")

    # Normalize query
    faiss.normalize_L2(query_embedding)

    scores, indices = faiss_index.search(query_embedding, k=1)
    top_score = float(scores[0][0])
    top_index = int(indices[0][0])

    if top_score < threshold:
        return {
            "answer" :"Sorry, I don't have information about that.",
            "similarity_score" : top_score
        }

    return {
        "answer" :knowledge_text[top_index], 
        "similarity_score" :top_score
    }



def generate_embedding(text: str):
    if model is None:
        raise ValueError("Model not loaded")

    embedding = model.encode(text)
    return embedding.tolist()