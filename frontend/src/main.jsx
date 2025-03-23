// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider} from "./contexts/AuthContext";
import LoginPage from "./pages/login";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from './components/Navbar'
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute"; 
import { system } from "@chakra-ui/react/preset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <Router>
      <AuthProvider> 
      <Box width={{ base: "100%", md: "80%" }} margin="auto" p={4}>
        <Navbar />  
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
          </Box>  
        </AuthProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);