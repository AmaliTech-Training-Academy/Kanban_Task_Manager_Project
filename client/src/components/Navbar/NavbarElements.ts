import styled from "styled-components";

import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 17px 71px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 45px;
  height: 100%;
  text-decoration: none;
  font-size: 18px;
  color: #000;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  a {
    text-decoration: none;
  }

  &:active {
    color: #635fc7;
 }
  &:hover {
    color: #a8a4ff;
  }
`;
export const NavLink1 = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 45px;
  height: 100%;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  a:active{
    text-decoration: none;
  }

  &.active {
    color: #635fc7;

  }
  &:hover {
    color: #a8a4ff;
  }
`;

export const SmallLogo = styled.div``;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 24px;
`;

export const NavContainer = styled.div`
  display: flex;
  .active-link{
    color: red;
  }
`;

export const NavBtn = styled.div`
  display: flex;
`;

export const NavBtnLink = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 18px;
  color: #635fc7;
  margin-right: 14px;
  padding: 16px 24px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 100px;
  border: 2px solid #635fc7;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
    color: #635fc7;
  }
  &:hover {
    background: #a8a4ff;
    cursor: pointer;
  }
 
`;

export const NavBtnLink2 = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  font-size: 18px;
  border-radius: 100px;
  background: #635fc7;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
  padding: 16px 24px;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    background: #a8a4ff;
  }
`;
