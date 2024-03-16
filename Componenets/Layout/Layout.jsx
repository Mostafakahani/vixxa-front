import { Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      {/* <Container sx={{ p: 2 }}> */}
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
        <div>{children}</div>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
