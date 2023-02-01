import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// @ts-ignore
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
