import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import * as React from "react";
import "./index.css";
import { Admin } from "./admin_registration_page";
import './App.css'
import { ForgotPassword } from './forgot-password'
import { ResetPassword } from './reset-password'
import { SetNewPassword } from './set-new-password'
import { AdminLogin } from './admin-user-login'
import TaskBoard from "./components/taskboard/TaskBoard";
import EditTask from "./components/edit task/EditTask";
import DeleteTask from "./components/delete task/DeleteTask";
import AddTask from "./components/add task/AddTask";
import CardDetails from "./components/card details/CardDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Features />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        {/* <ForgotPassword/>
        <ResetPassword/>
        <SetNewPassword/>
        <Admin/>
        <AdminLogin/> */}
      </Router>
      <TaskBoard />
      {/* <DeleteTask /> */}
      {/* <CardDetails /> */}
      {/* <AddTask name="Edit Task" submit="Update Task" /> */}
    </div>
  );
}

export default App;
