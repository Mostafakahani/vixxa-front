import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasketPage from "../../../Templates/Shop/Basket/BasketPage";
import axios from "axios";
import { Server } from "../../../config";
import ProductsInBasket from "../../../Componenets/Shop/productsInBasket/ProductsInBasket";
import { toast } from "react-toastify";
import HeaderMain from "../../../Componenets/Layout/New/Header";
import { useAuth } from "../context";

function CartPage() {
  const { refreshAuthAndBasket } = useAuth();

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
      toast.warning(error?.response?.data?.message);
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
      refreshAuthAndBasket();
    } catch (error) {
      console.error("Error removing from basket:", error);
    }
  };

  useEffect(() => {
    fetchBasket();
  }, []);
  return (
    <>
      <HeaderMain />
      <Grid container rowSpacing={2}>
        <Grid container item xs={12}>
          <ProductsInBasket
            items={basket}
            removeFromBasket={removeFromBasket}
          />
        </Grid>
        <Grid
          container
          item
          display={"flex"}
          justifyContent={"flex-end"}
          xs={12}
        >
          {basket?.length !== 0 && (
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
                  backgroundColor: "#276EF6",
                  borderRadius: 3,
                  //   boxShadow: "0px 7px 20px -5px #4469ff",
                  fontSize: 13,
                  px: 2,
                  py: 1,
                  transition: "0.2s",
                  "&:hover": {
                    backgroundColor: "#4469ff",
                    boxShadow: "0px 7px 20px -5px #276EF6",
                    transform: "translateY(-5px)",
                  },
                }}
                onClick={() => peymentGatway()}
              >
                پرداخت
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default CartPage;
export async function getStaticProps() {
  return {
    props: {}, // از اینجا پس props خالی ارسال می‌شود
    revalidate: 60 * 60 * 24 * 2, // به معنای آن است که هر دو روز، این صفحه را کش می‌کند و اطمینان حاصل می‌شود که اطلاعات جدید ارسال می‌شود.
  };
}
