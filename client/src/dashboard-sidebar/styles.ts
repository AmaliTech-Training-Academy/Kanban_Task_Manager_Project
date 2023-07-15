import styled from "styled-components";

export const StyledDashSideBar = styled.div`
  .container-body {
    width: auto;
    /* height: 100vh; */
    background-color: #e4ebfa;
    overflow-x: hidden;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }

  .SideBar {
    width: 300px;
    height: 1203px;
    background-color: hotpink;
    position: absolute;
  }

  .SideBarLogo {
    width: 152px;
    height: 25px;
    margin-left: 32px;
    margin-top: 32px;
  }
  .SideBarContent {
    /* width: 276px; */
    /* height: 288px; */
    /* margin-top: 54px; */
    /* background-color: black; */
    /* margin-left: 32px; */
  }

  .All-Boards {
    color: #828fa3;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4;
    word-wrap: break-word;
    margin-left: 33px;
    margin-top: 8px;
    width: 126px;
    height: 15px;
    background-color: white;
  }

  .Dashboard {
    background-color: cadetblue;
    width: 276px;
    height: 48px;
  }
  .Taskslist {
    background-color: rosybrown;
    width: 276px;
    height: 48px;
  }
  .Teams {
    background-color: navy;
    width: 276px;
    height: 48px;
  }
  .Calendar {
    background-color: orangered;
    width: 276px;
    height: 48px;
  }
  .Messages {
    background-color: tomato;
    width: 276px;
    height: 48px;
  }
  .Settings {
    background-color: yellowgreen;
    width: 276px;
    height: 48px;
  }

  .MenuItems {
    color: #828FA3;
    font-size: 15;
    font-weight: 700;
  }

  .item1 {
    width: 125px;
    height: 19px;
    align-items: center;
    margin-left: 32px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rebeccapurple;
    padding: 15px;
  }
  .item2 {
    width: 104px;
    height: 19px;
    margin-left: 32px;
    align-items: center;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rebeccapurple;
    padding: 15px;
  }
  .item3 {
    width: 85px;
    height: 19px;
    align-items: center;

    margin-left: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rebeccapurple;
    padding: 15px;
  }
  .item4 {
    width: 105px;
    height: 19px;
    align-items: center;

    margin-left: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rebeccapurple;
    padding: 15px;
  }
  .item5 {
    /* width: 111px;
    height: 19px; */
    align-items: center;

    margin-left: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rebeccapurple;
    padding: 15px;
  }
  .MessageCounter {
    width: 28px;
    height: 27px;
    background-color: #635fc7;
    margin-left: 60px;
    border-radius: 8px;
  }
  .item6 {
    width: 98px;
    height: 24px;
    align-items: center;

    margin-left: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rebeccapurple;
    padding: 15px;
  }
  .logout {
    background-color: white;
    width: 80px;
    height: 19px;
    margin-top: 491px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-left: 32px;
    font-size: 700;
    font-size: 15px;
    color: #828fa3;
  }

  .Theme {
    width: 251px;
    height: 48px;
    margin: auto;
    background-color: chartreuse;
    align-items: center;
  }

  .ThemeContent {
    width: 105px;
    height: 20px;
    background-color: brown;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    margin-top: 48px;
    align-items: center;
    padding: 14px;
  }

  .ThemeToggle-Btn {
    width: 40px;
    height: 20px;
    background-color: lightsalmon;
    align-items: center;
    display: flex;
  }
  .SideBarLogo {
    padding: 14px;
  }

  .HideSideBar {
    width: 276px;
    height: 46px;
    margin-top: 49px;
    background-color: goldenrod;
    display: flex;
    align-items: center;
  }
  .HideSideBarText {
    width: 127px;
    height: 19px;
    margin-left: 31px;
    background-color: bisque;
    display: flex;
    justify-content: space-between;
    color: #828fa3;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const StyledDashSideNav = styled.nav`
  .NavBar {
    width: auto;
    height: 96px;
    /* background-color: black; */
    display: flex;
    flex-direction: row;
    margin-left: 300px;
    align-items: center;
    justify-content: center;
  }

  .navtitle{
    margin-right: 56px;
    font-size: 24px;
    font-weight: 700;
  }
  .SeacrchBtn-AddNewTask {
    width: 571px;
    height: 48px;
    /* background-color: white; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 100px;
    border: 2px solid green;
  }

  .AddNewTask-Btn {
    width: 194px;
    height: 48px;
    background-color: #635fc7;
    border-radius: 100px;
    color: white;
    font-size: 15px;
    font-family: 700;
    border: none;
    &:active {
      cursor: pointer;
      transform: translateY(4px);
    }
    &:hover {
      cursor: pointer;
    }
  }

  .SearchBtn {
    width: 330px;
    height: 48px;
    background-color: #e4ebfa;
    align-items: center;
    display: flex;
    flex-direction: row;
    border-radius: 100px;
    text-indent: 10px;
  }

  .searchIcon {
    margin-left: 20px;
  }
  ::placeholder {
    color: #828fa3;
    font-size: 15px;
    font-weight: 700;
  }

  .SearchBtn input {
    width: 84px;
    height: 24px;
    /* text-indent: 10px; */
    border: none;
    align-items: center;
    background-color: #e4ebfa;
    width: 80%;
  }
  input[type="text"]:focus {
    outline-color: #e4ebfa;
;
  }

  .notification {
    width: 118px;
    height: 60px;
    margin-left: 71px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border: 2px solid yellow;
  }
  .noti {
    width: 42px;
    height: 42px;
  }
  .profile {
    width: 60px;
    height: 60px;
  }
`;





