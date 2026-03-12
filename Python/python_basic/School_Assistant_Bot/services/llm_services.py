from transformers import pipeline
generator = None

def load_llm():
    global generator

    if generator is None:
        print("loading LLM..")
        generator = pipeline("text-generation", model="google/flan-t5-base",framework="pt")
        print("LLM loaded successfully")

def generate_answer(context,question):
    prompt = f"""
    context: {context}
    question: {question}
    answer:
    """
    return generator(prompt, max_length=100)[0]["generated_text"]