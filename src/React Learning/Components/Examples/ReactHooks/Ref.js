import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const [name,setName]=useState("")
    const [counter,setCounter]=useState(0)
    const inputEle=useRef("")
    const prevCounterRef=useRef("")

    console.log(inputEle)
    const resetInput=()=>{
        setName("")
        inputEle.current.focus()
        console.log(inputEle.current.value)
    }

    useEffect(()=>{
        prevCounterRef.current=counter
    },[counter])

  return (
    <div className='App'>
        <div>
            <input ref={inputEle} type="text" name='name' autoComplete='off' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={resetInput}>Reset</button>
        </div>

        <div>My name is {name}</div>
<div>
<h1>Random Counter : {counter}</h1>
{typeof prevCounterRef.current!=="undefined" && (
    <h2>Previous Counter : {prevCounterRef.current}</h2>
)}
<button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>Generate Random Number</button>
</div>
    </div>
  )
}

export default Ref