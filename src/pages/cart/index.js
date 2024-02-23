import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasketPage from "../../../Templates/Shop/Basket/BasketPage";
import axios from "axios";
import { Server } from "../../../config";
import ProductsInBasket from "../../../Componenets/Shop/productsInBasket/ProductsInBasket";
import { toast } from "react-toastify";

function CartPage() {
  const [basket, setBasket] = useState([]);

  const peymentGatway = async () => {
    try {
      const response = await axios.post(
        `${Server.URL}/pey/payment`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status == 200) {
        window.location.href = response.data.url;
      } else {
        toast.error("لحظاتی بعد مجدد تلاش کنید.");
      }
    } catch (error) {
      console.error("Error adding to basket:", error);
    }
  };
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
    <Grid container rowSpacing={2}>
      <Grid container item xs={12}>
        <ProductsInBasket items={basket} removeFromBasket={removeFromBasket} />
      </Grid>
      <Grid container item display={"flex"} justifyContent={"flex-end"} xs={12}>
        <Grid
          container
          item
          display={"flex"}
          justifyContent={"flex-end"}
          xs={12}
          sm={4}
          md={2}
        >
          <Button
            variant="contained"
            disableElevation
            fullWidth
            sx={{
              backgroundColor: "#5C7CFF",
              borderRadius: 3,
              //   boxShadow: "0px 7px 20px -5px #4469ff",
              fontSize: 13,
              px: 2,
              py: 1,
              transition: "0.2s",
              "&:hover": {
                backgroundColor: "#5c7cffde",
                // boxShadow: "0px 7px 20px -5px #5c7cffde",
                transform: "translateY(-5px)",
              },
            }}
            onClick={() => peymentGatway()}
          >
            پرداخت
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CartPage;
