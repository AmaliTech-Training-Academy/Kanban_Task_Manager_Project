import { StyledForgotPasswordContainer } from "./styles";
import Logo from "../assets/Icons/logo.png";
// import { LoginFooter } from "../components/LoginFooter";
// import { LoginForm } from "../components/LoginForm";

export const ForgotPassword = () => {
  return (
    <StyledForgotPasswordContainer>
      <div className="container-body">
        <div className="container">
          <div className="login">
            <div className="login-container">
              <img className="kanbanlogo" src={Logo} alt="logo" />
              <h1>Forgot password</h1>
              <p className="text">
                Enter your email address and click on the submit button below to recieve an email instruction on how to reset your password
              </p>
              {/* <LoginForm /> */}
              {/* <LoginFooter /> */}
            </div>
          </div>
        </div>
      </div>
    </StyledForgotPasswordContainer>
  );
};
