import Logo from "../assets/Icons/logo.png";
import {
  Nav,
  SmallLogo,
  NavMenu,
  NavContainer,
  NavBtn,
  NavLink1,
  NavLink,
  NavBtnLink,
  NavBtnLink2
} from "../components/NavbarElements";
// import {Link} from "react-router-dom"

const Navbar = () => {
  return  (
    <>
      <Nav>
        <SmallLogo>
          {" "}
          <img src={Logo} alt="/" style={{ width: "160px" }} />
        </SmallLogo>

        <NavContainer>
          <NavMenu>
            <NavLink1 to="/home">Home</NavLink1>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </NavMenu>


        </NavContainer>

        <NavBtn>
            <NavBtnLink>Login</NavBtnLink>
            <NavBtnLink2>Register</NavBtnLink2>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
