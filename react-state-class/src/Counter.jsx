import {useState} from "react";
export default function Counter(){

    let [count,setCount] = useState(0);

    function incCount(){
        setCount((currVal) =>{
            return currVal + 1;
        });

        setCount((currVal) =>{
            return currVal + 1;
        });
    }

    return (
        <div>
            <h3> Count = {count} </h3>
            <button onClick={incCount}> Increase Count </button>
        </div>
    )
} 