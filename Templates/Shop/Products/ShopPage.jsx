import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Products from "../../../Componenets/Shop/products";

function ProductsPage() {
  const [items, setItems] = useState([
    {
      image: "https://fronthooks.ir/images/courses/coding-journey.svg",
      title: "Tailwind css template for tail wind navigation",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image: "https://fronthooks.ir/images/courses/tailwind.svg",
      title: "Tailwind css template",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image: "https://fronthooks.ir/images/courses/javascript.svg",
      title: "tail wind",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image: "https://fronthooks.ir/images/courses/flex-grid.svg",
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
