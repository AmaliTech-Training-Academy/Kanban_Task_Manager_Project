import { useState } from "react";
import { StyledLoginForm } from "./styles";
import * as React from "react";
import { BASE_URL } from "../../../constants";
import axios from "axios";
import { useNavigate } from "react-router";

interface LoginFormProps {
  setIsUserLoggedIn: (arg: boolean) => void;
}

export const LoginForm = ({ setIsUserLoggedIn }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async() => {
    // Your login logic here, e.g., validate credentials, make API calls, etc.
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await axios.post(BASE_URL + "/users/login", { email, password });
      console.log(response);
      if (response.status == 200) {
        const token = response.data.token;
        localStorage.setItem("token", token)
        setIsUserLoggedIn(true);
      }
      
    } catch (error:any) {
      console.log(error)
      setIsUserLoggedIn(false);
      alert(error.response.data.message) 

      
    }



    // return

  };

  return (
    <StyledLoginForm>
      <div>
        <form action="/submit-form" method="POST">
          <div className="grid">
            <div className="form1">
              <label htmlFor="fullname">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="salamijoe@example.com"
                value={email}
                onChange={handleEmailChange}
                required
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
                value={password}
                onChange={handlePasswordChange}
                required
                minLength={8}
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
            <div className="Password">
              <a href="">Forgot password?</a>
            </div>
          </div>

          <button
            type="button"
            className="login-button-container"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </form>
      </div>
    </StyledLoginForm>
  );
};
