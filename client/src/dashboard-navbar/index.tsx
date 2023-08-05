import * as React from "react";
import { StyledNavContainer, LeftContainer,RightContainer,NavbarInnerContainer,} from "./styles";
import { KanbanSidebar } from "../dashboard-sidebar";
import Kanbanlogo from "../assets/Icons/logo.png";
import searchIcon from "../assets/Icons/searchIcon.svg";
import notiIcon from "../assets/Icons/Notification icon.svg";
import ProfileImg from "../assets/Images/blank image.svg";

export const KanbanNavbar = () => {
  return (
    <>
      <StyledNavContainer>
        <NavbarInnerContainer>
          <LeftContainer>
            <a href="http://">
              {" "}
              <img className="Kanbanlogo" src={Kanbanlogo} alt="" />
            </a>
          </LeftContainer>
          <RightContainer>
            <div id="active" className="Navtitle">
              DashBoard
            </div>

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
      <KanbanSidebar />
    </>
  );
};
