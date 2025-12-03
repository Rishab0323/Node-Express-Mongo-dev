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

router.get("/courses",(req,res) => {
    Course.find({})
    .then((value) => {
        res.json({Course : value});
    })
    .catch((err) => {
        res.json(err);
    })
})

router.post("/courses/:courseId",userMiddleware, async(req,res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    console.log("hi ",username);

    await User.updateOne({
        username : username  
    },
        {
        "$push": {
            purchasedCourses : courseId
        }
    })
    res.json({
        msg : "Purchase complete!"
    })
});

router.get("/purchasedCourses",userMiddleware,async (req,res) => {
    const user = await User.findOne({
        username : req.header.username
    });
    console.log("hi ",username);
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });
    res.json({course : courses})
})

module.exports = router;