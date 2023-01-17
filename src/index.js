import { StrictMode } from "react";
import ReactDOM from "react-dom";

import RouterProvider from "./router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>,
  rootElement
);
