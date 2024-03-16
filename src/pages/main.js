import React from "react";
import HeaderMain from "../../Componenets/Layout/New/Header";
import { Container, Grid } from "@mui/material";
import MainPage from "../../Componenets/Layout/New/MainPage";
import FooterMain from "../../Componenets/Layout/New/Footer";

function Main() {
  return (
    <>
      {/* <Container
        disableGutters
        maxWidth={false}
        sx={{
          //   background: "rgb(23,27,44)",
          background: "linear-gradient(500deg, #171b2c 100%, black 100%);",

          //   height: "100vh",
          p: 2,
        }}
      > */}
      <Grid
        container
        sx={{ borderRadius: 4, border: "1px solid #ffffff1f", p: 3, mx: 1 }}
      >
        <HeaderMain />
        <MainPage />
        <FooterMain />
      </Grid>
      {/* </Container> */}
    </>
  );
}

export default Main;
export async function getStaticProps() {
  return {
    props: {}, // از اینجا پس props خالی ارسال می‌شود
    revalidate: 60 * 60 * 24 * 2, // به معنای آن است که هر 60 ثانیه، این صفحه را کش می‌کند و اطمینان حاصل می‌شود که اطلاعات جدید ارسال می‌شود.
  };
}
