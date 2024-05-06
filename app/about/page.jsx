import { faHandsBound } from '@fortawesome/free-solid-svg-icons/faHandsBound'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Culture from "./Culture"
import TopNavBar from "../homepage/TopNavBar"
import FooterMenu from "../homepage/FooterMenu"
import Example from "../Example"
import '../Styles/Homepage.css'
import '../Styles/About.css'
function page() {
  return (
    <div>
    <TopNavBar/>
    <Culture/>
    <FooterMenu />
    </div>
  )
}

export default page
