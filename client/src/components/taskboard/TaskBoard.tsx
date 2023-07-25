import { useCallback, useState, useEffect } from "react";
import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import data from "../../data/data.json";
import Column from "../column/Columns";
import Card from "../card/Card";
import AddTask from "../add task/AddTask";
import { Stylecontainer } from "./TaskBoard.styles";
import cardUsersImage from "../../public/users/leo.jpg";
import Todo from "../../../Todo.json";
import Doing from "../../../Doing.json";
import Done from "../../../Done.json";









const TaskBoard = () => {
  const [showDeleteTask,setShowDeleteTask] = useState(false)
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [activeTask,setActiveTask] = useState({})
  const [cardHeading,setCardHeading] = useState('Add New Task')
  const [cardButton,setCardButton] = useState('Create Task')
  const [dataState, setDataState] = useState(data);

  const onDragEnd = (result:any):any => {
    const { destination, source}:any = result;
  };


  // console.log(Todo);
  // const openShowAddTaskForm = () =>{
  //   setShowAddTaskForm(true)
  // }

  // const card

  // const cardTitle = "Build UI for onboarding flow"
  // const cardParagraph = "Design and develop a user interface for an onboarding flow that guides users through setting up an account or exploring new features"
  // const cardDate = "12 Dec, 2023"

const openDeleteModal =() =>{
  setShowDeleteTask(true)
}

  const closeShowAddTaskForm = useCallback(
    (): void => {
      setActiveTask({}); 
      setCardHeading("Add New Task")
      setCardButton("Create Task")
      setShowAddTaskForm(false)
      
    },
    [showAddTaskForm]
  );


  const openEditTaskForm = useCallback(
    (taskId:number): void => {console.log("Columm called taskboard"); updateActiveTask(taskId)},
    [showAddTaskForm,activeTask]
  );

  const all:any = data.columns.map((column) =>
{
  return column

})
console.log(all)

const mytasks = all.map((task:any) =>{
console.log(task)
})
  const updateActiveTask = (taskId:number) =>{ 
    setCardHeading("Edit Task")
    console.log(taskId)
    setCardButton("Update Task")
    const activeTodo = all.find(task => +task.id === taskId)
    console.log("activeTodo " + activeTodo)
    setActiveTask((prev) => (Object.assign(prev, activeTodo)))
    setShowAddTaskForm(true)
    console.log("After setting");
    
    // console.log(activeTask)
  };

  return (
    <Stylecontainer>
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
            <DragDropContext onDragEnd={onDragEnd}>
        <div className="task">
          {showAddTaskForm && <div className="overlay"></div>}
          <div className="task-board">
          {dataState.columns.map((column) => {

            {/* <div className="task-board-contianer">
              <div className="task-board-contianer-head">
                <div className="task-board-todo-contianer-head-title heading-4">
                  <span className="circle bg-color-blue mr-12"></span>
                  <h4 className="heading-4">todo ({Todo.length})</h4>
                </div>
              </div>


              <div className="task-board-container">
                {Todo.map((card) => { */}
                  return (
                    <Column
                    
                    openEditTaskForm={openEditTaskForm}
                    openDeleteModal ={openDeleteModal}
                     key={column.id} 
                     column={column} 
                     tasks={column.tasks} />

                    // <Card
                    // openEditTaskForm={openEditTaskForm}
                    // openDeleteModal ={openDeleteModal}
                    //   card={card}
                    //   key={card.id}
                    // />
                  );
                })}
              </div>
            </div>
            </DragDropContext>


            {/* <div className="task-board-contianer">
              <div className="task-board-contianer-head">
                <div className="task-board-todo-contianer-head-title">
                  <span className="circle bg-color-violet mr-12"></span>
                  <h4 className="heading-4">doing ({Doing.length})</h4>
                </div>
              </div>
              <div className="task-board-container">
                {Doing.map((docard) => {
                  return (
                    <Card                    
                    openEditTaskForm={openEditTaskForm}
                    openDeleteModal ={openDeleteModal}
                    card={docard}
                    key={docard.id}

                    />
                  );
                })}
              </div>
            </div>
            <div className="task-board-contianer">
              <div className="task-board-contianer-head">
                <div className="task-board-todo-contianer-head-title">
                  <span className="circle bg-color-green mr-12"></span>
                  <h4 className="heading-4">done ({Done.length})</h4>
                </div>
              </div>
              <div className="task-board-container">
                {Done.map((doneCard) => {
                  return (
                    <Card                    
                     openEditTaskForm={openEditTaskForm}
                     openDeleteModal ={openDeleteModal}

                      card={doneCard}
                      key={doneCard.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </> */}
      </>
    </Stylecontainer>
  );
};

export default TaskBoard;
