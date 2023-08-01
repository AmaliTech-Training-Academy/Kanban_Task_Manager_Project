import * as React from "react";
import Card from "../card/Card";
import {Droppable} from "react-beautiful-dnd"

import  { useCallback } from "react";

const Columns = ({ column, tasks,openEditTaskForm,openDeleteModal,openCardDetails }:any):any => {
  

  const updateActiveTaskOnTaskBoard = useCallback(
    (taskId:number, task: any): void => {openEditTaskForm(taskId, task)},
    []
  );
  const openDeleteModalOnTaskBoard = useCallback(
    (task: any): void => {openDeleteModal(task)},
    []
  );
  const openCardDetailsOnTaskBoard = useCallback(
    (task: any): void => {openCardDetails(task)},
    []
  );
  // const showDeleteModal= React.useState (
  //   (taskId:number): void => {console.log("card called column") ;openDeleteModal(taskId)},
 
  // );

  // const updateActiveTaskOnTask = (taskId:number) => {
  //   console.log("Calling Taskboard");
    
  //   openEditTaskForm(taskId)
  // } 
  return (
    <div className="task-board-contianer">
    <div className="task-board-container-head">
      <div className="task-board-todo-container-head-title">
        <span
          className="circle bg-color-blue mr-12"
          style={{ backgroundColor: `${column?.color ?? "#fff"}` }}
        ></span>
        <h4 className="heading-4">
          {column?.name} ({column?.tasks?.length})
        </h4>
      </div>
    </div>

    <Droppable droppableId={`${column?.id}`}>
      {(provided: { innerRef: React.LegacyRef<HTMLDivElement> | undefined; droppableProps: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>; }, snapshot: any) => (
        <div
          className="task-board-column"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          { column?.tasks?.length > 0 && column.tasks.map((task:any, index:any):any => (
            // <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
            // {(draggableProvided, draggableSnapshot) => (

            <Card
            task={task}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              assignees={task.assignee}
              progress={task.progress}
              key={task.id}
              id={task.id}
              index={index}
              status={column.name}
              openEditTaskForm= {updateActiveTaskOnTaskBoard}
              openDeleteModal={openDeleteModalOnTaskBoard}
              openCardDetails={openCardDetailsOnTaskBoard}
              // ref={draggableProvided.innerRef}
              // {...draggableProvided.droppableProps}
              // {...draggableProvided.dragHandleProps}
            />
            // )}
            // </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  </div>
);

}

export default Columns


// export default function Column({ column, tasks }) {
//   return (
//     <div className="task-board-contianer">
//       <div className="task-board-container-head">
//         <div className="task-board-todo-container-head-title">
//           <span
//             className="circle bg-color-blue mr-12"
//             style={{ backgroundColor: `${column.color}` }}
//           ></span>
//           <h4 className="heading-4">
//             {column.name} ({tasks.length})
//           </h4>
//         </div>
//       </div>

//       <Droppable droppableId={`${column.id}`}>
//         {(provided, snapshot) => (
//           <div
//             className="task-board-column"
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//           >
//             {tasks.map((task, index) => (
//               // <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
//               // {(draggableProvided, draggableSnapshot) => (

//               <Card
//                 title={task.title}
//                 description={task.description}
//                 dueDate={task.dueDate}
//                 assignees={task.assignee}
//                 progress={task.progress}
//                 key={task.id}
//                 id={task.id}
//                 index={index}
//                 // ref={draggableProvided.innerRef}
//                 // {...draggableProvided.droppableProps}
//                 // {...draggableProvided.dragHandleProps}
//               />
//               // )}
//               // </Draggable>
//             ))}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// }
