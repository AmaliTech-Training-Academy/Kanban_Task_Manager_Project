import Logo from "../assets/Icons/logo.png";
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
} from "../components/NavbarElements";

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
            <NavLink1 to="/">Home</NavLink1>
            <NavLink to="/about" onClick={() => handleClickScroll(".about")}>
              About
            </NavLink>
            <NavLink
              to="/features"
              onClick={() => handleClickScroll(".features")}
            >
              Features
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => handleClickScroll(".contact")}
            >
              Contact Us
            </NavLink>
          </NavMenu>
        </NavContainer>

        <NavBtn>
          <NavBtnLink>
            {" "}
            <a href="">Login</a>
          </NavBtnLink>
          <NavBtnLink2>
            <a href="">Register</a>
          </NavBtnLink2>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
