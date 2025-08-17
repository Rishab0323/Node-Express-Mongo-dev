const Workout = require("../Models/workoutModel");
const mongoose = require("mongoose");

//get all workout
const getWorkout = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
}

//get a single workout
const singleWorkout = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "no such workout"});
    }

    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error : "workout not found"});
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
const deleteWorkout = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "no such workout"});
    }
    
    const workout = await Workout.findOneAndDelete({_id: id});

         if(!workout){
        return res.status(404).json({error : "workout not found"});
    }

    res.status(200).json(workout);
}

//update workout
const updateWorkout = async(req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "no such workout"});
    }
    
    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

      if(!workout){
        return res.status(404).json({error : "workout not found"});
    }
    res.status(200).json(workout);
}

module.exports = {
    createWorkout,
    getWorkout,
    singleWorkout,
    deleteWorkout,
    updateWorkout
};