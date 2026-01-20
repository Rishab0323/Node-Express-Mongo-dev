const  express = require('express');
const adminMiddleware = require("../middleware/admin");
const {Router} = require("express");
const jwt = require('jsonwebtoken');

Router.post("/signup",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username : username,
        password : password
    })

    res.json({msg : 'admin created successfully-'});
});

Router.post("/signin", async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user) {
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            msg : 'inncorrect  email and pass'
        })
    }


});