// import React from 'react';
import { Stylecontainer } from "./Features.styles";
import backgroundImg from "../assets/Images/our features design.png";
import backgroundImage from "../assets/Images/Ellipse 39.png";
import Icon1 from "../assets/Icons/Group 460.png";
import Icon2 from "../assets/Icons/Group 461.png";
import Icon3 from "../assets/Icons/Group 462.png";
import Icon4 from "../assets/Icons/Group 463.png";
import Icon5 from "../assets/Icons/Group 464.png";
import Icon6 from "../assets/Icons/Group 465.png";
import Feature from "./Feature";

const Features = () => {
  const handleClickScroll = () =>{
    const element = document.querySelector('.section');
    if (element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
  return (
    <Stylecontainer>
      <div className="section">
        <img src={backgroundImg} alt="" className="image" />
        <img src={backgroundImage} alt="" className="imag" />
        <div className="features" onClick={handleClickScroll}>
          <h2 className="ourFeature">Our Features</h2>
        </div>
        <div className="text">
          <h1>Explore the abilities we have</h1>
        </div>
        <div className="text2">
          <p>
            Unlock the full potential of your creativity through a powerful
            visual collaboration platform, empowering you to unleash innovative
            ideas and facilitate seamless ideation with utmost effectiveness.
          </p>
        </div>
        <div className="cards">
          <Feature
            icon={Icon1}
            header="Customizable dashboard"
            description="Empower users to personalize layout and organization for a customized experience."
          />
          <Feature
            icon={Icon2}
            header="Create and manage tasks"
            description="Organization, tracking and collaboration"
          />
          <Feature
            icon={Icon3}
            header="Collaborate on tasks"
            description="Work together, assign tasks and share task lists."
          />
          <Feature
            icon={Icon4}
            header="Integration with other apps"
            description="Streamlined workflow and data transfer with other apps"
          />
          <Feature
            icon={Icon5}
            header="Drag-and-drop"
            description="Rearrangement of tasks, projects, and todo-lists"
          />
          <Feature
            icon={Icon6}
            header="Track progress"
            description="Monitor the  status and completion of tasks, set milestone, and track time."
          />
        </div>
      </div>
    </Stylecontainer>
  );
};

export default Features;
