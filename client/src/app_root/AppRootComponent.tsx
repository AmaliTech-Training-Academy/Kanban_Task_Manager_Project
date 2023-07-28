import * as React from "react";
import { Outlet } from "react-router-dom";

const AppRootComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppRootComponent;
