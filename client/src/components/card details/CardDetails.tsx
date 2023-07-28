import React from 'react'
import {Stylecontainer} from "./CardDetails.styles"
import closeImage from "../../assets/Icons/Group 18.svg"
import brightnessImage from "../../assets/Icons/jam_brightness.svg"
import dateIcon from "../../assets/Icons/Vector.svg"
import maleImg from "../../../public/users/dustin-washington.jpg"

const CardDetails = ({closeCardDetails,assignees}) => {
  return (
        <Stylecontainer>
    <div className='container'>
        <div className="details-modal">
            <div className="headerClose">
            <h4 className="header">
            Build ui for onboarding flow
            </h4>
        
            <div className="close-modal">
               {/* <img src={editImage} alt="" className='editImg' /> */}
            <img src={closeImage} alt="" onClick={closeCardDetails}/>
            </div>
          </div>

          <div className="status-box">
           <label>Status</label>
           <div className="status">
            <img src={brightnessImage} alt="" />
            <label>Doing</label>
           </div>
          </div>
          <div className="date">
          <label>Due</label>
          <div className="icon-date">
            <img src={dateIcon} alt="" />
            <label>12 Dec,2023</label>
          </div>
          </div>
          <div className="date">
          <label>Assignees</label>
          <div className="image">
            <img src={maleImg} alt="" />
            <img src={maleImg} alt="" />
            <img src={maleImg} alt="" />
            <img src={maleImg} alt="" />
          </div>
          </div>
          <div className="title">
          <label>Title</label>
          <div className="title-description">
           <p>
           The task is short and simple - just create a clean and visually appealing search page with an easy-to-find and use search bar, 
           </p>
          </div>
          </div>
          <div className="title">
          <label>Description</label>
          <div className="title-description">
           <p>
           The task is short and simple - just create a clean and visually appealing search page with an easy-to-find and use search bar, 
           </p>
          </div>
          </div>
          </div>
    </div>
        </Stylecontainer>
  )
}

export default CardDetails