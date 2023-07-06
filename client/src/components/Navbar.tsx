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
            <NavLink1 to="/">Home</NavLink1>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Features</NavLink>
            <NavLink to="/">Contact Us</NavLink>
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
