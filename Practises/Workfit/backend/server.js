const express = require("express");
const app = express();

const mongoose = require("mongoose");
require('dotenv').config();

app.use((req,res,next) => {
    console.log(req.path , req.method);
    next();
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log("connnected to db listening to port ", process.env.PORT);
    });
})
.catch((error) => {
    console.log(error)
})


app.post("/", (req,res) => {
    res.json({msg : "welcome to the app"});
});

app.delete("/", (req,res) => {
    res.json({msg : "welcome to the app"});
});

app.patch("/", (req,res) => {
    res.json({msg : "welcome to the app"});
});


