import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
//import { supabase} from './utils/supabase'
import LoginPage from "./pages/login";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from './components/Navbar'
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute"; 
import { system } from "@chakra-ui/react/preset";
import Form from "./pages/Form";
import { useAuth } from './contexts/AuthContext';
// export const ThemeContext = createContext();

function App() {
  const AuthContext=useAuth()

  return (
    <div className='App'>
    <ChakraProvider value={system}>
        <Box width={{ base: "100%", md: "100%" }} margin="auto">
        <Navbar />  
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/form" element={<Form />} />
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
      </ChakraProvider>
    </div>
  )
}

export default App
