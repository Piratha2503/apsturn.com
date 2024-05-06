import React from 'react';
import Image from 'next/image';
import TechImg from "../imgs/techImage.png";
import SolTitles from "../homepage/SolTitles";
const ItSolutionsHeading = () => {
  return (
    <div className='ItSolMain'> 
      <div className='ItSolHead' > 
      <div className='ItSolSub' >
      <div className='ItSolHeadBody'>
      <h1>Empowering Digital Innovation</h1>
      <p>
      Apsturn excels in three core areas to drive digital success: 
      Digital Development Services, Infrastructure and Integration Solutions, 
      and Support and Maintenance. With our expertise, we empower businesses 
      to innovate and thrive in the digital landscape.
      </p>
      </div>
      <div className='ItSolTitles'>
       <SolTitles/> 
      </div>
      </div>
      <Image src={TechImg} alt='' className=' z-0 mob:hidden'/>  
      </div>
    </div>
  );
}

export default ItSolutionsHeading;
