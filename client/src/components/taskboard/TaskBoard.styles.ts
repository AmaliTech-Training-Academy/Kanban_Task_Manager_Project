
import styled from "styled-components";

export const Stylecontainer = styled.div`

  .task {
  /* min-height: 100%; */
  display: flex;
  justify-content: center;
  /* position: relative; */
  /* background-color: salmon; */
  width: 81%;
   position: relative;
  left: 19%;
  margin-left: -10px;
;


}

.task-board {
  margin: 35px 0;
  /* width: 1074px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
  width: 299px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #67e2ae; */
}

.task-board-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.task-board-todo-contianer-head-title {
  margin-right: 12px;
  margin-bottom: 16px;
  display: flex;
}

    .heading {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.89;
}
.heading-3 {
  font-size: 12px;
  font-weight: 700;
  line-height: 15.1px;
}
.heading-3-light {
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
}

.heading-4 {
  text-transform: uppercase;
  font-weight: 700;
  color: #828fa3;
  size: 12px;
  line-height: 15.1px;
  letter-spacing: 2.4px;
}

.paragraph {
  font-size: 13px;
  font-weight: 500;
  color: #828fa3;
  line-height: 20px;
  word-spacing: 1px;
}

.color-purlpe {
  color: #635fc7;
}
.label {
  font-weight: 700;
  font-size: 12px;
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
  margin-right: 12px;
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
  width: 15px;
  height: 15px;
  border-radius: 500px;
  
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
  padding: 16px;
  width: 292px;
  max-height: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 6px 2px #d3d8e3;
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
  gap: 16px;
}

.card-title-container {
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* NOTE: CARD ASSIGNEES */

.card-assignees {
  display: flex;
  gap: -20px;
}
.card-image-box:not(:first-child) {
  margin-left: -20px;
}
.card-image-box {
  height: 40px;
  width: 40px;
}

.card-image-box:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 500px;
  border: #fff 2px solid;
}

.card-photo {
  width: 100%;
  height: 100%;
  border: transparent 2px solid;
  border-radius: 500px;
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
  border-radius: 8px;
  padding: 8px;
  background-color: #fcfcff;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-due-date {
  margin-left: 8px;
}

.card-progress-container {
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;
}

.card-progress-percentage {
  display: flex;
  justify-content: space-between;
}

/* .card-progress-bar-container {
} */

.card-progress-bar {
  position: relative;
  border-radius: 500px;
  height: 5px;
  /* height: 20rem; */
  background-color: #d9d9d9;
}

.card-progress-bar-fill {
  position: absolute;
  width: 60%;
  height: 100%;
  border-radius: 500px;
  background-color: #8471f2;
}

.icon-box-16 {
  width: 20px;
  height: 20px;
}
.icon-box-24 {
  width: 24px;
  height: 24px;
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
  padding: 16px 0;
  top: 40px;
  right: 0;
  height: max-content;
  width: 192px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 20 20 0 #d3d8e3, 0 20 20 0 #d3d8e3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  /* position: relative; */
}
.card-action-option {
  padding: 0 16px;
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;

  cursor: pointer;
}
.card-action-option:hover {
  width: 100%;
  background-color: #d3d8e328;
}

/* NOTE:  TASKBOARD*/

.task-board-column {
  /* width: 299px; */
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  /* background-color: yellow; */
}

.task-board-container-head {
  align-self: start;
}

.task-board-todo-container-head-title {
  margin-right: 12px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

}


`
