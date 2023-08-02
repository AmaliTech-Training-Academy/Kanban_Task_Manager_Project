import * as React from "react";
import "./index.css";
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import AppRootComponent from "./app_root/AppRootComponent";
import HomePageComponent from "./home_page/HomePageComponent";
import { Admin } from "./admin_registration_page";
import { AdminLogin } from "./admin-user-login";
import TaskBoard from "./components/taskboard/TaskBoard";
import EditTask from "./components/edit task/EditTask";
import DeleteTask from "./components/delete task/DeleteTask";
import AddTask from "./components/add task/AddTask";
import CardDetails from "./components/card details/CardDetails";
import { DashBoardPage } from "./components/DashBoardPage";

 const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRootComponent />}>
      <Route index element={<DashBoardPage  />} />
      <Route path="login" element={<AdminLogin />} />
      <Route path="adminregistration" element={<Admin />} />
    </Route>
  )
);


function App() {
  return (
      <>
    <div className="App">
      {/* <RouterProvider router={router}/>  */}
      {/* <Router> */}
        {/* <Navbar />
        <Home />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      <Footer /> */}
        {/* <ForgotPassword/>
        <ResetPassword/>
        <SetNewPassword/>
        <Admin/>
      <AdminLogin/> */}
      {/* </Router> */}
      <TaskBoard />
      {/* <DeleteTask /> */}
      {/* <CardDetails /> */}
      {/* <AddTask name="Edit Task" submit="Update Task" /> */}
    </div>
      </>
  );
}

export default App;
 