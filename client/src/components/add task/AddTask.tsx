import  * as React from 'react'
import { useState } from "react";
import { Stylecontainer } from "../../components/add task/AddTask.styles";
import closeImage from "../../assets/Icons/Group 18.svg";

const AddTask = ({ closeShowAddTaskForm, name, submit, activeTask}:any):any => {
  const [taskToUpdate, setTaskToUpdate] = useState(activeTask);

  // const handleInputChange = (event)  => {
  //   setTaskToUpdate({
  //     ...ta
  //   })
  // }

  // console.log("inside card", activeTask);
  return (
    <Stylecontainer>
      <div className="new-task-container" /*onClick={closeShowAddTaskForm}*/>
        <form>
          <div className="headerClose">
            <div className="header">
              <h3>{name}</h3>
            </div>
            <div className="close-modal">
              <img src={closeImage} alt="" onClick={closeShowAddTaskForm} />
            </div>
          </div>

          <label className="title">Title </label>
          <input
            type="text"
            placeholder="e.g. Take coffee break"
            value={taskToUpdate ? taskToUpdate.title : ""}
            onChange={(event) =>
              setTaskToUpdate({
                ...taskToUpdate,
                assignee: { ...taskToUpdate.assignee },
                title: event.target.value,
              })
            }
          />
          <label className="title">Description </label>
          {/* <input
            type="text"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
            recharge the batteries a little."
          /> */}
          <textarea
          value={taskToUpdate ? taskToUpdate.description : ""}
            name=""
            id=""
            cols="54"
            rows="10"
            onChange={(event) =>
              setTaskToUpdate({
                ...taskToUpdate,
                assignee: { ...taskToUpdate.assignee },
                paragraph: event.target.value,
              })
            }
          />
          <label className="title">Assignee </label>
          <input type="text" />
          <label className="title">Due Date </label>
          <input
          value={taskToUpdate ? taskToUpdate.dueDate : ""}
            type="text"
            placeholder="12th December 2023"
            onChange={(event) =>
              setTaskToUpdate({
                ...taskToUpdate,
                assignee: { ...taskToUpdate.assignee },
                date: event.target.value,
              })
            }
          />
          <input type="submit" value={submit} className="submitt" />
        </form>
      </div>
    </Stylecontainer>
  );
};

export default AddTask;
