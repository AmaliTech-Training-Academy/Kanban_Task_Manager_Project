import { Stylecontainer } from "./Testimonials.styles";
import cardImage from "../../assets/Images/Frame 476.png";
import cardImage1 from "../../assets/Images/Frame 479.png";
import cardImage2 from "../../assets/Images/Frame 481.png";
import cardImage3 from "../../assets/Images/Frame 477.png";
import cardImage4 from "../../assets/Images/Frame 480.png";
import cardImage5 from "../../assets/Images/Frame 478.png";
import Testimonial from "../Testimonial";
import * as React from "react";

const Testimonials = () => {
  const testimony = "Integrations make managing tasks and schedule easy.";
  return (
    <Stylecontainer>
      <div className="section">
        <div className="testimonial">
          <h2 className="ourtestimonial">Our Testimonials</h2>
        </div>
        <div className="text">
          <h1>3000+ happy users</h1>
        </div>
        <div className="text2">
          <p>We’re proud to have these people in this amazing world</p>
        </div>

        <div className="cards">
          <Testimonial
            cardImage={cardImage}
            name="Wade Warren"
            handle="@wadewarren"
            testimony={testimony}
          />
          <Testimonial
            cardImage={cardImage1}
            name="Jerome Bell"
            handle="@jeromebell"
            testimony={testimony}
          />
          <Testimonial
            cardImage={cardImage2}
            name="Cody Fisher"
            handle="@codyfisher"
            testimony={testimony}
          />
          <Testimonial
            cardImage={cardImage3}
            name="Leslie Alexander"
            handle="@lesliealexander"
            testimony={testimony}
          />
          <Testimonial
            cardImage={cardImage4}
            name="Guy Hawkins"
            handle="@guyhawkins"
            testimony={testimony}
          />
          <Testimonial
            cardImage={cardImage5}
            name="Floyd Miles"
            handle="@floydmiles"
            testimony={testimony}
          />
        </div>
      </div>
    </Stylecontainer>
  );
};

export default Testimonials;
