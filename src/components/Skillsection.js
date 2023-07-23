import React from 'react'
import reactImg from '../assests/reactjs.png'
import htmlImg from '../assests/html-5.png'
import cssImg from '../assests/css.png'
import jsImg from '../assests/js.png'
import tailImg from '../assests/tail.png'
import mongoImg from '../assests/mongodb.png'
import nodeImg from '../assests/nodejs.png'
import reduxImg from '../assests/redux.png'
import tsImg from '../assests/ts.png'
import nextImg from '../assests/nextImg.png'
import expImg from '../assests/expressImg.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Skillsection() {
  return (
    <div className='flex justify-center items-center gap-6 my-10  p-1'>
    <h2 className='sm:text-3xl font-semibold whitespace-nowrap '>Tech Stack |</h2>

    <Swiper
    breakpoints={{
      320: {
      slidesPerView: 2,
      spaceBetween: 3
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 8
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 10
    }
    }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
      
       
        modules={[Autoplay,  Navigation]}
        className=" mx-auto"
      >
        <SwiperSlide><img src={htmlImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={cssImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tailImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={jsImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tsImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={reactImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={nextImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={reduxImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={nodeImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={expImg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={mongoImg} alt="" /></SwiperSlide>
      </Swiper>
</div>

  )
}

export default Skillsection