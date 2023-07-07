import { StyledAdminLoginContainer } from "./styles";
import Logo from "../assets/Icons/logo.png";
import * as React from "react";
import { LoginFooter } from "../components/LoginFooter";
import { LoginForm } from "../components/LoginForm";

export const AdminLogin = () => {
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
              <LoginForm />
              <LoginFooter />
            </div>
          </div>
        </div>
      </div>
    </StyledAdminLoginContainer>
  );
};
