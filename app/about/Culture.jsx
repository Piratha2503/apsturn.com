import React from 'react';
import LearnImg from "../imgs/company/learn.svg";
import Image from 'next/image';
const Culture = () => {
    return (
        <div className='flex justify-center'>
        
            <div className=' md:w-10/12 flex'>
            <div className='w-2/3 p-5 flex flex-col gap-3'>
                <div>
                <h6 className='text-FrontPageHeadSizeMobile text-lightGray'>Our Culture</h6>
                <h1 className='text-FrontPageHeadSize font-semibold text-primaryGreen'>Mistakes to Milestones</h1>
                </div>
                <h3 className='text-FrontPageSubHeadSize font-medium text-primaryGray'>Embracing Growth Through Learning</h3>
            <p className='text-sm text-lightGray text-justify'>
            In our company, we firmly believe that mistakes are not mere setbacks; rather, 
            they serve as invaluable stepping stones towards progress and innovation. 
            We actively cultivate a culture where every misstep, no matter how small, 
            is viewed as an opportunity for learning, growth, and improvement. 
            By embracing this forward-thinking mindset, we transform challenges into meaningful milestones, 
            propelling our collective journey forward with unwavering resilience, wisdom, and a relentless pursuit of excellence.

            </p>
            </div> 
            <div className='w-1/3'>
            <Image src={LearnImg} alt='' className=''/>
            </div>
            </div>    
        </div>
    );
};

export default Culture;