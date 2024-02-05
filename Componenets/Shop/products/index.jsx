import { Box, Button, Grid } from "@mui/material";
import React from "react";

function Products({ items }) {
  return (
    <>
      <Grid item container columnSpacing={2} rowSpacing={{ xs: 2, sm: 2 }}>
        {items.map((item, index) => (
          <Grid
            item
            container
            key={index}
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item container sx={{ boxShadow: 2, borderRadius: 3 }}>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  component="img"
                  sx={{ borderRadius: 2 }}
                  src={item.image}
                  alt={item.title}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <h1>{item.title}</h1>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <p>{item.description}</p>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <p>{item.downloads}</p>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Button fullWidth variant="contained">
                  Buy
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
