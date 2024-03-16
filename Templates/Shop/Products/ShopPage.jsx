import { Box, Button, Grid, Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Products from "../../../Componenets/Shop/products";
import axios from "axios";
import { Server } from "../../../config";
import SkeletonComponent from "../../../Componenets/Loading/Skeleton";
import { useRouter } from "next/router";
import HeaderMain from "../../../Componenets/Layout/New/Header";

function ShopPage({ data }) {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let url = "Components";
      if (router.route === "/templates") {
        url = "Templates";
      }
      try {
        const response = await axios.get(Server.URL + `/products/lists/${url}`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {/* <HeaderMain /> */}
      {loading ? (
        <Grid item container display={"flex"} justifyContent={"center"}>
          <SkeletonComponent count={6} />
        </Grid>
      ) : (
        products.length !== 0 && <Products items={products} />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    let url = "/Components"; // پیش‌فرض مسیر
    if (context.req.url == "/templates") {
      url = "/Templates"; // اگر آدرس URL /templates باشد، مسیر را به /Templates تغییر دهید
    }

    const response = await axios.get(`${Server.URL}/products/lists${url}`);
    const data = response.data;
    console.log(data);

    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: null },
    };
  }
}

export default ShopPage;
