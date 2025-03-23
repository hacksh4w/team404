import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
      return localStorage.getItem("user") || null;
    });
    const navigate = useNavigate();
  
    const login = (username) => {
      setUser(username);
      localStorage.setItem("user", username);
      navigate("/dashboard");
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);
  