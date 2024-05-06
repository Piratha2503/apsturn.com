import React from 'react';
import Image from 'next/image';
import CustomerCare from '../imgs/CustomerCare.svg'; 
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const UserFeedback = () => {
  return (

    <div className='userFeedback' >
    <div className='userFeedbackSub ' >
    <div className='user '> 
    <h1 className=''> Connect with Us </h1>
    <h3> Priority: Your Satisfaction Our Focus </h3>
    </div>
    <div className='feedbackImageAndInputs'>
    
    <div className='feedbackImage '> 
    <Image src={CustomerCare} alt=''/>
    </div>
    <div className='feedbackInputs '>
    <div className='feedbackInputSub'>
    <div className='flex w-full justify-between gap-2'>
    <Input placeholder='Name' className='md:h-11 md:w-[44vh] mob:w-[27vh] rounded-none font-medium hover:border-primaryGreen'/>
    <Input placeholder='Mobile' className='md:h-11 md:w-[44vh] mob:w-[27vh] rounded-none font-medium hover:border-primaryGreen' />
    </div>
    <Input placeholder='Email' className='md:h-11 rounded-none md:w-[94vh] font-medium hover:border-primaryGreen' />
    <TextArea placeholder='Comments' className='md:h-[50vh] mob:h-[30vh] md:w-[94vh] rounded-none font-medium
    hover:border-primaryGreen' style={{
        height: "25vh",
        resize: 'none',
        
      }}/> 
    <button type='default' className='w-3/12 h-12 
    rounded-none text-lg font-medium bg-gray-300 text-primaryGreen
    hover:text-secondaryGreen hover:bg-secondaryGray' style={{}}> Submit </button>
    </div>
    
    </div>
    </div>
   
    </div>
    
    </div>
  );
}

export default UserFeedback;
