import React from "react";
import { FeatureTypeScript } from "../types/Feature";

const Feature = ({ icon, header, description }: FeatureTypeScript) => {
  return (
    <div className="card">
      <img src={icon} alt="" />
      <h1>{header}</h1>
      <p className="p1">{description}</p>
    </div>
  );
};

export default Feature;
