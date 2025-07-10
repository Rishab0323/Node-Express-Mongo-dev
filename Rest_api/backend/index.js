const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let port = 3000;

app.get("/register",(req,res) => {
    let {user,password} = req.query;
    res.send(`this is GET request,Welcome ${user}`);
})

app.post("/register",(req,res) =>{
    let{user,passwaord}=req.body;
    res.send("POST method is working");
});

app.listen(port,(req,res) =>{
    console.log(`listening to port ${port}`);
});