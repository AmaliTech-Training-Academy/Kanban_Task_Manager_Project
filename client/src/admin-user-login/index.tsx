import { StyledAdminLoginContainer } from "./styles";
import Logo from "../assets/Icons/logo.png";
import { LoginFooter } from "../components/LoginFooter";
import { LoginForm } from "../components/LoginForm";
import * as React from "react";
import { useState } from "react";
import { DashBoardPage } from "../DashBoardPage";

export const AdminLogin = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  // const [email, setEmail] = useState("")

  // const [password, setPassword] = useState("")
  

  if (isUserLoggedIn) {
    return <DashBoardPage />;
  }

  return (
    <StyledAdminLoginContainer>
      <div className="container-body">
        <div className="container">
          <div className="login">
            <div className="login-container">
              <img className="kanbanlogo" src={Logo} alt="logo" />
              <h1>Log in</h1>
              <p className="text">
                "Please enter your login details below to access you account."
              </p>
              <LoginForm setIsUserLoggedIn={setIsUserLoggedIn} />
              <LoginFooter />
            </div>
          </div>
        </div>
      </div>
    </StyledAdminLoginContainer>
  );
};
