import Image from 'next/image';
import React from 'react';
import fullStackDevImg from "../imgs/fullStackDev.svg";
import { SiCodesignal } from "react-icons/si";
import { FaRegFileCode } from "react-icons/fa";
import { BsDatabaseCheck } from "react-icons/bs";


    const fullstackDevelopmentTitles =[
        {
            id:1,
            title:"Front-End Development",
            desc:  `Crafting visually appealing and intuitive user interfaces that seamlessly integrate with your brand identity, 
            enhancing the overall user experience.`,
            icon:SiCodesignal,
            
        },
        {
            id:2,
            title:"Back-End Development",
            desc:  `Building scalable, secure systems to power applications with efficient logic and data processing capabilities, 
                    ensuring reliability and performance`,
            icon: FaRegFileCode,
        },
        {
            id:3,
            title:"Database Management",
            desc:  `Organizing, securing, and optimizing data storage solutions tailored to 
                    your application's unique requirements for seamless data retrieval and management`,
            icon:BsDatabaseCheck,
        },
    ]

const FullstackDevelopment = () => {
    return (
        <div className='relative flex justify-center'>
        <div className=' md:w-10/12 mob:w-full flex flex-col gap-y-10'>
            <div className=' text-center'>
            <h1 className='md:text-FrontPageHeadSize mob:text-FrontPageHeadSizeMobile font-semibold text-primaryGray'> Full Stack Development </h1>
            <h3 className='text-FrontPageSubHeadSize font-medium text-lightGray'> crafting every layer of your Web Application </h3>
            </div>
            <div className='flex mob:flex-col'>
            
            <div className='md:w-1/2 md:sticky md:top-32 md:h-[72vh] flex flex-col gap-3'>
            {fullstackDevelopmentTitles.map(title => (
                <div key={title.id} className='border-2 w-full flex py-4
                 bg-secondaryGray'>
                  <div className='text-primaryGreen font-semibold flex 
                  justify-center items-center md:w-1/5'>
                  <title.icon className='md:h-14 md:w-16 mob:h-7 mob:w-7'/>
                  </div>
                  <div className='md:w-4/5 flex flex-col items-center justify-center gap-3'>
                    <h1 className='ServicePageSubHeading'>{title.title}</h1>
                    <p className='ServicePageSubHeadingDesc'>{title.desc}</p>
                  </div>  
                </div>
            ))}
                
            </div>
            <div className='md:w-1/2 mob:w-2/3 md:h-[200vh] mob:justify-center mob:items-center'>
            <div className='flex md:justify-end'>
                <Image src={fullStackDevImg} alt='' className=''/>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default FullstackDevelopment;