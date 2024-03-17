import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "../../Cookie";
import axios from "axios";
import { Server } from "../../config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [isAuth, setAuth] = useState(false);
  const router = useRouter();

  const fetchAuthAndBasket = async () => {
    try {
      const token = getCookie("token");
      if (token) {
        setAuth(true);
        const response = await axios.post(
          `${Server.URL}/basket/list`,
          {},
          { withCredentials: true }
        );
        setBasket(response.data.basket);
      } else {
        setAuth(false);
        setBasket(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAuthAndBasket();
  }, [router]);

  return (
    <AuthContext.Provider
      value={{ isAuth, basket, refreshAuthAndBasket: fetchAuthAndBasket }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
