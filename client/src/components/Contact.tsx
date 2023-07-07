// import React from 'react'
import {Stylecontainer} from "./Contact.styles"
import backgroundImage from "../assets/Images/Group 544.png"
import dropdown from "../assets/Icons/Chevron.svg"

const Contact = () => {
  return (
    <Stylecontainer>
        <div className='section'>
            <img src={backgroundImage} alt="" className='image'/>
      </div>
        <div className="contact">
            <h2 className="contactUs">Contact Us</h2>
        </div>
            <div className="text">
                <h1>Frequently asked questions</h1>
            </div>
            <div className="text2">
                <p>Everything you need to know about the product 
                    and billing. Can’t find the answer you’re looking for? 
                    Please chat to our team. 
                </p>
            </div>
            <div className="asked-questions">
                <div className="questions">
                <p>What are the benefits of using Kanban as a task management app?</p>
                <img src={dropdown} alt="" />
                </div>
                <div className="questions">
                <p>What are the benefits of using Kanban as a task management app?</p>
                <img src={dropdown} alt="" />
                </div>
                <div className="questions">
                <p>What are the benefits of using Kanban as a task management app?</p>
                <img src={dropdown} alt="" />
                </div>
                <div className="questions">
                <p>What are the benefits of using Kanban as a task management app?</p>
                <img src={dropdown} alt="" />
                </div>
                <div className="questions">
                <p>What are the benefits of using Kanban as a task management app?</p>
                <img src={dropdown} alt="" />
                </div>
                <div className="questions">
                <p>What are the benefits of using Kanban as a task management app?</p>
                <img src={dropdown} alt="" />
                </div>
                
     
            </div>

    </Stylecontainer>
  )
}

export default Contact
