from fastapi import FastAPI ,Path

app = FastAPI()

inventory = {
    1:{
        "name" : "panner",
        "price" : 100,
        "brand" : "regular"
    }
}

@app.get("/")
def home():
    return {"msg : fast api working"}

@app.get("/about")
def about():
    return {"data: about page"}

@app.get("/get-item/{item_id}")
def get_item(item_id:int = Path(description ="the id of the item you'd like ")):
    return inventory[item_id]   

@app.get("/home")
def home():
    return {"msg : fast api working"}

