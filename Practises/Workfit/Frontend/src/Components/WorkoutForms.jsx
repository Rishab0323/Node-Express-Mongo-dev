import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

const WorkoutForm = () =>{
    const {dispatch} =useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault()

        const workout ={title,load,reps}

        const response = await fetch('/api/fit' ,{
            method: 'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json();
        console.log("Response status",response.status);
        console.log("backend JSON",json);

        if(!response.ok){
            setError(json.error);
        }
        if(response.ok){
            
            setTitle('');
            setLoad('');
            setReps("");
            setError(null);
            console.log("new workout added",json);
            dispatch({type: 'CREATE_WORKOUT',payload:json})
        }
    }

    return(
        <form  className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>

            <label >Exercise Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)}
            value={title} />

            <label >Load (in kg):</label>
            <input type="number" onChange={(e) => setLoad(e.target.value)}
            value={load} />

            <label >Reps :</label>
            <input type="number" onChange={(e) => setReps(e.target.value)}
            value={reps} />
            <button>Add Workout</button>
                                     {/* ////check the error state which is not used then go ahead */}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;