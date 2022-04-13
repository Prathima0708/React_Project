import React from 'react'
import './Services.css'
import Heart from '../images/heartemoji.png'
import glass from '../images/glasses.png'
import humble from '../images/humble.png'
import Card from '../Card/Card'
import '../Card/Card.css'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className='services'>
        <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</span>

      <a href={Resume} download>
      <button className='button s-button'>Download CV</button>
      </a>

      
        <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className='cards'>
          <div style={{left:'14rem'}}>
            <Card emoji={Heart} heading={'Design'} detail={'Lorem Ipsum is simply dummy text of the printing and typesetting'}/>
          </div>

          <div style={{top:'12rem',left:'-4rem'}}>
            <Card emoji={glass} heading={'Developer'} detail={'Lorem Ipsum is simply dummy text of the printing and typesetting'}/>
          </div>

          <div style={{top:'31rem',left:'13rem'}}>
            <Card emoji={humble} heading={'UI/UX'} detail={'Lorem Ipsum is simply dummy text of the printing and typesetting'}/>
          </div>

          <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>

        </div>
    </div>
  )
}

export default Services
