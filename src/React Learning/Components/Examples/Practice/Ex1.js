import React, { useState } from 'react'

const Ex1 = () => {
    const [color,setColor]=useState("black")
    const click=()=>{
        setColor((color)=>color==="black"?"red":"black")
    }
  return (
    <>
    <button onClick={click}>Change Color</button>
    <h1 style={{color:color}}>sample text</h1>
    </>
  )
}

export default Ex1