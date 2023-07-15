import * as React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePageComponent from "../home_page/HomePageComponent";
import AppRootComponent from "../app_root/AppRootComponent";
import { Admin } from "../admin_registration_page";
import { AdminLogin } from "../admin-user-login";
import { DashBoardSideBar } from "../dashboard-sidebar";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRootComponent />}>
      {/* <Route index element={<HomePageComponent />} /> */}
      <Route index element={<DashBoardSideBar />} />
      {/* <Route path="adminregistration" element={<Admin />} /> */}
      {/* <Route path="login" element={<AdminLogin />} /> */}
    </Route>
  )
);
