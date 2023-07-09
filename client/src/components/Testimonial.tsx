import React from "react";
import facebookLogo from "../assets/Images/facebook logo.png";
import { TestimonialTypeScript } from "../types/Testimonial";

const Testimonial = ({
  name,
  cardImage,
  handle,
  testimony,
}: TestimonialTypeScript) => {
  return (
    <div className="card">
      <div className="content">
        <img src={cardImage} alt="userImage" className="photoImg" />
        <div className="text3">
          <h5>{name}</h5>
          <p>{handle}</p>
        </div>
        <img src={facebookLogo} alt="Facebook Logo" className="Logo" />
      </div>
      <p className="testimony">{testimony}</p>
    </div>
  );
};

export default Testimonial;
