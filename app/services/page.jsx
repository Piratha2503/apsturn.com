import React from 'react';
import TopNavBar from "../homepage/TopNavBar"
import FooterMenu from "../homepage/FooterMenu"
import FullStackDevelopment from "./FullstackDevelopment"
import ServiceTitles from "./ServiceTitles"
import '../Styles/Services.css'
import Contents from './Contents';
const page = () => {
    return (
        <div>
            <TopNavBar/>
            <div className='h-[6vh]'></div>
            <Contents/>
            <div className='h-10'></div>
            <FullStackDevelopment/>
            <ServiceTitles/>
            <FooterMenu/> 
        </div>
    );
};

export default page;