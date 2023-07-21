import { StyledRegistrationContainer } from "./styles";
import Logo from "../assets/Icons/logo.png";
import * as React from "react";
import { UploadPhoto } from "../components/UploadPhoto";
import { RegistrationForm } from "../components/RegistrationForm";
import { RegistrationFooter } from "../components/RegistrationFooter";

export const Admin = () => {
  return (
    <StyledRegistrationContainer>
      <div className="container-body">
        <div className="container">
          <img className="kanbanlogo" src={Logo} alt="logo" />
          <div className="registration">
            <div className="register-container">
              <h1>Registration</h1>
              <p className="text">
                Please fill out the required fields below to create your
                account. We look forward to having you join our community
              </p>
              <UploadPhoto />
              <RegistrationForm />
              <RegistrationFooter />
            </div>
          </div>
        </div>
      </div>
    </StyledRegistrationContainer>
  );
};
