import * as React from "react";
import { Stylecontainer } from "./CardDetails.styles";
import closeImage from "../../assets/Icons/Group 18.svg";
import brightnessImage from "../../assets/Icons/jam_brightness.svg";
import dateIcon from "../../assets/Icons/Vector.svg";
import maleImg from "../../../public/users/dustin-washington.jpg";
import Progress from "../progress/Progress";
import AssigneePhoto from "../assignees/AssigneePhoto";

interface Task {
  title: string;
  description: string;
  dueDate: string;
  assignees: string; // Assuming 'assignees' is a URL string
  progress: number;
}

interface CardDetailsProps {
  closeCardDetails: () => void;
  activeTask: Task;
  percentage: number; // Not sure how this is used
  assignees: Assignee[]; // Assuming 'assignees' is an array of assignees
}

interface Assignee {
  id: number;
  photo: string;
  fullName: string;
}

const CardDetails = ({ closeCardDetails, activeTask,percentage,assignees}:CardDetailsProps) => {
  return (
    <Stylecontainer>
      <div className="container">
        <div className="details-modal">
          <div className="headerClose">
            <h3 className="header">{activeTask.title}</h3>

            <div className="close-modal">
              {/* <img src={editImage} alt="" className='editImg' /> */}
              <img src={closeImage} alt="" onClick={closeCardDetails} />
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
              <label>{activeTask.dueDate}</label>
            </div>
          </div>
          <div className="date">
            <label>Assignees</label>
            <div className="image">
              <img src={activeTask.assignees} alt="" />
              {/* <img src={maleImg} alt="" />
              <img src={maleImg} alt="" />
              <img src={maleImg} alt="" /> */}
              <AssigneePhoto 
              key={activeTask.assignee.id}
              photo={activeTask.assignee.photo}
              fullName={activeTask.assignee.fulName}
             />
              <AssigneePhoto 
              key={activeTask.assignee.id}
              photo={activeTask.assignee.photo}
              fullName={activeTask.assignee.fulName}
             />
              <AssigneePhoto 
              key={activeTask.assignee.id}
              photo={activeTask.assignee.photo}
              fullName={activeTask.assignee.fulName}
             />
              <AssigneePhoto 
              key={activeTask.assignee.id}
              photo={activeTask.assignee.photo}
              fullName={activeTask.assignee.fulName}
             />
            
              {/* {...activeTask.assignees}  */}
            </div>
          </div>
          <div className="title">
            <label>Title</label>
            <div className="title-description">
              <p>
                {activeTask.title}
                {/* The task is short and simple - just create a clean and visually appealing search page with an easy-to-find and use search bar,  */}
              </p>
            </div>
          </div>
          <div className="title">
            <label>Description</label>
            <div className="title-description">
              <p>{activeTask.description} <a href="">Read me</a> </p>
            </div>
          </div>
          <Progress percentage={activeTask.progress}/>
          {/* <div className="progress">{activeTask.progress}</div> */}
        </div>
      </div>
    </Stylecontainer>
  );
};

export default CardDetails;
