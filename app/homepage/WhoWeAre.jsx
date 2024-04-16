import React from 'react';
import Image from 'next/image';
import '../Styles/Homepage.css'
import backImg from "../imgs/patern.jpg";
import ColagePhoto from "../imgs/ColagePhotoWithBack.png";
const WhoWeAre = () => {
  return (
    <div className='TecSolMain'>
      <div className='TechSolImgDesc'>

        <Image src={ColagePhoto} alt='' className='TechImg'/>
        <div className='TechSolDesc'>
            <h1>Who We Are</h1>
            <h3>Crafting Your Futuristic IT Solutions</h3>
            <p>
            At Apsturn, we are pioneers in crafting tomorrow's digital experiences. 
            With expertise spanning mobile apps, websites, and maintenance, 
            we're committed to driving your success in the digital age. 
            Our team blends innovation with reliability, 
            delivering tailored solutions that exceed expectations. 
            Powered by integrity and creativity, we forge enduring partnerships, 
            turning your visions into reality. 
            Join us as we lead the way towards digital transformation and unparalleled growth.
            </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;

