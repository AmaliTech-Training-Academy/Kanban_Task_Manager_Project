// import React from 'react'
import { Stylecontainer } from './Testimonials.styles'
import cardImage from "../assets/Images/Frame 476.png"
import cardImage1 from "../assets/Images/Frame 479.png"
import cardImage2 from "../assets/Images/Frame 481.png"
import cardImage3 from "../assets/Images/Frame 477.png"
import cardImage4 from "../assets/Images/Frame 480.png"
import cardImage5 from "../assets/Images/Frame 478.png"
import facebookLogo from "../assets/Images/facebook logo.png"


const Testimonials = () => {
  return (
    <Stylecontainer>
        <div className='section'>
        <div className="testimonial">
            <h2 className="ourtestimonial">Our Testimonials</h2>
        </div>
        <div className="text">
                <h1>3000+ happy users</h1>
            </div>
            <div className="text2">
                <p>We’re proud to have these people in this amazing world
                </p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='content'>
                        <img src={cardImage} alt="" className='photoImg'/>
                        <div className='text3'>
                            <h5>Wade Warren</h5>
                            <p>@jeromebell</p>
                        </div>
                            <img src={facebookLogo} alt="" className='Logo'/>
                    </div>
                    <p>Integrations make managing tasks and schedule easy.</p>
                </div>
                <div className='card'>
                    <div className='content'>
                        <img src={cardImage1} alt="" className='photoImg'/>
                        <div className='text3'>
                            <h5>Jerome Bell</h5>
                            <p>@jeromebell</p>
                        </div>
                            <img src={facebookLogo} alt="" className='Logo'/>
                    </div>
                    <p>Integrations make managing tasks and schedule easy.</p>
                </div>
                <div className='card'>
                    <div className='content'>
                        <img src={cardImage2} alt="" className='photoImg'/>
                        <div className='text3'>
                            <h5>Cody Fisher</h5>
                            <p>@jeromebell</p>
                        </div>
                            <img src={facebookLogo} alt="" className='Logo'/>
                    </div>
                    <p>Integrations make managing tasks and schedule easy.</p>
                </div>
                <div className='card'>
                    <div className='content'>
                        <img src={cardImage3} alt="" className='photoImg'/>
                        <div className='text3'>
                            <h5>Leslie Alexander</h5>
                            <p>@jeromebell</p>
                        </div>
                            <img src={facebookLogo} alt="" className='Logo'/>
                    </div>
                    <p>Integrations make managing tasks and schedule easy.</p>
                </div>
                <div className='card'>
                    <div className='content'>
                        <img src={cardImage4} alt="" className='photoImg'/>
                        <div className='text3'>
                            <h5>Guy Hawkins</h5>
                            <p>@jeromebell</p>
                        </div>
                            <img src={facebookLogo} alt="" className='Logo'/>
                    </div>
                    <p>Integrations make managing tasks and schedule easy.</p>
                </div>
                <div className='card'>
                    <div className='content'>
                        <img src={cardImage5} alt="" className='photoImg'/>
                        <div className='text3'>
                            <h5>Floyd Miles</h5>
                            <p>@jeromebell</p>
                        </div>
                            <img src={facebookLogo} alt="" className='Logo'/>
                    </div>
                    <p>Integrations make managing tasks and schedule easy.</p>
                </div>
            </div>
        </div>
    </Stylecontainer>
  )
}

export default Testimonials;