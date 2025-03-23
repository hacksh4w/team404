// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <Router>
      <AuthProvider>        
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } //protected routes
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        </AuthProvider>
      </Router>
    
  </React.StrictMode>
);