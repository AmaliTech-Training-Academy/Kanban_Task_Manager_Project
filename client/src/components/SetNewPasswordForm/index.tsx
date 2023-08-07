import * as React from "react";
import { StyledNewPasswordForm } from "./styles";

export const SetPasswordForm = () => {
  return (
    <StyledNewPasswordForm>
      <div>
        <form action="/submit-form" method="POST">
          <div className="grid">
            <div className="form1">
              <label htmlFor="NewPassword">New Password</label>
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

        

          <button type="submit" className="submit-button-container">
            Submit
          </button>
        </form>
      </div>
    </StyledNewPasswordForm>
  );
};
