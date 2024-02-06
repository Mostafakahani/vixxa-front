import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <footer>
          <Grid
            container
            sx={{
              // boxShadow: "0px 9px 120px -15px #00000075",
              px: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 400, fontSize: 12 }}>
             ویکسا | طراحی و توسعه Mostafa
            </Typography>
          </Grid>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
