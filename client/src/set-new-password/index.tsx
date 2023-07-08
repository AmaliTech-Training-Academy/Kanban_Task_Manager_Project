import { StyledAdminLoginContainer } from "./styles";
import Logo from "../assets/Icons/logo.png";
// import { LoginFooter } from "../components/LoginFooter";
// import { LoginForm } from "../components/LoginForm";

export const SetNewPassword = () => {
  return (
    <StyledAdminLoginContainer>
      <div className="container-body">
        <div className="container">
          <div className="login">
            <div className="login-container">
              <img className="kanbanlogo" src={Logo} alt="logo" />
              <h1>Set new password</h1>
              <p className="text">
                "Set your new password below to gain access to your account."
              </p>
              {/* <LoginForm /> */}
              {/* <LoginFooter /> */}
            </div>
          </div>
        </div>
      </div>
    </StyledAdminLoginContainer>
  );
};
