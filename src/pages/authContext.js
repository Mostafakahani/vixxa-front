import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "../../Cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false); // Set initial value as needed
  const [inBasket, setInBasket] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (getCookie("token")) {
      setAuth(true)
    }
  }, [router]);
  return (
    <AuthContext.Provider value={{ isAuth, setAuth, inBasket, setInBasket }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
