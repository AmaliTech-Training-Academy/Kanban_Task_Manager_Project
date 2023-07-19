import styled from "styled-components";

export const StyledSidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;

  .SidebarList {
    height: auto;
    width: 100%;
    padding: 0;
  }

  .SidebarList .row {
    width: 100%;
    height: 40px;
    margin: 0%;
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;
  }
  .SidebarList .row:hover {
    cursor: pointer;
    background-color: #a8a4ff;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  .SidebarList #active {
    background-color: #635fc7;
  }

  .row #icon {
    flex: 30%;
    display: grid;
    place-items: center;
  }

  .row #title {
    flex: 70%;
    color: #828fa3;
  }
`;
