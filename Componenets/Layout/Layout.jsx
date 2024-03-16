import { Container, Grid } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import HeaderMain from "./New/Header";
import FooterMain from "./New/Footer";

function Layout({ children }) {
  return (
    <>
      {/* <HeaderMain /> */}
      {/* <Container sx={{ p: 2 }}> */}
      <Grid
        container
        sx={{
          borderRadius: 4,
          // border: "1px solid #ffffff1f",
          p: 3,
        }}
      >
        {/* <HeaderMain /> */}
        {children}
        {/* <MainPage /> */}
        {/* <FooterMain /> */}
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
