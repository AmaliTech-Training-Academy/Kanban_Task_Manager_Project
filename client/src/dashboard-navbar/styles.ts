import styled from "styled-components";

export const StyledDashSideBar = styled.datalist`
  .SideBar {
    width: 300px;
    height: 1203px;
    position: absolute;
  }

  .SideBarLogo {
    width: 152px;
    height: 25px;
    margin-left: 32px;
    margin-top: 32px;
  }
  .SideBarContent {
  }

  .All-Boards {
    color: #828fa3;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4;
    /* word-wrap: break-word; */
    margin-left: 33px;
    margin-top: 8px;
    width: 126px;
    height: 15px;
  }

  .Dashboard {
    width: 100%;
    height: 48px;
  }
  .Taskslist {
    width: 100%;
    height: 48px;
  }
  .Teams {
    width: 100%;
    height: 48px;
  }
  .Calendar {
    width: 100%;
    height: 48px;
  }
  .Messages {
    width: 100%;
    height: 48px;
  }
  .Settings {
    width: 100%;
    height: 48px;
  }

  .MenuItems {
    color: #828fa3;
    font-size: 15;
    font-weight: 700;
  }

  .item1 {
    width: 120px;
    height: 19px;
    align-items: center;
    margin-left: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    padding: 15px;
  }
  .item5 {
    align-items: center;
    margin-left: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    align-items: center;
    background-color: #f4f7fd;
  }

  .ThemeContent {
    width: 105px;
    height: 20px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    margin-top: 48px;
    align-items: center;
    padding: 14px;
    /* background-color: brown; */
  }

  .ThemeToggle-Btn {
    width: 40px;
    height: 20px;
    align-items: center;
    display: flex;
    /* background-color: blueviolet; */
  }
  .SideBarLogo {
    padding: 14px;
  }

  /* .HideSideBar {
    width: 276px;
    height: 46px;
    display: flex;
    align-items: center;
  } */
  .HideSideBarText {
    width: 135px;
    height: 19px;
    margin-left: 31px;
    display: flex;
    justify-content: space-between;
    color: #828fa3;
    font-size: 15px;
    font-weight: 700;
    border: none;
    margin-top: 49px;
    background-color: transparent;
  }

  .ShowSideBar {
    width: 56px;
    height: 48px;
    border-radius: 0px 100px 100px 0px;
    background-color: #635fc7;
    margin-top: 49px;
    margin-left: 135px;
  }
`;

export const StyledNavContainer = styled.nav`
  width: auto;
  height: 96px;
  display: flex;
  flex-direction: column;
  background-color: salmon;
  position: sticky;
  top: 0;
  z-index: 100;
`;
export const LeftContainer = styled.div`
  flex: 5%;
  display: flex;
  align-items: center;
  padding-left: 1%;
  background-color: cadetblue;

  .Kanbanlogo {
    width: 152px;
  }

  .Navtitle {
    font-size: 15px;
    font-weight: 700;
  }
`;

export const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  background-color: aquamarine;

  .SearchBtn-AddNewTask {
    width: 571px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    border-radius: 100px;
    margin-right: 3%;
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
  .SearchBtn input {
    height: 24px;
    border: none;
    align-items: center;
    background-color: #e4ebfa;
    width: 80%;
  }
  .searchIcon {
    margin-left: 20px;
  }
  input[type="text"]:focus {
    outline-color: #e4ebfa;
  }
  ::placeholder {
    color: #828fa3;
    font-size: 15px;
    font-weight: 700;
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
    align-items: center;
    font-family: "Plus Jakarta Sans";
    margin-right: 20px;
    &:active {
      cursor: pointer;
      transform: translateY(2px);
    }
    &:hover {
      cursor: pointer;
      background-color: #a8a4ff;
    }
  }

  .notification {
    width: 105px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .profile {
    width: 60px;
    height: 60px;
  }
  .noti {
    width: 30px;
    height: 30px;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: auto;
  height: 96px;
  display: flex;
  padding: 10px;

  .Navtitle {
    font-size: 15px;
    font-weight: 700;
    align-self: start;
    align-self: center;
    margin-right: 30%;
  }
`;
