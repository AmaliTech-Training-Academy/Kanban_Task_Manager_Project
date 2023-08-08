import * as React from "react";
import "./index.css";
import { ForgotPassword } from './forgot-password'
import { Route,  RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import AppRootComponent from "./app_root/AppRootComponent";
import HomePageComponent from "./home_page/HomePageComponent";
import { Admin } from "./admin_registration_page";
import { AdminLogin } from "./admin-user-login";
import DataTable from "./components/DataTable";


        

 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<AppRootComponent />}>
       <Route index element={<HomePageComponent />} />
       <Route path="adminregistration" element={<Admin />} />
       <Route path="login" element={<AdminLogin />}>
       <Route path="datatable" element={<DataTable />} />
       </Route>
     </Route>
   )
 );


function App() {
  return (
      <>
    <div className="App">
       <RouterProvider router={router}/> 
    </div>
      </>
  );
}

export default App;
