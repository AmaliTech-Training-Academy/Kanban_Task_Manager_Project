// import { Stylecontainer } from "./Card.styles";
// import { useState } from "react";
// import Progress from "./Progress";
// import calenderIcon from "../../public/icon/more-horiz.svg";
// import dateIcon from "../../public/icon/due-date-icon.svg";

// const Card = ({ card, openEditTaskForm ,openDeleteModal}) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <Stylecontainer>
//       <div className="card">
//         <div className="card-content">
//           <div className="card-body">
//             <div className="card-title-container">
//               <h3 className="card-title heading">{card.title}</h3>
//               <button
//                 className="card-option icon-box-2"
//                 onClick={() => setIsOpen((c) => !c)}
//               >
//                 <img
//                   src={calenderIcon}
//                   className="icon-due-date"
//                   alt="Calendar icon"
//                 />
//               </button>
//             </div>
//             <p className="card-paragraph paragraph">{card.paragraph}</p>
//           </div>
//           <div className="card-assign-due-date">
//             <div className="card-assignees">
//               <div className="card-image-box">
//                 <img
//                   src={card.users}
//                   alt="name of user"
//                   className="card-photo"
//                 />
//               </div>
//               <div className="card-image-box">
//                 <img
//                   src={card.users}
//                   alt="name of user"
//                   className="card-photo"
//                 />
//               </div>
//               <div className="card-image-box">
//                 <img
//                   src={card.users}
//                   alt="name of user"
//                   className="card-photo"
//                 />
//               </div>
//               <div className="card-image-box text-grey heading-3-light">+6</div>
//             </div>
//             <div className="card-due-date-container">
//               <div className="icon-box-24">
//                 <img
//                   src={dateIcon}
//                   className="icon-due-date"
//                   alt="Calendar icon"
//                 />
//               </div>
//               <h3 className="heading-3 color-purlpe card-due-date">
//                 {card.date}
//               </h3>
//             </div>
//           </div>
//           <Progress />
//         </div>
//         <div className={`card-action ${isOpen ? "" : "hidden"}`}>
//           <span
//             className="card-action-option text-grey"
//             onClick={() => openEditTaskForm(card.id)}
//           >
//             Edit task
//           </span>
//           <span className="card-action-option text-red" onClick={() =>
//           openDeleteModal(card.id)}>Delete task</span>
//         </div>
//       </div>
//     </Stylecontainer>
//   );
// };

// export default Card;
// import "./App.css";
import * as React from "react";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Progress from "../progress/Progress";
import AssigneePhoto from "../assignees/AssigneePhoto";

// NOTE: Get Date
export const formatDate = (dateString: any): any => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  return [day, month, year].join(" ");
};

const Card = ({
  title,
  task,
  description,
  dueDate,
  assignees,
  progress,
  id,
  index,
  openEditTaskForm,
  openDeleteModal,
  openCardDetails,
  status,
}: any): any => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided: any, snapshot: any): any => {
        return (
          <div className="card">
            <div className="card-title-container">
              <h3
                className="card-title heading"
                onClick={() => {
                  openCardDetails(task);
                }}
              >
                {title}
              </h3>
              <button
                className="card-option icon-box-2"
                onClick={() => setIsOpen((c) => !c)}
              >
                <img
                  src="icon/more-horiz.svg"
                  className="icon-due-date"
                  alt="Calendar icon"
                />
              </button>
            </div>
            <div
              className="card-content"
              onClick={() => {
                openCardDetails(task);
              }}
            >
              <div className="card-body">
                <p className="card-paragraph paragraph">{description}</p>
              </div>
              <div className="card-assign-due-date">
                <div className="card-assignees">
                  {assignees?.map((assignee: any, i: any): any => {
                    if (i < 3) {
                      return (
                        <AssigneePhoto
                          key={assignee.id}
                          photo={assignee.photo}
                          fullName={assignee.fulName}
                        />
                      );
                    }
                  })}

                  <div className="card-image-box text-grey heading-3-light">
                    {`+ ${assignees?.slice(3).length}`}
                  </div>
                </div>
                <div className="card-due-date-container">
                  <div className="icon-box-24">
                    <img
                      src="icon/due-date-icon.svg"
                      className="icon-due-date"
                      alt="Calendar icon"
                    />
                  </div>
                  <h3 className="heading-3 color-purlpe card-due-date">
                    {formatDate(dueDate)}
                  </h3>
                </div>
              </div>
              <Progress percentage={progress} />
            </div>
            <div className={`card-action ${isOpen ? "" : "hidden"}`}>
              <span
                className="card-action-option text-grey"
                onClick={() => {
                  openEditTaskForm(id, task);
                }}
              >
                Edit task
              </span>
              <span
                className="card-action-option text-red"
                onClick={() => {
                  openDeleteModal(task);
                }}
              >
                Delete task
              </span>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;

// export default function Card({
//   title,
//   description,
//   dueDate,
//   assignees,
//   progress,
//   id,
//   index,
// }) {
// const [progressBar, setProgressBar] = useState(percentage);

// console.log(assignees);

// const [isOpen, setIsOpen] = useState(false);
// // console.log("💥💥💥", key);

// return (
//   <Draggable key={id} draggableId={`${id}`} index={index}>
//     {(provided, snapshot) => {
//       return (
//         <div
//           className="card"
// ref={provided.innerRef}
// {...provided.droppableProps}
// {...provided.dragHandleProps}
//           >
//             <div className="card-content">
//               <div className="card-body">
//                 <div className="card-title-container">
//                   <h3 className="card-title heading">{title}</h3>
//                   <button
//                     className="card-option icon-box-2"
//                     onClick={() => setIsOpen((c) => !c)}
//                   >
//                     <img
//                       src="icon/more-horiz.svg"
//                       className="icon-due-date"
//                       alt="Calendar icon"
//                     />
//                   </button>
//                 </div>
//                 <p className="card-paragraph paragraph">{description}</p>
//               </div>
//               <div className="card-assign-due-date">
//                 <div className="card-assignees">
//                   {assignees.map((assignee, i) => {
//                     if (i < 3) {
//                       return (
//                         <AssigneePhoto
//                           key={assignee.id}
//                           photo={assignee.photo}
//                           fullName={assignee.fulName}
//                         />
//                       );
//                     }
//                   })}

//                   <div className="card-image-box text-grey heading-3-light">
//                     {`+ ${assignees.slice(3).length}`}
//                   </div>
//                 </div>
//                 <div className="card-due-date-container">
//                   <div className="icon-box-24">
//                     <img
//                       src="icon/due-date-icon.svg"
//                       className="icon-due-date"
//                       alt="Calendar icon"
//                     />
//                   </div>
//                   <h3 className="heading-3 color-purlpe card-due-date">
//                     {formatDate(dueDate)}
//                   </h3>
//                 </div>
//               </div>
//               <Progress percentage={progress} />
//             </div>
//             <div className={`card-action ${isOpen ? "" : "hidden"}`}>
//               <span className="card-action-option text-grey">Edit task</span>
//               <span className="card-action-option text-red">Delete task</span>
//             </div>
//           </div>
//         );
//       }}
//     </Draggable>
//   );
// }
