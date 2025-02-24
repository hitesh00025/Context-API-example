import React, { useContext } from "react";
import {CounterContext,CounterArea} from './CounterArea';

 const IncrementComponent = () =>{

    const {count,setCount} = useContext(CounterContext)

    return (
        <>
        <h1>{count}</h1>
     <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
     </>
    )
}

export default IncrementComponent;