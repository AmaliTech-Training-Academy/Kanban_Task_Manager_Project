import * as React from "react";
import "./index.css";
import { Route,  RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import AppRootComponent from "./app_root/AppRootComponent";
import HomePageComponent from "./home_page/HomePageComponent";
import { Admin } from "./admin_registration_page";
import { AdminLogin } from "./admin-user-login";

import DataTable from "./components/DataTable";
import TaskBoard from "./components/taskboard/TaskBoard";
import EditTask from "./components/edit task/EditTask";
import DeleteTask from "./components/delete task/DeleteTask";
import AddTask from "./components/add task/AddTask";
import CardDetails from "./components/card details/CardDetails";


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
      <RouterProvider router={router}/> 

    <div className="App">

    </div>
      </>
  );
}

export default App;
 