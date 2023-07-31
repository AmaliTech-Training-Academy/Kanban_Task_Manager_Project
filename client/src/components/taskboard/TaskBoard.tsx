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
import CardDetails from "../card details/CardDetails";
import { BASE_URL } from "../../../constants";

const TaskBoard = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [activeTask, setActiveTask] = useState({});
  const [cardHeading, setCardHeading] = useState("Add New Task");
  const [cardButton, setCardButton] = useState("Create Task");
  const [allTasks, setAllTasks] = useState({})

  const [todo, setTodo] = useState({});
  const [doing, setDoing] = useState({});
  const [done, setDone] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const onDragEnd = (result: any): any => {
    const { destination, source }: any = result;
  };

  const fetchTask = async () => {
    const tasks = await axios.get("./data.json");
    // const tasks = await axios.get(BASE_URL + "/api/task/all");


    if (tasks.status === 200) {
      setAllTasks(prev =>Object.assign(prev, tasks.data))
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

  // const fetchLocalStorageData = () =>

  useEffect(() => fetchTask, []);

  const saveOrUpdateTask = useCallback((task) => {

    // const tasks = await axios.get( BASE_URL+"/api/task");

    // if (tasks.status === 200) {

        //todo: display toast, close form

    // }

    //REMOVE WHEN BACKEND IS READY
    console.log("usecallback called");
    

    const id = Math.random() * 5000;
    // console.log(lastId)
    task.id =  id;
    
  }, [allTasks])

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

  const closeCardDetails = useCallback((): void => {
    setActiveTask({});
    setShowCardDetails(false);
  }, [showCardDetails]);

  const openEditTaskForm = useCallback(
    (taskId: number, status: string): void => {
      console.log("Columm called taskboard");
      updateActiveTask(taskId, status);
    },
    [showAddTaskForm, activeTask]
  );
  const openDeleteModal = useCallback(
    (task): void => {
      setActiveTask((prev) => Object.assign(prev, task));
      setShowDeleteModal(true);
    },
    [showDeleteModal, activeTask]
  );
  const openCardDetails = useCallback(
    (task): void => {
      setActiveTask((prev) => Object.assign(prev, task));
      setShowCardDetails(true);
    },
    [showCardDetails, activeTask]
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
                saveOrUpdateTask={saveOrUpdateTask}
                name={cardHeading}
                submit={cardButton}
                activeTask={activeTask}
              />
            )}
            {showDeleteModal && (
              <DeleteTask closeDeleteModal={closeDeleteModal} />
            )}
            {showCardDetails && (
              <CardDetails closeCardDetails={closeCardDetails} 
              activeTask={activeTask}

              />
            )}
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="task">
                {(showAddTaskForm || showDeleteModal) && (
                  <div className="overlay"></div>
                )}
                <div className="task-board">
                  <Column
                    tasks={[todo.tasks]}
                    column={todo}
                    openEditTaskForm={openEditTaskForm}
                    openDeleteModal={openDeleteModal}
                    openCardDetails={openCardDetails}
                  />
                  <Column
                    tasks={[doing.tasks]}
                    column={doing}
                    openEditTaskForm={openEditTaskForm}
                    openDeleteModal={openDeleteModal}
                    openCardDetails={openCardDetails}
                  />
                  <Column
                    tasks={[done.tasks]}
                    column={done}
                    openEditTaskForm={openEditTaskForm}
                    openDeleteModal={openDeleteModal}
                    openCardDetails={openCardDetails}
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