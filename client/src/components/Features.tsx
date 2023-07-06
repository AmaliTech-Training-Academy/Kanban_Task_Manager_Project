// import React from 'react';
import { Stylecontainer } from "./Features.styles"
import backgroundImg from "../assets/Images/our features design.png"
// import backgroundImgg from "../assets/Images/Group 556.png"
import backgroundImage from "../assets/Images/Ellipse 39.png"
// import backgroundImag from "../assets/Images/Ellipse 42.png"
// import backgroundImagee from "../assets/Images/Ellipse 43.png"
import Icon1 from "../assets/Icons/Group 460.png"
import Icon2 from "../assets/Icons/Group 461.png"
import Icon3 from "../assets/Icons/Group 462.png"
import Icon4 from "../assets/Icons/Group 463.png"
import Icon5 from "../assets/Icons/Group 464.png"
import Icon6 from "../assets/Icons/Group 465.png"

const Features = () => {
  return (
    <Stylecontainer>
        <div className="section">
            <img src={backgroundImg} alt="" className="image"/>
             <img src={backgroundImage} alt="" className="imag"/>
            {/*<img src={backgroundImag} alt="" className="imagg"/>
            <img src={backgroundImagee} alt="" className="imagee"/>  */}
            <div className="features">
                <h2 className="ourFeature">Our Features</h2>
            </div>
            <div className="text">
                <h1>Explore the abilities we have</h1>
            </div>
            <div className="text2">
                <p>Unlock the full potential of your creativity 
                    through a powerful visual collaboration platform, 
                    empowering you to unleash innovative ideas and facilitate 
                    seamless ideation with utmost effectiveness. 
                </p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={Icon1} alt="" />
                    <h1>Customizable dashboard</h1>
                    <p className="p1">Empower users to personalize layout and organization for a customized experience.</p>
                </div>
                <div className="card">
                    <img src={Icon2} alt="" />
                    <h1>Create and manage tasks</h1>
                    <p className="p2">Organization, tracking and collaboration</p>
                </div>
                <div className="card">
                    <img src={Icon3} alt="" />
                    <h1>Collaborate on tasks</h1>
                    <p className="p2">Work together, assign tasks and share task lists.</p>
                </div>
                <div className="card">
                    <img src={Icon4} alt="" />
                    <h1>Integration with other apps</h1>
                    <p className="p3">Streamlined workflow and data transfer with other apps</p>
                </div>
                <div className="card">
                    <img src={Icon5} alt="" />
                    <h1>Drag-and-drop</h1>
                    <p className="p2">Rearrangement of tasks, projects, and todo-lists</p>
                </div>
                <div className="card">
                    <img src={Icon6} alt="" />
                    <h1>Track progress</h1>
                    <p className="p2">Monitor the  status and completion of tasks, set milestone, and track time.</p>
                </div>
            </div>
        </div>
    </Stylecontainer>
  )
}

export default Features