import React from 'react'
import mealsImage from '../assets/meals.jpg'
import './MainImage.css'

const MainImage = () => {
  return (
    <div id="MainImage">
        <img src={mealsImage} alt="im1" className='h-full w-full mt-1 im1 ' />
       
        
    </div>
  )
}
export default MainImage