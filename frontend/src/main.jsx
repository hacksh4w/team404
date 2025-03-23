// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Route, Navigate, BrowserRouter } from "react-router-dom";
import { AuthProvider} from "./contexts/AuthContext";
import { DocumentProvider } from "./contexts/DocumentContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DocumentProvider>
          <App />
        </DocumentProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);