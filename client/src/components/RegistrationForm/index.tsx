import * as React from "react";
import { useState } from "react";
import { StyledRegistrationForm } from "./styles";

interface FormState {
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  passwordError: string;
  confirmPasswordError: string;
}

export const RegistrationForm = () => {
  const initialFormState: FormState = {
    password: "",
    confirmPassword: "",
  };

  const validatePassword = (password: string): string => {
    if (password.length < 8) {
      return "Password must be 8 characters long.";
    }
    return "";
  };

  const validateConfirmPassword = (
    password: string,
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

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      const passwordError = validatePassword(formState.password);
      const confirmPasswordError = validateConfirmPassword(
        formState.password,
        formState.confirmPassword
      );

      setFormErrors({ passwordError, confirmPasswordError });

      if (!passwordError && !confirmPasswordError) {
        // Form is valid, submit the data or perform other actions
        console.log("Form submitted:", formState);
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
                placeholder="e.g. Salami Joseph"
                required
              ></input>
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
              ></input>
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
                placeholder="e.g theresah@kanban.com"
                required
              ></input>
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
              ></input>
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
