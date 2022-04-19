import React from 'react'
import Para from './Para'

const DemoOutput = (props) => {
    console.log('demooutput running')
  return (
     <Para>{props.show?'this is new':''}</Para>
  )
}

export  default React.memo(DemoOutput)
