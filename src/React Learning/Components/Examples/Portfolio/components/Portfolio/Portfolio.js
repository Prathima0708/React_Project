import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import './Portfolio.css'

import sidebar from '../images/sidebar.png'
import ecom from '../images/ecommerce.png'
import hoc from '../images/hoc.png'
import music from '../images/musicapp.png'
import 'swiper/css'

const Portfolio = () => {
  return (
   <div className='portfolio'>
       <span>Recent Projects</span>
       <span>Portfolio</span>

      <Swiper spaceBetween={5} slidesPerView={2} grabCursor={true} className='portfolio-slider'>
        <SwiperSlide>
          <img src={sidebar} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecom} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={music} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoc} alt="img" />
        </SwiperSlide>
      </Swiper>


   </div>
  )
}

export default Portfolio