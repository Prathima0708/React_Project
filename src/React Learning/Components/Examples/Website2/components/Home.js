import React from 'react'
import meals from "../../assets/a1.jpg"
import Common from './Common'
import './style.css'

const Home = () => {
  return (
      <>
    
   <Common name="Welcome to Home Page" imgsrc={meals} visit="/service" btnname="Get Started" />
 
   </>
  )
}

export default Home