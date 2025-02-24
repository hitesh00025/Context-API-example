import React, { Children, useState } from 'react';

export const CounterContext = React.createContext();

export const CounterArea= ({children})=>{

    const [count,setCount]= useState(0);

    return (
<CounterContext.Provider value = {{count,setCount}}>
{children}
</CounterContext.Provider>

    )

}