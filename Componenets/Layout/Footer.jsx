import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        // position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#031935", // Adjust as needed
        zIndex: 1000, // Adjust as needed
        padding: "10px 0",
      }}
    >
      <Container disableGutters>
        <Grid container justifyContent="center" alignItems="center">
          <a
            referrerPolicy="origin"
            target="_blank"
            href="https://trustseal.enamad.ir/?id=459381&Code=a0WmTJGMv4OXj2kc7EhFe35pjxySWEuh"
          >
            <img
              referrerPolicy="origin"
              src="https://trustseal.enamad.ir/logo.aspx?id=459381&Code=a0WmTJGMv4OXj2kc7EhFe35pjxySWEuh"
              alt=""
              style={{ cursor: "pointer" }}
              code="a0WmTJGMv4OXj2kc7EhFe35pjxySWEuh"
            />
          </a>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Typography
            variant="body2"
            sx={{ fontWeight: 400, fontSize: 12, color: "#B0B1B6" }}
          >
            ویکسا | طراحی و توسعه Mostafa
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
