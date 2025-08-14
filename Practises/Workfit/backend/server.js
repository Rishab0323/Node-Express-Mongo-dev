const express = require("express");
const app = express();

const WorkoutRouter = require("./router/workouts");
 
const mongoose = require("mongoose");
require('dotenv').config();

app.use("/api/fit",WorkoutRouter);

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
    console.log(error);
})




