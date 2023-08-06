import * as React from "react";
import Logo from "../../assets/Icons/logo.png";
import {
  Nav,
  // SmallLogo,
  NavMenu,
  NavContainer,
  NavBtn,
  NavLink1,
  NavLink,
  NavBtnLink,
  NavBtnLink2,
} from "./NavbarElements";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClickScroll = (value: string): any => {
    const element = document.querySelector(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          {" "}
          <img src={Logo} alt="/" style={{ width: "160px" }} />
        </NavLink>

        <NavContainer>
          <NavMenu>
            <NavLink1 to="/">Home </NavLink1>
            
            <NavLink  
            onClick={() => handleClickScroll(".about")}>
              About
            </NavLink>

            <NavLink
              onClick={() => handleClickScroll(".features")}>
              Features
            </NavLink>

            <NavLink
              onClick={() => handleClickScroll(".contact")}>
              Contact Us
            </NavLink>
          </NavMenu>
        </NavContainer>

        <NavBtn>
          <NavBtnLink>
            <Link to="login">
              Login
            </Link>
          </NavBtnLink>

          <NavBtnLink2>
            <Link to="adminregistration">
              Register
            </Link>
          </NavBtnLink2>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
