import React from 'react';
import {myTechSVGList} from "../imgs/MyImages";
import Image from 'next/image';
const Technology = () => {
    return (
      <div className='TechnologyMain '>
      <div className='TechnologySub '>
      <div className='TechnologyTexts'>
        <h1>Empowering with Latest Technologies</h1>
        <h3>Innovations Powered by Cutting-Edge Technologies</h3>
        <p>
        At Apsturn, we lead with innovation, powered by cutting-edge technologies. 
        Our team pioneers groundbreaking solutions, leveraging the latest advancements to empower businesses. 
        From mobile applications to web platforms, we push boundaries, 
        embracing innovation to shape a brighter future for our clients in today dynamic landscape.
        </p>
      </div>
      <div className='TechnologySvg'>
      {myTechSVGList.map((svg,index)=>(
      <Image src={svg} key={index} alt='' className='w-2/12'/>
        ))}
        </div>
      </div>
      </div>
    );
};

export default Technology;