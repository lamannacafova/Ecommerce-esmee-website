import React from 'react'
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider from '../../../data/SliderData';
import { NavLink } from 'react-router-dom';
const Slider = () => {
  return (
    <>
        <Swiper
      // install Swiper modules
      modules={[ Pagination,Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay:3000}}
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     
     {
        slider.map((item,index)=>{
            return <SwiperSlide key={index}>
            <section className="slider">
                <div className="image"  style={{backgroundImage:`url(${item.img})`}}>
                   <div className="container">
                     <div className="about">
                      <div className="title">
                      <h6>{item.text}</h6>
                       <h2>{item.title}</h2>
                       <p>{item.desc} <br/><span>{item.continue}</span></p>
                       <button><NavLink to="/newPage">View more</NavLink></button>
                      </div>
                     </div>
                   </div>
                   </div>
            </section>
            </SwiperSlide>
        }) 
     }

    </Swiper>
    </>
  )
}

export default Slider
