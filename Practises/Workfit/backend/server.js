const express = require("express");
const app = express();

require('dotenv').config();


app.get("/", (req,res) => {
    res.json({msg : "welcome to the app"});
});

app.listen(process.env.PORT, () => {
    console.log("listening to port ", process.env.PORT);
});

