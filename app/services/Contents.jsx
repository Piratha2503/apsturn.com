"use client"
import { ServerIcon } from '@heroicons/react/16/solid';
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { BiGlobe, BiMobile } from 'react-icons/bi';
import { FaLaptopCode } from "react-icons/fa";
import { TbCloudDataConnection } from "react-icons/tb";
import { LuServerCrash } from "react-icons/lu";
import serviceImg from "../imgs/Serv.png";
import { Divider } from 'antd';

const features = [
  {
  id:1,
  name: 'Fullstack Development',
  description:
  'We stay current with the latest trends and utilize cutting-edge technology to ensure your solutions are always.',
  icon: FaLaptopCode,
  },
  {
    id:2,
  name: 'Web Development',
  description:
  'Our apps, software, and websites are designed to solve your problems efficiently and effectively.',
  icon: BiGlobe,
  },
  {
    id:3,
  name: 'Mobile app development',
  description:
  'Experience lightning-fast solutions without compromising on accuracy, ensuring optimal performance.',
  icon: BiMobile,
  },
  {
    id:4,
  name: 'Support & Maintenance',
  description:
  'We strive for excellence in everything we do, constantly pushing boundaries to deliver the best possible outcomes.',
  icon: LuServerCrash,
  },
  
  ];

export default function Contents() {
  return (
    <div className='.contentMain'>
    <div className='contentSub '>
     <div className='contentImage'>
      <Image src={serviceImg} alt='' className='opacity-70'/>
     </div>
     <div className='contentTitle '>
      <h3 className=''>Entering into our</h3>
      <h1 className=''>DIGITAL DOMAIN</h1>
     </div>
    </div>
    <div className='h-4'></div>
   <div className='serviceTitleMain '>
   <div className='serviceTitleSub'>
    {features.map(feature=>(
      <div key={feature.id} className='serviceTitleContentMain'>
      <div className='serviceTitleContentHead'>
        <div className='p-1 text-primaryGreen pl-4'>
        <feature.icon className='h-6 w-6'/>
        </div>
        <h1 className='ser'>{feature.name}</h1>
      </div>
      <div className='titleContentDescription'>
      <p className='text-justify'>{feature.description}</p>
      </div>
      <div className='titleContentViewMore'><a href='#'><p>View more ...</p></a></div>
      </div>
    ))}  
    </div>
   </div>
    </div>
  )
}
