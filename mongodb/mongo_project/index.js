const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./model/chat.js");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));  

main().then(() => {
    console.log("database Connected Successfully");
})
.catch((err) => {
    console.log("failed conenction",err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//sending data to database
// let chat1 = new chat({
//     from: "nirahua",
//     to: "neha",
//     msg:"nirahua rikshawala",
//     created_at: new Date()
// });

// chat1.save().then((res) => {
//     console.log(res);
// });

//Index route
app.get("/chats", async (req,res) =>{
    let chats = await chat.find();
    console.log(chats);
    res.render("ind.ejs",{chats});
});

//new route
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
});

//post 
app.post("/chats",(req,res) => {
    let {from,to,msg} = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    console.log("this is the new",newChat);
    newChat.save().then((res) => {
        console.log(res);
        console.log("chat was added");
    })
    .catch((err) => {
        console.log(err);
    })   
    res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chit = await chat.findById(id);
    res.render("edit.ejs",{chit});
    
})


//update
app.get("/chat/:id",async (req,res) => {
    let {id} = req.params;
    let {msg:newMsg} = req.body;
    let updatedChat = await chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators: true,new: true}
    );

    console.log(updatedChat);
    res.redirect("chats");
});

app.delete("/chat/:id", async(req,res) =>{
    let {id} = req.params;
    let chatDeleted = await chat.findByIdAndDelete(id);
    console.log( chatDeleted +"chat is deleted");
    res.redirect("/chats");
})


app.listen(3000, () => {
    console.log("listening to port 3000");
});