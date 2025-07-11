const express = require("express");
const app = express();
const studentRoutes = require('./routes/student');// here i will create student.js file as route file
require("./database/connection");
// const db = require("./database/connection");


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/students",studentRoutes);

app.listen(8080,() => {
    console.log("listening to port 8080");
});

