import React from 'react';
import Image from 'next/image';
import ColagePhoto from "../imgs/WhyUsPhotoColageImg3.png";
import { Divider } from 'antd';
const WhyUs = () => {
  return (
    <div className=' WhyUsMain'>
    <div className='WhyUsImg'>
    <Image src={ColagePhoto} className='h-full w-full' alt=''/>
</div>
      <div className='WhyUsBgDiv '>
      <div className='WhyUsDesc'>
      <h1>WHY US</h1>
        <div className='flex flex-col'>
        <div className='mob:pr-5 mob:pl-5'>
        <h3>We are Passionate Innovators</h3>
        <p>Passionate innovators crafting solutions for 
        tomorrow digital challenges.</p>
        </div>
<Divider/>
<div className='mob:pr-5 mob:pl-5'>
        <h3>We are Driven by User Satisfaction</h3>
        <p>User satisfaction drives every decision, 
        ensuring unparalleled client experiences.</p>
        </div>
<Divider/>
       <div>
       <h3>We are Trend-Tech Enthusiasts</h3>
        <p>Utilizing cutting-edge technologies to deliver modern solutions for every need.</p>
       
       </div> 

       </div>
      </div>
      </div>
      
    </div>
  );
}

export default WhyUs;

/* 
 

*/