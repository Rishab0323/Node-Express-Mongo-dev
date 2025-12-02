const express = require("express");
const userMiddleware = require("../middleware/user.js") 
const {User, Course} = require("../db/database.js")
const router = express.Router();

router.post("/signup" ,(req ,res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log("username",username);
    console.log("password",password);

    User.create({
        username,
        password
    })
    .then((value) => {
        res.json({msg :"user created"},value.username);
    })
})

module.exports = router;