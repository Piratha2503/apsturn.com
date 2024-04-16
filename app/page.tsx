import Image from "next/image";
import TopNavBar from './homepage/TopNavBar'
import FooterMenu from './homepage/FooterMenu'
import Slides from './homepage/Slides'
import Test from './homepage/Test'
import MainImageSlide from "./homepage/MainImageSlide"
import ParalaxValues from "./homepage/ParalaxValues"
import WhoWeAre from "./homepage/WhoWeAre"
import ItSolutionsHeading from "./homepage/ItSolutionsHeading"
import Blank from "./homepage/Blank"
import UserFeedback from "./homepage/UserSatisfaction"
import Card from "./homepage/Card"
import Technology from "./homepage/Technology"
import WhyUs from "./homepage/WhyUs"
import './Styles/Homepage.css'
export default function Home() {
  return (
    <div className="flex flex-col">
    <TopNavBar/>
    <Test/>
    <MainImageSlide/>
    <Blank/>
    <WhoWeAre/>
    <Test/>
    <ItSolutionsHeading/>
    <Test/>
    <Slides/>
    <Test/>
    <WhyUs/>
    <Test/>
    <ParalaxValues/>
    <div className="h-10"></div>
    <UserFeedback/>
    <div className="h-10"></div>
    <FooterMenu/>
    </div>
  );
}
