import styled from "styled-components"


export const StyledSidebarContainer = styled.div`
  height: 100vh;
  width: 220px;
  position: fixed;
  /* background-color: gainsboro; */

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

  .SubContainer {
    margin-left: 32px;
    height: 196px;
    margin-top: 160px;
  }
  .logoutBtn {
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background-color: transparent;
    color: #828fa3;
    font-size: 15px;
    font-weight: 700;
    &:active {
      cursor: pointer;
      transform: translateY(1px);
    }
  }
  .ToggleBtnContainer {
    height: 48px;
    width: 188px;
    margin-top: 48px;
    background-color: #f4f7fd;
    border-radius: 10px;
    background-color: #f4f7fd;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ToggleBtnContainer img {
    margin-right: 20px; 
    margin-left: 20px; 
  }
  .ToggleButtonContainer {
    margin-right: 8px; 
    margin-left: 8px;
  }

  .HideSideBar-Btn {
    width: 127px;
    height: 19px;
    border: none;
    margin-top: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-weight: 700;
    color: #828fa3;
    &:active {
      cursor: pointer;
      transform: translateY(1px);
    }
  }
`;
  
  
  