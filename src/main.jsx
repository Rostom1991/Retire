import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="grid place-content-center h-screen">
          <span className="loading loading-dots loading-lg text-blue-400"></span>
        </div>
      }>
      <App />
    </Suspense>
  </React.StrictMode>
);
