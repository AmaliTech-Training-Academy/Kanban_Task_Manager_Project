import * as React from "react";
import { StyledSidebarContainer } from "./styles";
import { SidebarData } from "./sidebardata";

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
              } }
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </StyledSidebarContainer>
    </>
  );
};
