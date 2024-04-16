import React from 'react'
import Logo from './assets/A.svg'
import Image from "next/image";
import { faEnvelope, faLocationArrow, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
function FooterMenu() {
    const Contacts = [
        {
            icon:<FontAwesomeIcon icon={faMobile} className='h-5 w-5'/>,
            detail:'+94-77-8741623 ',
        },
        {
            icon:<FontAwesomeIcon icon={faEnvelope} className='h-5 w-5'/>,
            detail:'Apsturn@Apsturn.com',
        },
        {
            icon:<FontAwesomeIcon icon={faLocationArrow} className='h-5 w-5'/>,
            detail:'No - num, Road name, city, Norther province',
        }
    ]
    const FooterDetails =[
        {name:"Heading1",
        details:{
            options:["option1","option2","option3"]
        }},
        {name:"Heading2",
        details:{
            options:["option1","option2","option3"]
        }},
        {name:"Heading3",
        details:{
            options:["option1","option2","option3"]
        }},
        {name:"Heading4",
        details:{
            options:["option1","option2","option3"]
        }},
    ]
  return (
    <div className='bg-gray-200 flex flex-col items-center space-y-5 pt-3 text-primaryGreen'>
     <div className='w-7/12 space-x-7 flex justify-center items-center mob:w-10/12 '>
     <Image src={Logo} className='h-[20vh] w-[20vh] mb-3 mob:h-[10vh] mob:w-[10vh] tab:h-[15vh] tab:w-[15vh] ' alt=''/>
     <h1 className='text-[5vh] tab:text-2xl font-semibold text-secondaryGreen mob:text-xl' >BRIDGING FUTURE CHANGES</h1>
     </div>
     <div className='w-6/12 border-2 border-gray-400 mob:w-10/12'></div> 
     <div className='w-6/12 flex justify-between mob:justify-center mob:w-10/12 space-x-12'>
     {Contacts.map((item,index)=>(
        <div key={index} className='flex flex-col space-y-2 text-center 
         items-center text-sm mob:text-xs max-w-[35vh]'> 
        <span key={index} className='text-gray-600'> {item.icon}  </span>
        <span>{item.detail}</span>
        </div>
     ))}
     </div> 
     <div className='w-10/12 flex justify-center space-x-4 mob:space-x-0 
     mob:justify-around mob:w-full mob:flex-wrap gap-y-5 pt-5'>
     {FooterDetails.map(
        (head,index)=>(
            <div key={index} className=' w-2/12 text-center space-y-3 mob:w-6/12'> 
            <h1 className=' font-semibold text-sm'>{head.name}</h1>
            <div className='space-y-1'>
            {head.details.options.map((option,id)=>(
                 <p key={id} className='text-xs'> {option} </p> ))}
                 </div>
            </div>
        )
     )}   
     </div> 
     <div className='border-t-2 border-green-500 w-6/12 flex md:justify-end mob:justify-center'>
     <div className=' md:w-5/12 flex flex-col space-y-3 justify-center text-center pt-2'>
<h3 className='font-semibold mob:text-xs tab:text-sm'> Connect with us </h3>
<div className=' h-7 flex justify-around items-center mob:space-x-5'> 
<BsTwitterX />
<BsFacebook />
<BsInstagram/>
<BiLogoLinkedin />
</div>
     </div>
     </div> 
     <div className='bg-gray-300 h-7 w-full flex justify-center text-center items-center'>
     <h1 className='md:text-sm mob:text-xs text-primaryGreen text-medium'> 
     © copyrights reserved for Apsturn Technologies (pvt) ltd @ 2024 </h1>
     </div>
    </div>
  )
}

export default FooterMenu
