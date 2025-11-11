const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("Router");

app.use(express.json());

const port = 300;

app.listen(port,() =>{
    console.log(`listening to port ${port}`);
})

app.get("/user",(req,res) =>{
    
    res.send("hello user");
})
