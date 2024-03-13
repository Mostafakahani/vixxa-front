import React from "react";
import HeaderMain from "../../Componenets/Layout/New/Header";
import { Container, Grid } from "@mui/material";
import MainPage from "../../Componenets/Layout/New/MainPage";

function Main() {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          //   background: "rgb(23,27,44)",
          background: "linear-gradient(500deg, #171b2c 100%, black 100%);",

        //   height: "100vh",
          p: 2,
        }}
      >
        <Grid
          container
          sx={{ borderRadius: 4, border: "1px solid #ffffff1f", p: 3, mx: 1 }}
        >
          <HeaderMain />
          <MainPage />
        </Grid>
      </Container>
    </>
  );
}

export default Main;
