import React, { useContext } from 'react'
import '../../../../App.css'
import { CounterContext } from './CounterContext'

const ContextF = () => {
    const {counter,setCounter}=useContext(CounterContext)
  return (
    <div className='app-border'>
        <h1>Context F Component</h1>
       
        <h2>{counter}</h2>
        <button onClick={()=>setCounter(counter +1)}>Increment</button>
        <ContextFChild  />
        <hr />
    </div>
  )
}

const ContextFChild=()=>{
    const {counter,setCounter}=useContext(CounterContext)
    return (
        <div className='app-border'>
            <h1>Context Child Component</h1>
         
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter -1)}>Decrement</button>
        </div>
    )
}

export default ContextF