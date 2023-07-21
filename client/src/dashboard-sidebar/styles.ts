import styled from "styled-components"


export const StyledSidebarContainer = styled.div`
  height: 100vh;
  width: 220px;
  position: fixed;

  .SidebarList {
    height: auto;
    width: 100%;
    padding: 0;
    color: #828fa3;
  }

  .SidebarList .row {
    width: 100%;
    height: 40px;
    margin: 0%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    font-weight: 700;
    font-size: 15px;

  }
  .SidebarList .row:hover {
    cursor: pointer;
    background-color: #a8a4ff;
    color: white;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  .SidebarList .row:active {
    cursor: pointer;
    background-color: #635fc7;
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
  }
  
 
`;