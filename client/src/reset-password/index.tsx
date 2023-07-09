import Logo from "../assets/Icons/logo.png";
import {ResetPasswordForm} from "../components/ResetPasswordForm";
import { StyledResetPassword } from "./styles";

export const ResetPassword = () => {
  return (
    <StyledResetPassword>
      <div className="container-body">
        <div className="container">
          <div className="ResetPassword">
            <div className="ResetPassword-container">
              <img className="kanbanlogo" src={Logo} alt="logo" />
              <h1>Reset password</h1>
              <p className="text">
                "Fill the form below to reset your password"
              </p>
              <ResetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </StyledResetPassword>
  );
};