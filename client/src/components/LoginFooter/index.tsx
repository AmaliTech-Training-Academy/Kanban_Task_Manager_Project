import * as React from "react";
import { StyledLoginFooter } from "./styles";
import { Link } from "react-router-dom";

export const LoginFooter = () => {
  return (
    <div>
      <StyledLoginFooter>
        <footer>
          <Link to="/adminregistration">Don't have an account? Register</Link>
        </footer>
      </StyledLoginFooter>
    </div>
  );
};
