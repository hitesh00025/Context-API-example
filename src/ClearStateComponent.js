import React, { useContext } from "react";
import {CounterContext,CounterArea} from './CounterArea';

const ClearStateComponent = () =>{

    const {count,setCount} = useContext(CounterContext)

    return (
     <button onClick={()=>setCount(0)}>Clear</button>

    )
}
export default ClearStateComponent;