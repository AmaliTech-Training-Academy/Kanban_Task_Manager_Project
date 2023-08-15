import * as React from "react";
import { KanbanNavbar } from "../components/dashboard-navbar";
import { KanbanSidebar } from "../components/dashboard-sidebar";

export const DashBoardPage = () => {
  return (
    <div>
      <KanbanNavbar />
      <KanbanSidebar />

    </div>
  );
};
