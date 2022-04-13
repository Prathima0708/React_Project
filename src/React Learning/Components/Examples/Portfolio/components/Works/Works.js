import React from 'react'
import './Works.css'
import Shopify from '../images/Shopify.png'
import fb from '../images/Facebook.png'
import fiverr from '../images/fiverr.png'
import upwork from '../images/Upwork.png'
import amazon from '../images/amazon.png'

const Works = () => {
  return (
    <div className='works'>
        <div className='awesome'>
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br /> when an unknown printer took a galley
        <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>

     
      <button className='button s-button'>Hire Me</button>
      

      
        <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
        </div>

        <div className='w-right'>
            <div className='w-mainCircle'>
                <div className='w-secCircle'>
                    <img src={upwork} alt="bg" />
                </div>
                <div className='w-secCircle'>
                    <img src={fiverr} alt="bg" />
                </div>
                <div className='w-secCircle'>
                    <img src={amazon} alt="bg" />
                </div>
                <div className='w-secCircle'>
                    <img src={Shopify} alt="bg" />
                </div>
                <div className='w-secCircle'>
                    <img src={fb} alt="bg" />
                </div>
            </div>

            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>


        </div>

    </div>
  )
}


export  default Works