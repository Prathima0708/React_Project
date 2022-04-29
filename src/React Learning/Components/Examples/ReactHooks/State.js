import React, { useState } from 'react'
import '../../../../App.css'

const Hooks = () => {
  const [name ,setName]=useState("React") 
  const [flag,setFlag]=useState(false)
  const [steps,setSteps]=useState(0)
  const [names,setNames]=useState([])

    function chnageName(){
       
       setFlag(!flag)
    }
    function increment(){
        setSteps((prev)=>prev+1)
        setSteps((prev)=>prev+1)
    }
    function decrement(){
        setSteps(steps-1)
    }
    function addNames(e){
       e.preventDefault() 
       setNames([...names,{id:names.length,name:name}])
       setName("")
    }
  return (
    <>
    <div className='App'>
    <h1 className='text-center'>Hello ,{flag ? name :""}</h1>
    <button  onClick={chnageName}>Click Me</button>
    <hr></hr>

    <button onClick={increment}>+</button>
    <div > {steps}</div>
    <button onClick={decrement}>-</button>
    <hr></hr>

    <form onSubmit={addNames}>
        <input type="text" value={name} placeholder="add names" onChange={(e)=>setName(e.target.value)} />
        <br />
        <button className='mt-3'>Add Names</button>
    </form>

    <hr />
   <ul >
       {names.map((item)=>(
           <li  key={item.id}>{item.name}</li>
       ))}
   </ul>
   
    </div>
    </>
  )
}

export default Hooks