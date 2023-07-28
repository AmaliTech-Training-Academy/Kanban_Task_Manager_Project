import { StyledSetNewPassword } from "./styles";
import Logo from "../assets/Icons/logo.png";
// import { LoginFooter } from "../components/LoginFooter";
import { SetPasswordForm } from "../components/SetNewPasswordForm";
import * as React from "react";

export const SetNewPassword = () => {
  return (
    <StyledSetNewPassword>
      <div className="container-body">
        <div className="container">
          <div className="SetNewPassword">
            <div className="SetNewPassword-container">
              <img className="kanbanlogo" src={Logo} alt="logo" />
              <h1>Set new password</h1>
              <p className="text">
                "Set your new password below to gain access to your account."
              </p>
              <SetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </StyledSetNewPassword>
  );
};
