import { createContext, useReducer} from 'react'

export const WorkoutsContext = createContext();

export const workoutReducer = (state,action) => {
    switch(action.type){
        case 'SET_WORKOUT':
            return {
                workouts:action.payload
            }
        case 'CERATE_WORKOUT':
            return{
                workouts:[action.payload,...state.workouts]
            }
            default:
                return state
    }
}

export const WorkoutContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(workoutsReducer,{
        workouts: null
    })

    dispatch({}) 

    return(
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}