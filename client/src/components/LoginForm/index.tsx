import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledLoginForm } from "./styles";
import axios from "axios";

// Define FormState interface
interface FormState {
  email: string;
  password: string;
}

// Define FormErrors interface (if applicable)
// interface FormErrors {
//   fieldName: string;
//   errorMessage: string;
//   // Add more error fields if needed
// }

export const LoginForm = () => {
  const initialFormState: FormState = {
    email: "",
    password: "",
  };

  const useForm = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    // const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      // Add your logic here for form submission, axios requests, etc.
    };

    return {
      formState,
      // formErrors, // Uncomment this line if you have FormErrors defined
      handleInputChange,
      handleSubmit,
    };
  };

  const { formState, handleInputChange, handleSubmit } = useForm();

  return (
    <StyledLoginForm>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <div className="form1">
              <label htmlFor="fullname">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="salamijoe@example.com"
                required
                value={formState.email}
                onChange={handleInputChange}
              />
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
                value={formState.password}
                onChange={handleInputChange}
              />
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

          {/* Wrap the button inside the Link */}
          {/* <Link to="/dashboard"> */}
            <button className="login-button-container" type="submit">
              LOGIN
            </button>
          {/* </Link> */}
        </form>
      </div>
    </StyledLoginForm>
  );
};
