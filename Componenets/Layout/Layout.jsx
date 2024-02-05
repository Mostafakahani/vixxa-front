import { Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ p: 2 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
