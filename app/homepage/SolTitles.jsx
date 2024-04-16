import React from 'react';
import { MdOutlineDeveloperMode, MdWeb, MdWebAsset } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { TbCloudDataConnection } from "react-icons/tb";
import { LuServerCrash } from "react-icons/lu";
import { BiGlobe, BiMobile } from 'react-icons/bi';

const SolTitles = () => {
  return (
    <div className='mob:flex mob:w-full mob:justify-center mob:items-center mob:gap-1'>
      <div className='solTitle1'>
        <FaLaptopCode className='solTitleIcon'/>
        <h1> Fullstack Development </h1>
        <button className='solTitleExplore'> Explore </button>        
      </div>
      <div className='solTitle2'>
      <BiGlobe className='solTitleIcon'/>
        <h1> Website Development </h1>
        <button className='solTitleExplore'> Explore </button>
      </div>
      <div className='solTitle3'>
      <BiMobile className='solTitleIcon'/>
        <h1> Mobile App Development </h1>
        <button className='solTitleExplore'> Explore </button>
      </div>
      <div className='solTitle4' style={{border:'none'}}>
      <LuServerCrash className='solTitleIcon'/>
        <h1> Supporting & Maintenance </h1>
        <button className='solTitleExplore'> Explore </button>
      </div>
    </div>
  );
}

export default SolTitles;
