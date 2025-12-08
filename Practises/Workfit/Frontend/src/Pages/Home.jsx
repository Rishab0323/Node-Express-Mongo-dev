import{ useEffect } from 'react'


const Home = () => {
    const [workouts,setWorkouts] = useState(null);


    useEffect(() => {
        const fetchWorkouts = async() => {
        const response = await fetch('https://localhost:4000/api/workouts')
        const json = await response.json();

        if(response.ok){

        }
        }
        
    },[])
    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Home;