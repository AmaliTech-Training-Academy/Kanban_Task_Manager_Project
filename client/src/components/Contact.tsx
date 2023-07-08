// import React from 'react'
import { Stylecontainer } from "./Contact.styles";
import backgroundImage from "../assets/Images/Group 544.png";
import backgroundImag from "../assets/Images/Ellipse 51.png";
import Faq from "./Faq";

const Contact = () => {
  const dummyAnswer =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum facere, " +
    "ab eos natus debitis aspernatur cum asperiores vel possimus fugit accusamus praesentium " +
    "deserunt rerum. Laboriosam possimus doloremque quisquam voluptate.";
  return (
    <Stylecontainer>
      <div className="section">
        <img src={backgroundImage} alt="" className="image" />
        

        <div className="contact">
          <h2 className="contactUs">Contact Us</h2>
        </div>
        <div className="text">
          <h1>Frequently asked questions</h1>
        </div>
        <div className="text2">
          <p>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our team.
          </p>
        </div>
      <div className="asked-questions">
        <Faq
          questions="What are the benefits of using Kanban as a task management app? "
          answers={dummyAnswer}
        />
        <Faq
          questions="What are the benefits of using Kanban as a task management app? "
          answers={dummyAnswer}
        />
        <Faq
          questions="What are the benefits of using Kanban as a task management app? "
          answers={dummyAnswer}
        />
        <Faq
          questions="What are the benefits of using Kanban as a task management app? "
          answers={dummyAnswer}
        />
        <Faq
          questions="What are the benefits of using Kanban as a task management app? "
          answers={dummyAnswer}
        />
        <Faq
          questions="What are the benefits of using Kanban as a task management app? "
          answers={dummyAnswer}
        />
      </div>
      {/* <img src={backgroundImag} alt="" className="image" /> */}
      </div>

    </Stylecontainer>
  );
};

export default Contact;
