import React, { useCallback, useEffect, useMemo, useState } from 'react'


const CallBack = () => {
    const [counter,setCounter]=useState(1)
    const result= useMemo(()=>{
        return factorial(counter)
    },[counter]) 

    // console.log("UseMemo here",result)

    const [name,setName]=useState("")

    const displayName= useCallback((greeting)=>{
        return greeting + " " + name
    },[name])

    
    // console.log("useCallback here",displayName)

  return (
    <div className='App'>
        <h1>Factorial of {counter} is : <span>{result}</span></h1>
        <div >
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
        </div>
        <hr/>
        <div>
            <label>Enter Name</label>
            <input type="text" value={name} placeholder="enter your name" onChange={(e)=>setName(e.target.value)} />
            <hr />
            <DisplayName displayName={displayName} />
            {/* <p>{`My name is : ${name}`}</p> */}
        </div>
    </div>
  )
}

const DisplayName=({displayName})=>{
    // console.log("rendered")
    const [value,setValue]=useState("")
    useEffect(()=>{
        setValue(displayName("Hello"))
        console.log("component rendered")
    },[displayName])
    return <p>{`My name is : ${value}`}</p>
}


function factorial(n){
    
    if(n<0){
        return -1
    }
    if(n===0){
        return 1
    }
    return n*factorial(n-1)
}

export default CallBack