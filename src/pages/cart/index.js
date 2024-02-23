import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasketPage from "../../../Templates/Shop/Basket/BasketPage";
import axios from "axios";
import { Server } from "../../../config";
import ProductsInBasket from "../../../Componenets/Shop/productsInBasket/ProductsInBasket";

function CartPage() {
  const [basket, setBasket] = useState([]);

  // این تابع برای دریافت لیست سبد خرید از سرور استفاده می‌شود
  const fetchBasket = async () => {
    try {
      const response = await axios.post(
        `${Server.URL}/basket/list`,
        {},
        {
          withCredentials: true,
        }
      );
      setBasket(response.data.basket);
    } catch (error) {
      console.error("Error fetching basket:", error);
    }
  };

  const addToBasket = async (productId) => {
    try {
      await axios.post(
        `${Server.URL}/basket/add`,
        { productId },
        {
          withCredentials: true,
        }
      );
      fetchBasket();
    } catch (error) {
      console.error("Error adding to basket:", error);
    }
  };

  const removeFromBasket = async (productId) => {
    try {
      await axios.post(
        `${Server.URL}/basket/remove`,
        { productId },
        {
          withCredentials: true,
        }
      );
      fetchBasket();
    } catch (error) {
      console.error("Error removing from basket:", error);
    }
  };

  useEffect(() => {
    fetchBasket();
  }, []);
  return (
    <Container>
      <ProductsInBasket items={basket} removeFromBasket={removeFromBasket} />
      {/* <BasketPage
        data={basket}
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
      /> */}
    </Container>
  );
}

export default CartPage;
