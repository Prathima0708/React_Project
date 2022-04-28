import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
const Service = () => {
  return (
    <>
    <div className='my-5'>
      <h1 className='text-center'>Our Services</h1>
      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gap-y-4'>
                
                {Sdata.map((ser,index)=>(
                  <Card id={index} imgsrc={ser.imgsrc} title={ser.title}/>
                ))}
              </div>
            </div>
            </div>
            </div>
            
    </div>
    </>
  )
}

export default Service