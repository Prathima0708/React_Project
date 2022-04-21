import React from 'react'
import './Contact.css'



 const Contact = () => {
     
    
  return (
    <div className='row'>
        <div className='col-md-12' id="Contact">
            <h1 className='ml-44'>Contact</h1>
            <br />
            <p className='ml-44 mr-44 contact  '>  We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <br />
            <h3 className='text-blue-900 ml-44 font-sans contact1'>Catering Service, 42nd Living St, 43043 New York, NY</h3>
            <p className='ml-44'>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form>
                 <input type="text" placeholder='Name' className='ml-44 w-4/5 h-11 border-b-2 border-b-gray-400 ' />
                
                <input type="number" placeholder='How many people' className='ml-44 w-4/5 mt-9 h-11 border-b-2 border-b-gray-400'/> 
                <input type="datetime-local"  className='ml-44 w-4/5 mt-9 h-11 border-b-2 border-b-gray-400'/> 
                <input type="text" placeholder='Message/Special requirements' className='ml-44 w-4/5 mt-9 h-11 border-b-2 border-b-gray-400'/> 
               <button className='ml-44 mt-9 p-3 hover:bg-slate-400 rounded-md'>Send Message</button>   
               
            </form>
        </div>
    </div>
  )
}
export default Contact