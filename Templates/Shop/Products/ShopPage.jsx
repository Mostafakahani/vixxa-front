import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Products from "../../../Componenets/Shop/products";

function ProductsPage() {
  const [items, setItems] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEN0pKGxIz2GoyHMm2ZfHGoEt5URdAQ0D7fL52uSi3A&s",
      title: "Vixxa",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEN0pKGxIz2GoyHMm2ZfHGoEt5URdAQ0D7fL52uSi3A&s",
      title: "Vixxa",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEN0pKGxIz2GoyHMm2ZfHGoEt5URdAQ0D7fL52uSi3A&s",
      title: "Vixxa",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEN0pKGxIz2GoyHMm2ZfHGoEt5URdAQ0D7fL52uSi3A&s",
      title: "Vixxa",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
  ]);
  return (
    <>
      {items.length === 0 ? (
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
      ) : (
        <Products items={items} />
      )}
    </>
  );
}

export default ProductsPage;
