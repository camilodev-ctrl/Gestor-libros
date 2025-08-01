import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LibrosProvider } from "./context/LibrosContext";
import "./index.css";

// Aquí envolvemos <App /> con LibrosProvider para que el contexto esté disponible
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LibrosProvider>
      <App />
    </LibrosProvider>
  </React.StrictMode>
);
