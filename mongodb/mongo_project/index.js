const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./model/chat.js");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

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
    newChat.save().then((res) => {
        console.log("chat was added");
    })
    .catch((err) => {
        console.log(err);
    })   
    res.redirect("/chats");
});


app.get("/", (req,res) => {
    res.send("sever is ON");
});

app.listen(3000, () => {
    console.log("listening to port 3000");
});