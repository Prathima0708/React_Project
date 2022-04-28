import React, { useState } from 'react'
import './style.css'

const Contact = () => {
  const [data,setData]=useState({
    fullname:'',
    email:'',
    phone:'',
    message:''
  })

  const inputEventHandler=event=>{
const {name,value}=event.target
setData((preVal)=>{
  return {
    ...preVal,
    [name]:value
  }
})
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    alert(`Name is : ${data.fullname} 
Email Address is : ${data.email} 
Phone number is :${data.phone} 
and message is : ${data.message}`)
  }


  return (
  <>
  <div className='py-5'>
    <h1 className='text-center'>Contact Us</h1>
  </div>

<div className='container contact_div'>
  <div className='row'>
    <div className='col-md-6 col-10 mx-auto'>
      <form onSubmit={submitHandler}>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"  name="fullname" value={data.fullname}  onChange={inputEventHandler} placeholder="Enter your name" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  name="email" value={data.email}  onChange={inputEventHandler} placeholder="name@example.com" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone number</label>
  <input type="number" inputMode='numeric' class="form-control" id="exampleFormControlInput1"  name="phone" value={data.phone}  onChange={inputEventHandler} placeholder="Phone number" />
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message}  onChange={inputEventHandler} rows="3"></textarea>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

      </form>
    </div>
  </div>
</div>

  </>
  )
}

export default Contact