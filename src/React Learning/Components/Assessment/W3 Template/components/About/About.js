import React from 'react'
import im1 from '../assets/photo-1506280754576-f6fa8a873550.jfif'
import './About.css'


const About=()=>{
  return(
    
      <div className='row'>
        <div className='col-md-2'>

        </div>
      <div className='col-md-4'>
      <img src={im1} alt="im1" className=' mt-11 mb-11 h-4/5  aboutImage'/>
      </div>
      <div className='col-md-4'>
      <h1 className='mt-11 tracking-widest about ' id="About">About Catering</h1>
            <br />
            <br />
            <h3 className='tracking-widest about '>Tradition since 1889</h3>
             <br />
             <p className=' font-medium font-mono about'>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className='bg-gray-200'>seasonal</span>  ingredients.</p>
<br />
            <p className='text-gray-500  font-serif'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className='col-md-2'>

      </div>
      </div>
    
  )
}


export default About