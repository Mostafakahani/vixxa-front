import React from "react";
import ComponentsPage from "../../../Templates/Components/ComponentsPage";
import { Box, Container, Grid } from "@mui/material";
import HeaderMain from "../../../Componenets/Layout/New/Header";

function Components() {
  return (
    <>
      <HeaderMain />
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          <Box
            component={"img"}
            src="/Dots.svg"
            sx={{ height: "auto", width: "25px", mr: 1 }}
          />
          <h1 style={{ color: "#4b4c4c" }}>لیست کاپوننت ها</h1>
        </Grid>
        <ComponentsPage />
      </Container>
    </>
  );
}

export default Components;
