import React from 'react'
import { NavLink } from 'react-router-dom'
import meals from '../../assets/a1.jpg'
import './style.css'

const Home = () => {
  return (
    <section id="header" className='flex items-center'>
         <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 flex justify-center flex-col'>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <h2 className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h2>
                    <div className='mt-3'>
                        <NavLink to='/service' className='btn btn-outline-primary'>Get Started</NavLink>
                    </div>
                </div>

            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={meals} className="img-fluid animated" alt="img"/>
            </div>
            </div>


                </div>
                </div>
            </div>

    </section>
  )
}

export default Home