const express = require("express");
const Workout = require("../Models/workoutModel");
const {createWorkout,getWorkout,singleWorkout} = require("../controllers/workoutController");

const router = express.Router();
router.use(express.json());

//to get all workouts
router.get("/", getWorkout);

//to get a single workout
router.get("/:id",singleWorkout);

//to post a new request
router.post("/", createWorkout);

//to delete a workout
router.delete("/:id",(req,res) => {
    res.json({msgg: "delete a workout request"});
})

//to update a workout
router.patch("/:id",(req,res) => {
    res.json({msgg: "update workout request"});
})


module.exports = router;