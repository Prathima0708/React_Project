import React from 'react'
import './index.css'

export default function Modal() {
  return (
    <div className='modal'>
        <p> Are are you sure?</p>
        <button className='btn btn--alt'>Cancel</button>
        <button className='btn'>Confirm</button>
    </div>
  )
}

