import { useState } from "react"; 

function Assignment1(){
    const [input,setInput] = useState(0);

    let expensiveValue = 1;
    for(let i=0;i<=input;i++){
        expensiveValue = i * expensiveValue;
    }


    return (
        <>
      <input type="number" value={input} 
      onChange={(e) => setInput(Number(e.target.value))}/>
      <p>Calculate factorial : {expensiveValue}</p>
      </>
    )
}

export default Assignment1;