"use client"
import React from 'react'
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/Homepage.css';
import { register } from 'swiper/element/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import photo1 from "../imgs/1.jpg";
import photo2 from "../imgs/2.jpg";
import photo3 from "../imgs/3.jpg";
import photo4 from "../imgs/4.jpg";


const MainImageSlide = () => {
  return (
    <div className=''>
     <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" 
     navigation="true" space-between="30"
    centered-slides="true" autoplay-delay="3500" autoplay-disable-on-interaction="false">
    <swiper-slide><div className=' md:h-[75vh] mob:h-[45dvh]'>
        <Image src={photo1} alt=''/>
        
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
              <h1 className='text-white text-4xl'>Welcome</h1>
            </div>
    </div></swiper-slide>
    <swiper-slide><div className='md:h-[75vh] mob:h-[45dvh]'>
        <Image src={photo2}
         className=' w-[100%] mob:h-[37dvh]' alt=''/>
    </div></swiper-slide>
    <swiper-slide><div className='md:h-[75vh] mob:h-[45dvh]'>
        <Image src={photo3} className='w-[100%] mob:h-[37dvh]' 
        itemType='' alt=''/>
    </div></swiper-slide>
    <swiper-slide><div className=' md:h-[75vh] mob:h-[45dvh]'>
        <Image src={photo4} className=' w-[100%] mob:h-[37dvh]' alt=''/>
    </div></swiper-slide>   
  </swiper-container>
    </div>
  )
}

export default MainImageSlide
