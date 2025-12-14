import { createContext, useReducer} from 'react'

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(workoutsReducer,{
        workouts: null
    })

    dispatch({}) 

    return(
        <WorkoutContextProvider value={}>
            {children}
        </WorkoutContextProvider>
    )
}