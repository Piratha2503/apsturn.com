import React from 'react';
import Image from 'next/image';
import userFeedback from '../imgs/userEmoji.png'; 
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const UserFeedback = () => {
  return (

    <div className='userFeedback' >
    <div className='userFeedbackSub' >
    <div className='user'> 
    <h1> Feedback Drives Excellence </h1>
    <h3> We always ready to learn from mistakes </h3>
    </div>
    <div className='feedbackImageAndInputs'>
    
    <div className='feedbackImage'> 
    <Image src={userFeedback} alt=''/>
    </div>
    <div className='feedbackInputs'>
    <div className='feedbackInputSub'>
    <div className='flex w-full justify-between'>
    <Input placeholder='Name' className='h-11 w-[44vh] rounded-none font-medium'/>
    <Input placeholder='Mobile' className='h-11 w-[44vh] rounded-none font-medium' />
    </div>
    <Input placeholder='Email' className='h-11 rounded-none w-[94vh] font-medium' />
    <TextArea placeholder='Comments' className='h-[50vh] w-[94vh] rounded-none font-medium' style={{
        height: "25vh",
        resize: 'none',
      }}/> 
    <Button type='default' className='w-3/12 h-12 rounded-none text-lg font-medium bg-secondaryGray text-primaryGreen' style={{}}> Submit </Button>
    </div>
    
    </div>
    </div>
   
    </div>
    
    </div>
  );
}

export default UserFeedback;
