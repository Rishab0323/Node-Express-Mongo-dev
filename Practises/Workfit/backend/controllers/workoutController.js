const Workout = require("../Models/workoutModel");

//get all workout
const getWorkout = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
}

//get a single workout
const singleWorkout = async (req,res) => {
    const {id} = req.params;
    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error : "woekout not found"});
    }
    res.status(200).json(workout);
}


//create new workout
const  createWorkout = async (req,res) => {
    const {title,load,reps} = req.body;
    try{
        const workout = await Workout.create({title,load,reps});
        res.status(200).json({workout});
    }catch(error){
        res.status(404).json({error : error.message}) //error with message
    }
}

//delete workout


//update workout


module.exports = {
    createWorkout,
    getWorkout,
    singleWorkout
};