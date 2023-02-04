import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="w-screen h-screen bg-teal-700">
      <App />
    </div>
  </React.StrictMode>
);
