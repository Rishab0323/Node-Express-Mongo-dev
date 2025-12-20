import { useState } from "react";

const words = ["hi","my","name","is","for","to","random","words"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for(let i=0;i<TOTAL_LINES;i++){
    let sentences = "";
    for(j=0;j< words.length;j++){
        sentences += (words[Math.floor(words.length * Math.random())])
        sentences += ""
    }
    ALL_WORDS.push(sentences);
}



export default function Assignment2(){
    const [sentence,setSentence] = useState(ALL_WORDS);
    const [filter,setFilter] = useState();

    const filteredSentence = sentence.filter(c => x.includes(filter));

    return(
        <>
            <input type="text" value={para} onChange={(e) => {setFilter(e.target.value)}} />
            <p>{filteredSentence.map(word => {
                <div> {word} </div>
            })}</p>
        </>
    )
}