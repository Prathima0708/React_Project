import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>
                React
            </div>
            <span>Toggle</span>
        </div>

        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li to="#s">Services</li>
                    <li>Portfolio</li>
                    <li>Experience</li>
                    <li>Test</li>
                </ul>
            </div>
            <button className='button n-button'>
            Contact Us
        </button>
        </div>

       
    </div>
  )
}

export default Navbar
