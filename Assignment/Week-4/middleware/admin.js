const express = require("express");
const {Admin} = require("../db/database");
const router = express.Router();

router.use(express.json());

function adminMiddleware(req,res,next){

    const username = req.headers.username;
    const password = req.headers.password;
    
    Admin.findOne({
        username: username,
        password: password
    })
    .then( (value) => {
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: "user not found check credentials"
            })
        }
    })
}

module.exports = adminMiddleware;