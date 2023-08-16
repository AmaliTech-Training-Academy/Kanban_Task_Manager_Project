import * as React from "react";
import { KanbanNavbar } from "../components/dashboard-navbar";
import { KanbanSidebar } from "../components/dashboard-sidebar";
import { Outlet } from "react-router-dom";

export const DashBoardPage = () => {
  return (
    <div>
      <KanbanNavbar />
      <KanbanSidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
