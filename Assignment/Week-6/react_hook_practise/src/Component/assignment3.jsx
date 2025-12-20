import React ,{useState,useMemo} from 'react';

export const Assignment3 = () =>{
    const [items,setItems] = useState([
        {name : 'Chocolates', value: 10},
        {name: 'chips',value: 20},
        {name:'cooky',value:30},
        {name:'Tomato',value:40}
    ]);

    let totalValue = useMemo(() => {
        for(let i=0;i<items.length;i++){
            totalValue = totalValue+ items[i].value;
        }
        return totalValue;
    },[items])

    return (
        <div>
            <ul>
                {items.map((items,index) => {
                    <li key={index} > {items.name} - Price: ₹{items.value} </li>
                })}
            </ul>
            <p>Total Value : ₹{totalValue}</p>
        </div>
    )
}