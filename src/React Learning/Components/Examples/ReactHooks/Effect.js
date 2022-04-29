import React, { useState } from 'react'
import Fcomponent from './Fcomponent'

const Effect = () => {
    const [flag,setFlag]=useState(true)
  return (
    <>
    <div className='App'>
        <div>
            <button onClick={()=>setFlag(!flag)}>Toggle Function component</button>
        </div>
        {flag ? <Fcomponent />:""}
    </div>
    </>
  )
}

export default Effect