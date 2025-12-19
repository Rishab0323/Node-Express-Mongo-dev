import { useState } from "react";
let sentence = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus expedita, repudiandae totam quidem possimus beatae minima voluptate soluta, est nostrum porro sunt quae modi necessitatibus molestias rerum quas sit. Numquam.";

export default function Assignment2(){
    const [filter,setFilter] = useState(['']);
    return(
        <>
            <input type="text" value={para} onChange={(e) => {setFilter(e.target.para)}} />
            <p>{sentence}</p>
        </>
    )
}