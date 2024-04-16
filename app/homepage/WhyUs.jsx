import React from 'react';
import Image from 'next/image';
import ColagePhoto from "../imgs/WhyUsPhotoColageImg3.png";
import { Divider } from 'antd';
const WhyUs = () => {
  return (
    <div className='h-[90vh] pt-10'>
      <div className='h-[65vh] border-2 WhyUsBgDiv pt-7'>
      <Image src={ColagePhoto} alt='' 
      className='WhyUsImg'/>
      <div className=' h-full w-[15vm] ml-[105vh] WhyUsDesc'>
        <h1>WHY US</h1>
        <div className='flex flex-col'>
        <div>
        <h3>We are Passionate Innovators</h3>
        <p>Passionate innovators crafting solutions for tomorrow's digital challenges.</p>
        </div>
<Divider/>
        <div>
        <h3>We are Driven by User Satisfaction</h3>
        <p>User satisfaction drives every decision, ensuring unparalleled client experiences.</p>
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
