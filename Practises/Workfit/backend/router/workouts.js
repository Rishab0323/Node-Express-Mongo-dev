const express = require("express");
const Workout = require("../Models/workoutModel");

const router = express.Router();
router.use(express.json());

//to get all workouts
router.get("/",(req,res) => {
    res.json({msg : " hello route"});
})

//to get a single workout
router.get("/:id",(req,res) => {
    res.json({msgg: "get a single request"});
})

//to post a new request
router.post("/", async (req,res) => {
    const {title,load,reps} = req.body;
    try{
        const workout = await Workout.create({title,load,reps});
        res.status(200).json({workout});
    }catch(error){
        res.status(404).json({error : error.message}) //error with message
    }
    
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