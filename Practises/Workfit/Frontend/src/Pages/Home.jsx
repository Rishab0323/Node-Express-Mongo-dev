import{ useEffect,useState } from 'react'
import WorkoutDetails from '../Components/WorkoutDetails';
import WorkoutForm from '../Components/WorkoutForms';
import { useWorkoutsContext } from '../hooks/useWorkoutContext';


const Home = () => {
    const {workouts,dispatch} = useWorkoutsContext()
    useEffect(() => {
        const fetchWorkouts = async() => {
        const response = await fetch('/api/fit')
        const json = await response.json();

        if(response.ok){
            dispatch({type: 'SET_WORKOUTS',payload: json})
        }
     }
     fetchWorkouts();
    },[])
    return (
        <div className="home">
            <div className='workouts'>
            {workouts && workouts.map((workout) => ( 
                <WorkoutDetails key={workout._id} workout={workout}></WorkoutDetails>
            ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home;