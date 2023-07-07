// import React from 'react'
import girlImage from "../assets/Images/Group 538.png";
import playArrow from "../assets/Icons/Play arrow.svg";
import trustees from "../assets/Images/Group 539.png";
import { Stylecontainer } from "./styles";

const Home = () => {
  return (
    <Stylecontainer>
      <div className="container">
        <img src={girlImage} alt="" className="image" />
        <div className="content">
          <h1>Efficiently manage your projects with ease</h1>
          <h2>
            Efficiently manage your projects with ease, streamline collaboration
            among team members, and stay on top of deadlines and deliverables to
            drive productivity and achieve successful project outcomes.{" "}
          </h2>
          <div className="get-started">
            <button><a href="">Get Started</a></button>
            <div className="videoIcon">
              <a href="/" className="forIcon">
                <img src={playArrow} alt="" className="play-arrow" />
              </a>
              <a href="/" className="watchdemo">
                Watch demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={trustees} className="trustedCom" alt="Trusted companies" />
      </div>
    </Stylecontainer>
  );
};

export default Home;
