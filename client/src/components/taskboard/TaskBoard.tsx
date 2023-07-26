import { useCallback, useState, useEffect } from "react";
import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../column/Columns";
import Card from "../card/Card";
import AddTask from "../add task/AddTask";
import { Stylecontainer } from "./TaskBoard.styles";
import cardUsersImage from "../../public/users/leo.jpg";
import axios from "axios";
import DeleteTask from "../delete task/DeleteTask";

const TaskBoard = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [activeTask, setActiveTask] = useState({});
  const [cardHeading, setCardHeading] = useState("Add New Task");
  const [cardButton, setCardButton] = useState("Create Task");

  const [todo, setTodo] = useState({});
  const [doing, setDoing] = useState({});
  const [done, setDone] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const onDragEnd = (result: any): any => {
    const { destination, source }: any = result;
  };

  const fetchTask = async () => {
    const tasks = await axios.get("./data.json");

    if (tasks.status === 200) {
      const saveTasks = tasks.data?.columns ?? [];

      if (saveTasks.length > 0) {
        setTodo((prev) =>
          Object.assign(
            prev,
            saveTasks.find((task) => task.name === "todo")
          )
        );
        setDoing((prev) =>
          Object.assign(
            prev,
            saveTasks.find((task) => task.name === "doing")
          )
        );
        setDone((prev) =>
          Object.assign(
            prev,
            saveTasks.find((task) => task.name === "done")
          )
        );
      }
    }
    console.log("SET TODO", todo);
    setIsDataLoaded(true);
  };

  useEffect(() => fetchTask, []);

  const closeShowAddTaskForm = useCallback((): void => {
    setActiveTask({});
    setCardHeading("Add New Task");
    setCardButton("Create Task");
    setShowAddTaskForm(false);
  }, [showAddTaskForm]);
  const closeDeleteModal = useCallback((): void => {
    setActiveTask({});
    setShowDeleteModal(false);
  }, [showDeleteModal]);

  const openEditTaskForm = useCallback(
    (taskId: number, status: string): void => {
      console.log("Columm called taskboard");
      updateActiveTask(taskId, status);
    },
    [showAddTaskForm, activeTask]
  );
  const openDeleteModal = useCallback(
    (task): void => 
      {setActiveTask((prev) => Object.assign(prev, task)); setShowDeleteModal(true)},
    [showDeleteModal, activeTask]
  );

  const updateActiveTask = (taskId: number, task) => {
    setCardHeading("Edit Task");
    setCardButton("Update Task");
    setActiveTask((prev) => Object.assign(prev, task));
    setShowAddTaskForm(true);
  };

  return (
    <Stylecontainer>
      <>
        {!isDataLoaded ? (
          <div>Loading...</div>
        ) : (
          <>
            <button
              onClick={() => {
                setShowAddTaskForm(true);
              }}
            >
              +Add New Task
            </button>
            {showAddTaskForm && (
              <AddTask
                closeShowAddTaskForm={closeShowAddTaskForm}
                name={cardHeading}
                submit={cardButton}
                activeTask={activeTask}
              />
            )}
            {showDeleteModal && (
              <DeleteTask closeDeleteModal={closeDeleteModal}              
              />
            )}
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="task">
                {(showAddTaskForm || showDeleteModal) && <div className="overlay"></div>}
                <div className="task-board">
                  <Column
                    tasks={[todo.tasks]}
                    column={todo}
                    openEditTaskForm={openEditTaskForm}
                    openDeleteModal={openDeleteModal}

                  />
                  <Column
                    tasks={[doing.tasks]}
                    column={doing}
                    openEditTaskForm={openEditTaskForm}
                    openDeleteModal={openDeleteModal}
                  />
                  <Column
                    tasks={[done.tasks]}
                    column={done}
                    openEditTaskForm={openEditTaskForm}
                    openDeleteModal={openDeleteModal}

                  />
                </div>
              </div>
            </DragDropContext>
          </>
        )}
      </>
    </Stylecontainer>
  );
};

export default TaskBoard;
