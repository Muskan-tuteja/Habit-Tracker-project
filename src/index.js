import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import "./index.css";
import './output.css';
import { HashRouter } from "react-router-dom"; // ✅ Add this

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Wrap App with HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
