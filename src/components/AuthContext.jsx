// AuthContext.js
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [message, setMessage] = useState();
  const navigateTo = useNavigate();

  const login = async (email, password) => {
    const res = await fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        "email": email,
        "password": password
     }),
    });
    const data = await res.json();
    if(data.message == "Success"){
        setToken(data.token);
        localStorage.setItem("token", data.token);
        navigateTo("/");
    }
    else{
        setMessage("email or password is wrong. Please enter valid credentials.");
        navigateTo("/login");
    }
    
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigateTo("/login");
  };

  return (
    <AuthContext.Provider value={{ token, message, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
