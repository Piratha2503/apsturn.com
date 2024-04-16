"use client"
import React, { useState } from 'react'
import Logo from './assets/A.svg'
import Image from "next/image";
import '../Styles/Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faFile, faFileAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
function TopNavBar() {
let [Clicked,setClicked] = useState(false)

const ClickEvent = ()=>{
  setClicked(!Clicked)
}
    const list =[
        {name:"HOME",link:"/"},
        {name:"ABOUT",link:"/about"},
        {name:"CONTACT",link:"/contact"},
        {name:"SERVICES",link:"/services"},
        {name:"PROJECTS",link:"/projects"},
       ]

  return (
    <div className=' TopNavMain '>
    <div className=' TopNavSub '>
    <div className=' TopNavLogo '>
    <Image src={Logo} className=' TopNavLogoImage' alt=''/>
    <span className='TopCompanyName'>
    <h1 className='TopNavCompanyAP'>APSTURN</h1>
    <h5 className='TopNavCompanyTech '>TECHNOLOGIES</h5>
    </span>
    </div>
    <div className='md:hidden'>
      <FontAwesomeIcon icon={Clicked ? faClose:faBars} className='TopMenuIcon' onClick={ClickEvent}/>
    </div>
    <ul className={` TopNavUl ${Clicked ? 'top-12' : 'top-[-350px]'} mob:w-full`}>
    {list.map((item,index)=>(
       <li key={index}  className='hover:text-secondaryGreen'> 
       
       <a href={item.link}> {item.name} </a> 
     
        </li>
    ))}
    </ul>
    </div>
    </div>
  )
}

export default TopNavBar
