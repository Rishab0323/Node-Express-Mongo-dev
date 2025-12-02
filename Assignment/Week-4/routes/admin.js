const express = require("express");
const  adminMiddleware = require("../middleware/admin.js");
const { Admin,Course } = require("../db/database.js");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/signup', (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    
    console.log("username -",username);
    console.log("password -",password)

    Admin.create({
        username, 
        password
    })
    .then( () => {
        res.json({
            msg: "Admin creates successfully"
        })
    })
    .catch(() => {
        res.json({
            msg:"Admin not created"
        })
    })
})

router.post('/courses',adminMiddleware, async (req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const coursePrice = req.body.coursePrice;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        coursePrice
    })
    console.log(newCourse);
    res.json({
        msg : "course created successfully",courseId : newCourse._id
    }); 
})

router.get("/courses",adminMiddleware,(req,res) =>{
    // const allCourse =
    Course.find({})
    .then((course) => {
        res.json({course:course});
    })
    .catch((err) => {
        res.json("error while fetching",err)
    })
})

module.exports = router;

