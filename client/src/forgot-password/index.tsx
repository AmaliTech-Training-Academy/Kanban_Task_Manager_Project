import { StyledForgotPasswordContainer } from "./styles";
import Logo from "../assets/Icons/logo.png";
import { ForgotPasswordFooter  } from "../components/ForgotPasswordFooter";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";

export const ForgotPassword = () => {
  return (
    <StyledForgotPasswordContainer>
      <div className="container-body">
        <div className="container">
          <div className="forgot-password">
            <div className="forgotpassword-container">
              <img className="kanbanlogo" src={Logo} alt="logo" />
              <h1>Forgot password</h1>
              <p className="text">
                Enter your email address and click on the submit button below to recieve an email instruction on how to reset your password
              </p>

              <ForgotPasswordForm />
              <ForgotPasswordFooter />
            </div>
          </div>
        </div>
      </div>
    </StyledForgotPasswordContainer>
  );
};
