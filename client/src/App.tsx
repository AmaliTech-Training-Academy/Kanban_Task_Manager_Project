import * as React from "react";
import "./index.css";
import { Admin } from "./admin_registration_page";
import './App.css'
import { SetNewPassword } from './set-new-password'
import { AdminLogin } from './admin-user-login'

function App() {
  return (
    <>
     <SetNewPassword/>
      <Admin/>
     <AdminLogin/>
    </>
  );
}

export default App;
