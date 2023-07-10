import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Admin } from "../admin_registration_page";
import * as React from "react";

export const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path ="/"element={<Admin/>}>
            <Route index element = {<Admin/>} />
            
        </Route>
    )
)