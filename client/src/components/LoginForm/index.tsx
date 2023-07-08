import { StyledLoginForm } from "./styles";

export const LoginForm = () => {
  return (
    <StyledLoginForm>
      <div>
        <form action="/submit-form" method="POST">
          <div className="grid">
            <div className="form1">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Salami Joseph"
                required
              ></input>
            </div>
          </div>

          <div className="grid">
            <div className="form1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                required
                minLength={8}
              ></input>
            </div>
          </div>

          <div className="form-management">
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox-input"
                id="remember-checkbox"
              />
              <label htmlFor="remember-checkbox" className="checkbox-label">
                Remember me
              </label>
            </div>
            <div className="forgotPassword">
              <a href="">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="login-button-container">
            LOGIN
          </button>
        </form>
      </div>
    </StyledLoginForm>
  );
};
