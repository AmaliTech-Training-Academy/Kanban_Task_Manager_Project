// import React from 'react'
import girlImage from "../assets/Images/Group 538.png";
import playArrow from "../assets/Icons/Play arrow.svg";
import companyNames from "../assets/Images/Vector.png";
import { Stylecontainer } from "./styles";
import * as React from "react";

const Home = () => {
  return (
    <Stylecontainer>
      <div className="container">
        <img src={girlImage} alt="a lady holding a laptop" className="image" />
        <div className="content">
          <h1>Efficiently manage your projects with ease</h1>
          <h2>
            Efficiently manage your projects with ease, streamline collaboration
            among team members, and stay on top of deadlines and deliverables to
            drive productivity and achieve successful project outcomes.{" "}
          </h2>
          <div className="get-started">
            <button>
              <a href="">Get Started</a>
            </button>
            <div className="videoIcon">
              <a href="/" className="forIcon">
                <img
                  src={playArrow}
                  alt="video play arrow"
                  className="play-arrow"
                />
              </a>
              <a href="/" className="watchdemo">
                Watch demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="trusted-companies">
        <div className="allCompanies">
          <h1>Trusted by 3,000+ Companies Worldwide:</h1>
          <div className="img">
            <img src={companyNames} alt="company names" />
          </div>
        </div>
      </div>
    </Stylecontainer>
  );
};

export default Home;
