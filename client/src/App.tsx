import * as React from "react";
import "./index.css";
import { Route,  RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import AppRootComponent from "./app_root/AppRootComponent";
import HomePageComponent from "./home_page/HomePageComponent";
import { Admin } from "./admin_registration_page";
import { AdminLogin } from "./admin-user-login";


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
      <RouterProvider router={router}/> 

    <div className="App">

    </div>
      </>
  );
}

export default App;
 