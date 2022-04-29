import React, { useEffect, useState } from 'react'

const Fcomponent = () => {
    const [time,setTime]=useState(new Date().toString())
    const [message,setMessage]=useState("Functional Component")

    useEffect(()=>{
        console.log("Component Mounted or updated")
        const interval=setInterval(showDate,1000)
        return ()=>{
            console.log("Clean up of interval")
            clearInterval(interval)
        }
    },[time])

    const showDate=()=>{
setTime(new Date().toString())
    }  
    return (
    <div>
        <div>{time}</div>
         <button onClick={showDate} >Show Date</button>
         <div>{message}</div>
         <button onClick={()=>setMessage("Changed Functional Component")}>Change message</button>
    </div>
  )
}

export default Fcomponent