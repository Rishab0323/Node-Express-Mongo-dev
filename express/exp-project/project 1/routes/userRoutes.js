const express = require("express");
const router = express.Router();

``
//POST request for /user or /register

router.post("/register",(req,res) =>{
    console.log("recieved body",req.body);


    const {username,email} = req.body;
    res.send(`user ${username} registered with email ${email}`);
});

module.exports = router;