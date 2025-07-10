const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let posts = [
    {
        id : "1a",
        username : "Rishab",
        content : "Rest"
    },
    {
        id : "2b",
        username : "Restful",
        content : "API"
    },
    {
        id : "3c",
        username : "Raju",
        content : "apply for internship"
    }
]

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"publix")));

app.get("/posts",(req,res) =>{
    res.render("index",{posts});
});

app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {
   
    let {id,username,content} = req.body;
    // res.send("Your post id added");
    posts.push({id,username,content});
    res.redirect("/posts");
});


app.get("/posts/:id", (req,res) => {
   
    let {id} = req.params;
    // posts.push({id,username,content});
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    // res.send("which id is yours");
    // res.redirect("/posts");

    res.render("show.ejs",{post});
});

//patch request
app.patch("/posts/:id",(req,res) => {
    let { id } = req.params;
    let newContent =   req.body.content;
    console.log(id);
    res.send("patch request is working");
});

//edit request
app.get("/posts/:id/edit",(req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs");
});

app.listen(port,() => {
    console.log(`listening to port ${port}`);
});