import { useMemo, useState } from "react"; 

function Assignment1(){
    const [input,setInput] = useState();

    const expensiveValue = useMemo(() => {
        let expensiveValue = 1;
    for(let i=1;i<=input;i++){
        expensiveValue = i * expensiveValue;
    }
    return expensiveValue;
    },[input])

    return (
        <>
      <input type="number" value={input} 
      onChange={(e) => setInput(Number(e.target.value))}/>
      <p>Calculated factorial : {expensiveValue}</p>
      </>
    )
}

export default Assignment1;