"use client"
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../imgs/img.jpeg'
import Image from 'next/image';
import photo1 from "../imgs/guideMobileapppng.png";
import photo2 from "../imgs/dev3png.png";
import photo3 from "../imgs/devWeb1jpg.jpg";
import photo4 from "../imgs/dev1jpeg.jpeg";
import photo5 from "../imgs/Mobile App Development .png";
register();

const Slides = () => {
  const swiperElRef = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  useEffect(() => {
   
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
   <div className='h-[35vh] p-3 z-0'>
     <swiper-container pagination="true" pagination-clickable="true" autoplay-delay='3000'
      ref={swiperElRef} slides-per-view= '5'
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
    
      <swiper-slide>
      <div className=' text-neutral-800 md:h-[30vh] mob:h-[15vh]'>
        <Image src={photo1} className='md:h-[25vh] w-full p-2 mob:h-[15vh]' alt=''/>
      </div>
      </swiper-slide>
      <swiper-slide><div className=' text-neutral-800 md:h-[30vh] mob:h-[15vh]'>
      <Image src={photo2} className='h-[25vh] w-full p-2 mob:h-[15vh]' alt=''/>
      </div></swiper-slide>
      <swiper-slide>
      <div className=' text-neutral-800 h-[30vh] mob:h-[15vh]'>
      <Image src={photo3} className='h-[25vh] w-full p-2 mob:h-[15vh]' alt=''/>
      </div>
      </swiper-slide>
      <swiper-slide>
      <div className=' text-neutral-800 h-[30vh] mob:h-[15vh]'>
      <Image src={photo4} className='h-[25vh] w-full p-2  mob:h-[15vh]' alt=''/>
      </div>
      </swiper-slide>
      <swiper-slide>
      <div className='  text-neutral-800 h-[30vh] mob:h-[15vh]'>
      <Image src={photo5} className='mob:h-[15vh] h-[25vh] w-full p-2' alt=''/>
      </div>
      </swiper-slide>
      <swiper-slide>

      <div className='text-3xl text-neutral-800 h-[30vh] mob:h-[15vh]'>
      <Image src={photo1} className='mob:h-[15vh] h-[25vh] w-full p-2' alt=''/>
      </div>
      </swiper-slide>
      <swiper-slide>
      <div className=' text-neutral-800 h-[30vh mob:h-[15vh]]'>
      <Image src={photo2} className='h-[25vh] w-full p-2 mob:h-[15vh]' alt=''/>
      </div>
      </swiper-slide>
      <swiper-slide><div className=' text-neutral-800 h-[30vh] mob:h-[15vh]'>
      <Image src={photo3} className='h-[25vh] w-full p-2 mob:h-[15vh]' alt=''/>
      </div>
      </swiper-slide>
      <swiper-slide><div className=' text-neutral-800 h-[30vh] mob:h-[15vh]'>
      <Image src={photo4} className='h-[25vh] w-full p-2 mob:h-[15vh]' alt=''/>
      </div>
      </swiper-slide>
      ...
    </swiper-container>
   </div>
  );
};

export default Slides