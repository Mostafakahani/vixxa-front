import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Products from "../../Componenets/Shop/products";
import ProductsPage from "../../Templates/Shop/Products/ShopPage";

export default function Home() {
  return (
    <>
      <Grid item container>
        <ProductsPage />
      </Grid>
    </>
  );
}
