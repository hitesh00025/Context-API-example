import React, { useContext } from "react";
import {CounterContext,CounterArea} from './CounterArea';

 const DecrementComponent = () =>{

    const {count,setCount} = useContext(CounterContext)

    return (
     <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>

    )
}
export default DecrementComponent;