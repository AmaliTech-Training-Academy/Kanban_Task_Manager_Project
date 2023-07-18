import { RouterProvider } from "react-router-dom";
import * as React from "react";
import "./index.css";
import { router } from "./router/router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
