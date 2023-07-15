import * as React from "react";
import { useState } from "react";
import {
  StyledDashSideBar,
  StyledDashSideNav,
} from "../dashboard-sidebar/styles";
import Logo from "../assets/Icons/logo.png";
import DashLogo from "../assets/Icons/dashboard icon.svg"
import TaskLogo from "../assets/Icons/task icon.svg";
import TeamLogo from "../assets/Icons/team icon.svg";
import CalendarLogo from "../assets/Icons/calender icon.svg";
import MessagesLogo from "../assets/Icons/Messages icon.svg";
import SettingsLogo from "../assets/Icons/Settings.svg";
import LogoutLogo from "../assets/Icons/logout icon.svg";
import LightIcon from "../assets/Icons/light mode icon.svg";
import DarkIcon from "../assets/Icons/dark mode icon.svg";
import searchIcon from "../assets/Icons/searchIcon.svg"
import notiIcon from "../assets/Icons/Notification icon.svg"
import ProfileIcon from "../assets/Images/blank image.svg";










export const DashBoardSideBar = () => {

  const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
}

  



  return (
    <>
      <StyledDashSideBar>
        <div className="SideBar">
          <img className="SideBarLogo" src={Logo} alt="logo" />
          <div className="SideBarContent">
            <p className="All-Boards">All BOARDS</p>

            <div className="menu MenuItems">
              <div className="Dashboard">
                <div className="item1">
                  <img src={DashLogo} alt="" />
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
            </div>
            <div className="Theme">
              <div className="ThemeContent">
                <img src={LightIcon} alt="" />
                <div className="ThemeToggle-Btn "></div>

                <img src={DarkIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </StyledDashSideBar>
      <StyledDashSideNav>
        <div className="NavBar">
          <div className="SeacrchBtn-AddNewTask">
            <div className="SearchBtn">
              <img className="searchIcon" src={searchIcon} alt="" />
              <input type="text" placeholder=" Search" />
            </div>
            <button className="AddNewTask-Btn">+Add New Task</button>
          </div>
          <div className="notification">
            <img className="noti" src={notiIcon} alt="" />
            <img className = "profile" src={ProfileIcon} alt="" />
          </div>
        </div>
      </StyledDashSideNav>
    </>
  );
};
