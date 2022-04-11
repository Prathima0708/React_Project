import React from 'react'
import bgimage from "../../../Examples/assets/im2.webp"
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-black border-0">
            <img src={bgimage} alt='bg' height="550px"/>

  <div className="card-img-overlay d-flex flex-column justify-content-center">
      <div className='container'>
      <h5 className="card-title display-3 mb-2 fw-bold">New Season Arrivals</h5>
    <p className="card-text lead fs-2">
        CHECK OUT ALL THE TRENDS
        </p>
      </div>
    
    
  </div>
</div>

<Products />
    </div>
  )
}

export default Home
