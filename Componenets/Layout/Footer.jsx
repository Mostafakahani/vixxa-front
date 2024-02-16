import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff", // Adjust as needed
        zIndex: 1000, // Adjust as needed
        padding: "10px 0",
      }}
    >
      <Container disableGutters>
        <Grid container justifyContent="center" alignItems="center">
          <Typography variant="body2" sx={{ fontWeight: 400, fontSize: 12 }}>
            ویکسا | طراحی و توسعه Mostafa
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
