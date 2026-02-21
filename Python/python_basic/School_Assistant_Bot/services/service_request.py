from sentence_transformers import SentenceTransformer

# Global model variable
model = None

def load_model():
    global model
    model = SentenceTransformer("all-MiniLM-L6-v2")

def generate_embedding(text: str):
    if model is None:
        raise ValueError("Model not loaded")

    embedding = model.encode(text)
    return embedding.tolist()