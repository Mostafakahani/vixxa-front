import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "../../Cookie";
import axios from "axios";
import { Server } from "../../config";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [isAuth, setAuth] = useState(false);
  const router = useRouter();

  const fetchAuthAndBasket = async () => {
    try {
      const token = getCookie("token");
      if (token) {
        const response = await axios.post(
          `${Server.URL}/basket/list`,
          {},
          { withCredentials: true }
        );
        setBasket(response.data.basket);
        setAuth(true);
      } else {
        setBasket([]);
        setAuth(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Optionally, you can handle errors here, e.g., redirect to login page
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
}

export const useAuth = () => useContext(AuthContext);
