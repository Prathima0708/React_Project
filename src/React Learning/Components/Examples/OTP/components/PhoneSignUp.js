import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button,Form,Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';


const PhoneSignUp = () => {
    const [number,setNumber]=useState("")
    const [error,setError]=useState("")
    const getOTP=()=>{
        console.log(number)
    }
  return (
    <>

<div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOTP}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput defaultCountry='IN' value={number} onChange={setNumber} placeholder="Enter Phone Number" 
            />
          </Form.Group>
          <div className='button-right'>
              <Link to="/">
              <Button variant="secondary">Cancel</Button>&nbsp;</Link>
              <Button variant="primary" type='submit'>Send OTP</Button>
          </div>
          </Form>
          </div>

    </>
  )
}

export default PhoneSignUp