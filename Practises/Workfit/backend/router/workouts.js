const express = require("express");

const router = express.router();

//to get all workouts
router.get("/",() => {
    res.json()
})

//to get a single workout
router.get("/:id",(req,res) => {
    res.json({msgg: "get a single request"});
})

//to post a new request
router.post("/",(req,res) => {
    res.json({msgg: "post a request"});
})

//to delete a workout
router.delete("/:id",(req,res) => {
    res.json({msgg: "delete a workout request"});
})

//to update a workout
router.patch("/:id",(req,res) => {
    res.json({msgg: "update workout request"});
})


module.exports = router;