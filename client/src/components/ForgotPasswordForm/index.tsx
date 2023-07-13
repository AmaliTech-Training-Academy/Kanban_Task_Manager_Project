import * as React from "react";
import { StyledForgotPasswordForm } from "./styles";

export const ForgotPasswordForm = () => {
  return (
    <StyledForgotPasswordForm>
      <div>
        <form action="/submit-form" method="POST">
          <div className="grid">
            <div className="form1">
              <label htmlFor="NewPassword">
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g Joe Salami"
                required
              ></input>
            </div>
          </div>

          <button type="submit" className="submit-button-container">
            Submit
          </button>
        </form>
      </div>
    </StyledForgotPasswordForm>
  );
};
