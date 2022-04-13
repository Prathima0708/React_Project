import React from 'react'
import { Swiper ,SwiperSlide} from 'swiper/react'
import './Slider.css'
import profile1 from '../images/profile1.jpg'
import profile2 from '../images/profile2.jpg'
import profile3 from '../images/profile3.jpg'
import profile4 from '../images/profile4.jpg'
import profile5 from '../images/profile5.jpg'
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'


const Slider = () => {
    const clients = [
        {
          img: profile1,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profile2,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profile3,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profile4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
            img: profile5,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          }
      ];
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span>Clients always get</span>
            <span>Exceptional work</span>
            <span>from me</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>

        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable:true}}>
            {clients.map((client,index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className='testimonial'>
                        <img src={client.img} alt="img"/>
                        <span>{client.review}</span>
                        </div>
                        
                        </SwiperSlide>

                   
                )
            })}
        </Swiper>

    </div>
  )
}


export default Slider