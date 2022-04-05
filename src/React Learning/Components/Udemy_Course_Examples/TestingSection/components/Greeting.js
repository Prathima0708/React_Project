import React, { useState } from 'react'

export const Greeting = () => {
    const [changedText,setChangedText]=useState(false)
    const changeTextHandler=()=>{
        setChangedText(true)
    }
  return (
    <div>
        <h1>Hello World</h1>
       {!changedText &&  <p>Its good to see you</p>}
       {changedText && <p>Changed!</p>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}
