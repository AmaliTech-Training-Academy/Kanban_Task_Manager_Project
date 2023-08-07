// import React from 'react'
import { Stylecontainer } from "./About.styles";
import backgroundImage from "../../assets/Images/Group 558.png";
import contentIcon from "../../assets/Images/about us icon 1.png";
import contentIconn from "../../assets/Images/about us icon 2.png";
import contentImage from "../../assets/Images/Rectangle 25.png";
import contentImg from "../../assets/Images/Group 543.png";
import * as React from "react";

const About = () => {
  return (
    <Stylecontainer>
      <div className="section">
        <img src={backgroundImage} alt="" className="image" />
        <div className="about">
          <h2 className="aboutUs">About Us</h2>
        </div>
        <div className="text">
          <h1>Why you’ll love us? </h1>
        </div>
        <div className="text2">
          <p>You gonna know how to using it </p>
        </div>
        <div className="content">
          <div className="content-sec">
            <img src={contentIconn} alt="" />
            <h1>Plan better for easier projects</h1>
            <p>
              Enhance your project planning process with advanced tools and
              comprehensive features that enable seamless coordination,
              efficient resource allocation, and streamlined workflows.
            </p>
            <button type="button">
              <a href="">Get Started</a>
            </button>
          </div>
          <div className="content-img">
            <img src={contentImage} alt="" />
          </div>
        </div>
        <div className="content">
          <div className="content-img">
            <img src={contentImg} alt="" />
          </div>
          <div className="content-sec">
            <img src={contentIcon} alt="" />
            <h1>Stay organized and in control</h1>
            <p>
              Stay organized and in complete control with our intuitive project
              management tools that streamline task management, facilitate
              efficient collaboration, and provide real-time insights.
            </p>
            <button type="button">
              <a href="">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </Stylecontainer>
  );
};

export default About;
