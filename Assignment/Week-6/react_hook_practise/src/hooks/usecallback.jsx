import { useCallback, useState } from "react";

 const CounterComponent = () => {
    const [count,setCount] = useState(0);

    function increment(){
        setCount(count +1);
    }

    function decrement(){
        setCount(count -1);
    }
    return(
        <>
            <h2>Counter value {count}</h2>
            <button onClick={handleDecrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </>
    )
}

//same function using callback hook

function CounterOptimized(){
    const [count,setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount((currentCount) => {
            return currentCount + 1;
        })
    },[]);

    const handleDecrement = useCallback(() => {
        setCount((count) => {                      //we can name the count or currentCount 
            return count-1;
        })
    },[])

    return (
        <>
            <p>Count :{count}</p>
            <CounterButtons onIncrement ={handleIncrement} onDecrement={handleDecrement} />
        </>
    )
}

const CounterButtons = memo(({onIncrement,onDecrement}) => (
    <>
        <button onClick={onIncrement}>Increase</button>
        <button onClick={onDecrement}>Decrease</button>
    </>
))

export default {CounterComponent,CounterOptimized};