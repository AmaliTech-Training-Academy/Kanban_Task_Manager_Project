import * as React from "react";
import { useState } from "react";
import {StyledDashSideBar, StyledNavContainer, LeftContainer,RightContainer, NavbarInnerContainer} from "../dashboard-sidebar/styles";
import Kanbanlogo from "../assets/Icons/logo.png";
// import DashLogo from "../assets/Icons/fluent_board-split-24-regular.svg"
// import TaskLogo from "../assets/Icons/task icon.svg";
// import TeamLogo from "../assets/Icons/team icon.svg";
// import CalendarLogo from "../assets/Icons/calender icon.svg";
// import MessagesLogo from "../assets/Icons/Messages icon.svg";
// import SettingsLogo from "../assets/Icons/Settings.svg";
// import LogoutLogo from "../assets/Icons/logout icon.svg";
// import LightIcon from "../assets/Icons/light mode icon.svg";
// import DarkIcon from "../assets/Icons/dark mode icon.svg";
import searchIcon from "../assets/Icons/searchIcon.svg"
import notiIcon from "../assets/Icons/Notification icon.svg"
import ProfileImg from "../assets/Images/blank image.svg";
// import hidesidebarIcon from "../assets/Icons/Hide side bar icon.svg";











export const DashBoardSideBar = () => {

// function Sidebar () {
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const showSidebar = () => setSidebarVisible(!sidebarVisible);

// }

// const [isOpenSideBar, setIsOpenSideBar ] = useState(true);

// const toggleSideBar = () => {
//   const sideBar = document.querySelector(".SideBar")
//   sideBar.style.width ="0px !important"

//   setIsOpenSideBar((curr) => !curr 
//   )
// }

            
  

  return (
    <>
      {/* {isOpenSideBar && (
        <StyledDashSideBar>
          <div className="SideBar">
            <div className="SideBarContent">
              <p className="All-Boards">All BOARDS</p>

              <div className="menu MenuItems">
                <div className="Dashboard">
                  <div className="item1">
                    <img src={Logo} alt="" />
                    Dashboard
                  </div>
                </div>
                <div className="Taskslist">
                  <div className="item2">
                    <img src={TaskLogo} alt="" />
                    Tasks list
                  </div>
                </div>
                <div className="Teams">
                  <div className="item3">
                    {" "}
                    <img src={TeamLogo} alt="" />
                    Teams
                  </div>
                </div>
                <div className="Calendar">
                  <div className="item4">
                    <img src={CalendarLogo} alt="" />
                    Calender
                  </div>
                </div>
                <div className="Messages">
                  <div className="item5">
                    <img src={MessagesLogo} alt="" />
                    Messages
                    <div className="MessageCounter"></div>
                  </div>
                </div>
                <div className="Settings">
                  <div className="item6">
                    <img src={SettingsLogo} alt="" />
                    Settings
                  </div>
                </div>
              </div>
              <div className="logout">
                <img className="logout-logo" src={LogoutLogo} alt="" />
                Logout
              </div>

              <div className="Theme">
                <div className="ThemeContent">
                  <img src={LightIcon} alt="Light" />
                  <div className="ThemeToggle-Btn"></div>
                  <img src={DarkIcon} alt="Dark" />
                </div>
              </div>
              <div className="HideSideBar">
              <button
                className= {isOpenSideBar ? "ShowSideBar" :   "HideSideBarText" }
                onClick={() => setIsOpenSideBar((curr) => !curr)}
              >
                <img src={hidesidebarIcon} alt="" />
                Hide Sidebar
              </button>
              {isOpenSideBar ? (
                <button className="HideSideBarText" onClick={toggleSideBar}>
                  <img src={hidesidebarIcon} alt="" />
                  Hide Sidebar
                </button>
              ) : (
                <button className="ShowSideBar" onClick={toggleSideBar}>
                  <img src={hidesidebarIcon} alt="" />
                </button>
              )}
              </div>
            </div>
          </div>
        </StyledDashSideBar>
      )} */}
      <StyledNavContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <img className="Kanbanlogo" src={Kanbanlogo} alt="" />
          </LeftContainer>
          <RightContainer>
            <div className="Navtitle">DashBoard</div>

            <div className="SearchBtn-AddNewTask">
              <div className="SearchBtn">
                <img className="searchIcon" src={searchIcon} alt="" />
                <input type="text" placeholder=" Search" />
              </div>
              <button className="AddNewTask-Btn">+ Add New Task</button>
            </div>
            <div className="notification">
              <img className="noti" src={notiIcon} alt="" />
              <img className="profile" src={ProfileImg} alt="" />
            </div>
          </RightContainer>
        </NavbarInnerContainer>
      </StyledNavContainer>

      <div className="NavBar">
        {/* <div className="navtitle">
            <h1>Task</h1>
          </div>
          <div className="SeacrchBtn-AddNewTask">
           
            <button className="AddNewTask-Btn">+Add New Task</button>
          </div>
          <div className="notification">
            <img className="noti" src={notiIcon} alt="" />
          </div> */}
      </div>
    </>
  );
};
