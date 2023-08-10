import * as React from "react";
import { StyledSidebarContainer } from "./styles";
import { SidebarData } from "./sidebardata";
import logoutIcon from "../../assets/Icons/logout icon.svg";
import hideSideBar from "../../assets/Icons/Hide side bar icon.svg";
import lightIcon from "../../assets/Icons/light mode icon.svg";
import darkIcon from "../../assets/Icons/dark mode icon.svg";
import ToggleButton from "../SideBarToggleBtn";

export const KanbanSidebar = () => {
  return (
    <>
      <StyledSidebarContainer>
        <div className="SidebarContainer">
          <ul className="SidebarList">
            {SidebarData.map((val, key) => (
              <li
                key={key}
                className="row"
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="SubContainer">
          <button className="logoutBtn">
            <img src={logoutIcon} alt="" />
            logout
          </button>
          <div className="ToggleBtnContainer">
            <img src={lightIcon} alt="" />
            <ToggleButton />
            <img src={darkIcon} alt="" />
          </div>
          <button className="HideSideBar-Btn">
            <img src={hideSideBar} alt="" />
            HideSideBar
          </button>
        </div>
      </StyledSidebarContainer>
    </>
  );
};
