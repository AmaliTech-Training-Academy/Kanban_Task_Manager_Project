import styled from "styled-components";

export const StyledNavContainer = styled.nav`
  width: auto;
  height: 96px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 100;
`;
export const LeftContainer = styled.div`
  flex: 5%;
  display: flex;
  align-items: center;
  padding-left: 1%;

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
