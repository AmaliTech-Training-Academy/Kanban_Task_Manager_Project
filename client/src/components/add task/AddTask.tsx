import * as React from "react";
import { useState } from "react";
import { Stylecontainer } from "../../components/add task/AddTask.styles";
import closeImage from "../../assets/Icons/Group 18.svg";
import axios from "axios";
import { BASE_URL } from "../../../constants";

interface Task {
  title: string;
  description: string;
  dueDate: string;
  // Add more properties here if necessary
}

interface AddTaskProps {
  closeShowAddTaskForm: () => void;
  name: string;
  submit: string;
  activeTask: Task | null;
  saveOrUpdateTask: (task: Task) => void;
}

const AddTask = ({
  closeShowAddTaskForm,
  name,
  submit,
  activeTask,
  saveOrUpdateTask,
}: AddTaskProps) => {

  const [taskToUpdate, setTaskToUpdate] = useState(activeTask ?? {});
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    //perform validations
    saveOrUpdateTask(taskToUpdate);

    console.log(taskToUpdate);
  };

  //REMOVE WHEN BACKEND IS READY
  // const sa
  return (
    <Stylecontainer>
      <div className="new-task-container" /*onClick={closeShowAddTaskForm}*/>
        <form onSubmit={(event) => handleSubmit(event)}>
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
            name="title"
            value={taskToUpdate ? taskToUpdate.title : ""}
            onChange={(event) =>
              setTaskToUpdate({
                ...taskToUpdate,
                // assignee: { ...taskToUpdate.assignee },
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
            name="textarea"
            id=""
            cols="54"
            rows="10"
            onChange={(event) =>
              setTaskToUpdate({
                ...taskToUpdate,
                // assignee: { ...taskToUpdate.assignee },
                description: event.target.value,
              })
            }
          />
          <label className="title">Assignee </label>
          <input type="text" />
          <label className="title">Due Date </label>
          <input
            value={taskToUpdate ? taskToUpdate.dueDate : ""}
            type="date"
            name="date"
            placeholder="12th December 2023"
            onChange={(event) =>
              setTaskToUpdate({
                ...taskToUpdate,
                // assignee: { ...taskToUpdate.assignee },
                dueDate: event.target.value,
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