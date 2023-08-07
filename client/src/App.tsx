import * as React from "react";
import "./index.css";
import { Admin } from "./admin_registration_page";
import { ForgotPassword } from './forgot-password'
import { ResetPassword } from './reset-password'
import { SetNewPassword } from './set-new-password'
import { AdminLogin } from './admin-user-login'

function App() {
  return (
    <>
     <ForgotPassword/>
    </>
  );
}

export default App;
