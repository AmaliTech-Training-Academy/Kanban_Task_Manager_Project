import Logo from "../assets/Icons/logo.png";
// import { LoginFooter } from "../components/LoginFooter";
// import { SetPasswordForm } from "../components/LoginForm";
import { StyledResetPassword } from "./styles";

export const ResetPassword = () => {
  return (
    <StyledResetPassword>
      <div className="container-body">
        <div className="container">
          <div className="SetNewPassword">
            <div className="SetNewPassword-container">
              <img className="kanbanlogo" src={Logo} alt="logo" />
              <h1>Reset password</h1>
              <p className="text">
                "Fill the form below to reset your password"
              </p>
              {/* <SetPasswordForm /> */}
            </div>
          </div>
        </div>
      </div>
    </StyledResetPassword>
  );
};