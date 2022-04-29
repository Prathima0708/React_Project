import React, { useState } from 'react'
import '../../../../App.css'
import ContextF from './ContextF'
import { CounterContext } from './CounterContext'


const Context = () => {
    const [counter,setCounter]=useState(0)
    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
  return (
    <div className='app-border'>
        <h1>Context component</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <hr/>
        <CounterContext.Provider value={{counter,setCounter}}>
        <ContextF  />
        </CounterContext.Provider>
    </div>
  )
}

export default Context