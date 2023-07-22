import * as React from "react";
import { StyledFooter } from "./style";
import { Link } from "react-router-dom";

export const RegistrationFooter = () => {
  return (
    <div>
      <StyledFooter>
        <footer>
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </footer>
      </StyledFooter>
    </div>
  );
};
