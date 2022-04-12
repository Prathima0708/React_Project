import React from 'react'
import './Intro.css'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'
import Instgram from '../images/instagram.png'
import Vector1 from '../images/Vector1.png'
import Vector2 from '../images/Vector2.png'
import Boy from '../images/boy.png'
import Thumbup from '../images/thumbup.png'
import Crown from '../images/crown.png'

import Emoji from '../images/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

 const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>React Learning</span>
                <span>Explore React</span>
                <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </span>
            </div>
            <button className='button i-button'>Hire Me</button>

            <div className='i-icons'>
                <img src={Github} alt='img' />
                <img src={Linkedin} alt='img' />
                <img src={Instgram} alt='img' />
            </div>
        </div>
        <div className='i-right'>
        <img src={Vector1} alt='img' />
        <img src={Vector2} alt='img' />
        <img src={Boy} alt='img' />
        <img src={Emoji} alt='img' />
        

        <div style={{top:'-4%',left:'53%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
        </div>

        <div style={{top:'20rem',left:'-1rem'}}>
            <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award' />
        </div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>

        
        </div>
    </div>
  )
}

export default Intro