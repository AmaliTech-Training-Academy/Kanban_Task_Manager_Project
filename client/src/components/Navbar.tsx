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
// import {Link} from "react-router-dom"

const handleClickScroll = () =>{
  const element: any = document.querySelector(".contact");
  if (element){
    element.scrollIntoView({behavior: 'smooth'});
  }
}
const Navbar = () => {
  const clickScrollHandler = () =>{
    const element = document.querySelector(".features");
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
  const handlerClickScroll = () =>{
    const element =document.querySelector(".about")
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
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
            <NavLink to="/about" onClick= {handlerClickScroll}>About</NavLink>
            <NavLink to="/features" onClick= {clickScrollHandler}>Features</NavLink>
            <NavLink to="/contact" onClick= {handleClickScroll}>Contact Us</NavLink>
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
