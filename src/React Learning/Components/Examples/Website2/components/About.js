import React from 'react'
import Common from './Common'
import './style.css'
import a2 from "../../assets/im2.webp"
import { Outlet, Routes,Route, Link } from 'react-router-dom'
const About = () => {
  return (
  <>
 
<Common name="Welcome to About Page" imgsrc={a2} visit="/contact" btnname="Contact Now" />
<Outlet />
<Link to="new">Click</Link>

</>
  )
}

export default About