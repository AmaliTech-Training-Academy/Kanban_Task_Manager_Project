import * as React from "react";
import { StyledResetPasswordForm } from "./styles";

 export const ResetPasswordForm = () => {
  return (
    <StyledResetPasswordForm>
      <div>
        <form action="/submit-form" method="POST">
          <div className="grid">
            <div className="form1">
              <label htmlFor="NewPassword">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
                minLength={8}
              ></input>
            </div>
          </div>

          <div className="grid">
            <div className="form1">
              <label htmlFor="password">Confirm Password</label>
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

          <button type="submit" className="submit-button-container">
            Reset password
          </button>
        </form>
      </div>
    </StyledResetPasswordForm>
  );
};
