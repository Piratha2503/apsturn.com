"use client"
import { ServerIcon } from '@heroicons/react/16/solid';
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { BiGlobe, BiMobile } from 'react-icons/bi';
import { FaLaptopCode } from "react-icons/fa";
import serviceImg from "../imgs/services.png";
import { LuServerCrash } from "react-icons/lu";

import { Divider } from 'antd';
const features = [
    {
    name: 'Fullstack Development',
    description:
    'We stay current with the latest trends and utilize cutting-edge technology to ensure your solutions are always up to date.',
    icon: FaLaptopCode,
    },
    {
    name: 'Web Development',
    description:
    'Our apps, software, and websites are designed to solve your problems efficiently and effectively.',
    icon: BiGlobe,
    },
    {
    name: 'Mobile app development',
    description:
    'Experience lightning-fast solutions without compromising on accuracy, ensuring optimal performance every time.',
    icon: BiMobile,
    },
    {
    name: 'Support & Maintenance',
    description:
    'We strive for excellence in everything we do, constantly pushing boundaries to deliver the best possible outcomes.',
    icon: LuServerCrash,
    },
    
    ];

export default function ServiceTitles() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Deploy faster
          </h2>
          <p className="mt-2 text-FrontPageHeadSize font-bold 
          tracking-tight text-primaryGray sm:text-4xl">
            OUR DIGITAL DOMAIN
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. 
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. 
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-primaryGreen">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-300">
                    <feature.icon className="md:h-6 md:w-6 mob:w-5 text-primaryGreen text-FrontPageSubHeadSize 
                    mob:text-FrontPageHeadSizeMobile font-medium" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 md:text-base mob:text-sm leading-7 text-lightGray">{feature.description}</dd>
                   </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
