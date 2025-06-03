// context/AuthContext.js

"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [user, setuser] = useState([]);

  // Check auth status on mount (e.g., verify token)
  useEffect(() => {
    const _token = localStorage.getItem("token");
    const _user = localStorage.getItem("user");

    setAuth(!!token);
    setToken(_token);
    setuser(_user);
  }, [token, user]);

  const login = (user, token) => {
    setAuth(true);
    setToken(token);
    setuser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setAuth(false);
    setToken("");
    setuser([]);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ auth, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
