
import styled from "styled-components";

export const Stylecontainer = styled.div`

    .task {
  min-height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.task-board {
  margin: 3.5rem 0;
  width: 107.4rem;

  display: flex;
  justify-content: space-between;
}
.overlay{
  /* background-color: blue; */
  width: 100%;
  /* height: inherit; */
  flex: 2;
  bottom: 0;
  top: 0;
  position: absolute;
  z-index: 1;
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(3px);
  
}
.task-board-contianer {
  width: 29.9rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-board-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.task-board-todo-contianer-head-title {
  margin-right: 1.2rem;
  margin-bottom: 1.6rem;

  display: flex;
}

    .heading {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.89;
}
.heading-3 {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.51rem;
}
.heading-3-light {
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2.3rem;
}

.heading-4 {
  text-transform: uppercase;
  font-weight: 700;
  color: #828fa3;
  size: 1.2rem;
  line-height: 1.51rem;
  letter-spacing: 0.24rem;
}

.paragraph {
  font-size: 1.3rem;
  font-weight: 500;
  color: #828fa3;
  line-height: 2rem;
  word-spacing: 0.1rem;
}

.color-purlpe {
  color: #635fc7;
}
.label {
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.51;
}

.text-grey {
  color: #828fa3;
}
.text-red {
  color: #d64e4e;
}
/* =================================== */

/* NOTE:  UTILITES*/

.mr-12 {
  margin-right: 1.2rem;
}

.hidden {
  display: none !important;
}

.bg-color-blue {
  background-color: #49c4e5;
}

.bg-color-violet {
  background-color: #8471f2;
}

.bg-color-green {
  background-color: #67e2ae;
}
.circle {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50rem;
}

/* =================================== */

.App {
  min-height: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background-color: #f4f7fd;
}

.card {
  padding: 1.6rem;
  width: 29.2rem;
  max-height: 100%;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.6rem 0.2rem #d3d8e3;
  background-color: #fff;
  transition: 0.2s;

  position: relative;
}
.card:hover {
  transform: scale(1.01);
}

.card-content {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 1.6rem;
}

.card-title-container {
  margin-bottom: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* NOTE: CARD ASSIGNEES */

.card-assignees {
  display: flex;
  gap: -2rem;
}
.card-image-box:not(:first-child) {
  margin-left: -2rem;
}
.card-image-box {
  height: 4rem;
  width: 4rem;
}

.card-image-box:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 50rem;
  border: #fff 0.2rem solid;
}

.card-photo {
  width: 100%;
  height: 100%;
  border: transparent 0.2rem solid;
  border-radius: 50rem;
  background-color: #fff !important;
}

.card-assign-due-date {
  width: 100%;
  display: flex;
  align-items: center;
  /* gap: auto; */
  justify-content: space-between;
}

.card-due-date-container {
  border-radius: 0.8rem;
  padding: 0.8rem;
  background-color: #fcfcff;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-due-date {
  margin-left: 0.8rem;
}

.card-progress-container {
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;
}

.card-progress-percentage {
  display: flex;
  justify-content: space-between;
}

/* .card-progress-bar-container {
} */

.card-progress-bar {
  position: relative;
  border-radius: 50rem;
  height: 0.5rem;
  /* height: 20rem; */
  background-color: #d9d9d9;
}

.card-progress-bar-fill {
  position: absolute;
  width: 60%;
  height: 100%;
  border-radius: 50rem;
  background-color: #8471f2;
}

.icon-box-16 {
  width: 2rem;
  height: 2rem;
}
.icon-box-24 {
  width: 2.4rem;
  height: 2.4rem;
}

.icon-due-date {
  height: 100%;
  display: flex;
  object-fit: contain;
}

.card-option {
  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;
}

.card-action {
  position: absolute;
  padding: 1.6rem 0;
  top: 4rem;
  right: 0;
  height: max-content;
  width: 19.2rem;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 0 2rem 2rem 0 #d3d8e3, 0 2rem 2rem 0 #d3d8e3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;

  /* position: relative; */
}
.card-action-option {
  padding: 0 1.6rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2.3rem;

  cursor: pointer;
}
.card-action-option:hover {
  width: 100%;
  background-color: #d3d8e328;
}

/* NOTE:  TASKBOARD*/

.task {
  min-height: 100%;

  display: flex;
  justify-content: center;
}

.task-board {
  margin: 3.5rem 0;
  width: 107.4rem;

  display: flex;
  justify-content: space-between;
}

.task-board-contianer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-board-column {
  width: 29.9rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.task-board-container-head {
  align-self: start;
}

.task-board-todo-container-head-title {
  margin-right: 1.2rem;
  margin-bottom: 1.6rem;

  display: flex;
}



`
