// import React from 'react'
import socialIcons from "../assets/Images/Group 482.png"
import {Stylecontainer} from "./Footer.styles"

const Footer = () => {
  return (
    <Stylecontainer>
    <div className='footer'>
        <div className='footerr'>

        <div className='solutions'>
        <h3>Solutions</h3>
            <p><a href="/">Features</a></p>
            <p><a href="/">Integrations</a></p>
            <p><a href="/">Pricing</a></p>
            <p><a href="/">Coworking</a></p>
        
        </div>
        <div className='resources'>
        <h3>Resources</h3>
            <p><a href="/">Blog</a></p>
            <p><a href="/">Help center</a></p>
            <p><a href="/">Contact Us</a></p>
        
        </div>
        <div className='company'>
        <h3>Company</h3>
            <p><a href="/">Story</a></p>
            <p><a href="/">Careers</a></p>
            <p><a href="/">Press</a></p>
        
        </div>
        <div className='enter the fold'>
            <h2>enter the fold</h2>
            <p>A weekly newsletter of work,coworking,resources and updates</p>
            {/* <form action=""> */}
            <input type="text" className='input' placeholder='youremail@gmail.com'/> 
            <a href="/" className='subscribe'>Subscribe</a>
            {/* </form>         */}
        </div>
        </div>
        <img src={socialIcons} alt="" className='social'/>
    </div>
    </Stylecontainer>
  )
}

export default Footer