import * as React from "react";
import "./index.css";
import { Route,  RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import AppRootComponent from "./app_root/AppRootComponent";
import HomePageComponent from "./home_page/HomePageComponent";
import { Admin } from "./admin_registration_page";
import { AdminLogin } from "./admin-user-login";
import TaskBoard from "./components/taskboard/TaskBoard";



 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<AppRootComponent />}>
       <Route index element={<HomePageComponent />} />
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
 