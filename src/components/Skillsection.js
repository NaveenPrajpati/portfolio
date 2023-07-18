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
    <div className='flex mx-auto w-fit items-center gap-6 my-10'>
    <h2 className='text-2xl font-semibold'>Tech Stack |</h2>
    {/* <ul className='flex flex-wrap gap-5'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul> */}

    <Swiper
        spaceBetween={5}
        centeredSlides={true}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          waitForTransition:false
        }}
      
       
        modules={[Autoplay,  Navigation]}
        className="w-full sm:w-[600px]"
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