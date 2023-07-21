import  { useState } from "react";
import axios from "axios";
import { StyledRegistrationForm } from "./styles";
import * as React from "react";

interface FormState {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  passwordError: string;
  confirmPasswordError: string;
}

export const RegistrationForm = () => {
  const initialFormState: FormState = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validatePassword = (password: string): string => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    return "";
  };

  const validateConfirmPassword = (
    password: string|number,
    confirmPassword: string
  ): string => {
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return "";
  };

  const useForm = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [formErrors, setFormErrors] = useState<FormErrors>({
      passwordError: "",
      confirmPasswordError: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      const passwordError = validatePassword(formState.password);
      const confirmPasswordError = validateConfirmPassword(
        formState.password,
        formState.confirmPassword
      );

      setFormErrors({ passwordError, confirmPasswordError });

      if (!passwordError && !confirmPasswordError) {
        try {
          const response = await axios.post("/api/endpoint", formState);
          console.log("Form submitted:", response.data);
          // Do something with the response if needed
        } catch (error) {
          console.log("Error:", error);
        }
      }
    };

    return {
      formState,
      formErrors,
      handleInputChange,
      handleSubmit,
    };
  };

  const { formState, formErrors, handleInputChange, handleSubmit } = useForm();

  return (
    <StyledRegistrationForm>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <div className="form1">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={formState.fullname}
                onChange={handleInputChange}
                placeholder="e.g. Salami Joseph"
                required
              />
            </div>

            <div className="form1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleInputChange}
                placeholder="************"
                required
                minLength={8}
              />
              {formErrors.passwordError && <p>{formErrors.passwordError}</p>}
            </div>
          </div>

          <div className="grid">
            <div className="form1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="e.g. theresah@kanban.com"
                required
              />
            </div>

            <div className="form1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleInputChange}
                placeholder="***********"
                required
                minLength={8}
              />
              {formErrors.confirmPasswordError && (
                <p>{formErrors.confirmPasswordError}</p>
              )}
            </div>
          </div>

          <button type="submit" className="submit-container">
            Create account
          </button>
        </form>
      </div>
    </StyledRegistrationForm>
  );
};
