import { Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      {/* <Container sx={{ p: 2 }}> */}
        <div>

        {children}
        </div>
        {/* </Container> */}
      <Footer />
    </>
  );
}

export default Layout;
