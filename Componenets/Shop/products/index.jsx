import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { CardIcon, DownloadIcon } from "../../Icons/icon";
import ViewDetail from "../../Product/ViewDetail";

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
            mt={6}
            // sx={{ position: "relative", height: "350px" }}
          >
            <Grid
              item
              container
              sx={{
                boxShadow: 0,
                borderRadius: 3,
                bgcolor: "#fff",
                position: "relative",
                height: "320px",
              }}
              p={2}
            >
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  component="img"
                  sx={{
                    borderRadius: 2,
                    width: "250px",
                    height: "160px",
                    objectFit: "cover",
                    position: "relative",
                    bottom: 50,
                    objectPosition: "center",
                    // m: 2,
                  }}
                  src={item?.imageUrl}
                  alt={item?.name}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ position: "relative", bottom: "50px" }}
              >
                <h2
                  style={{
                    textAlign: "left",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: " 100%",
                    whiteSpace: "nowrap",
                    fontSize: 16,
                    direction: "ltr",
                  }}
                >
                  {item?.name}
                </h2>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ position: "relative", bottom: "60px" }}
              >
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: " 100%",
                    whiteSpace: "nowrap",
                    direction: "ltr",
                  }}
                >
                  <ViewDetail html={item?.detail} />
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                container
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                sx={{ position: "relative", bottom: "65px" }}
              >
                <Grid item display={"flex"} alignItems={"center"}>
                  <Typography variant="body2" sx={{ mr: 1 }}>
                    {item?.downloads || "0"}
                  </Typography>
                  <DownloadIcon size="18" />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  borderRadius: 5,
                  border: "1px solid #00000012",
                  position: "relative",
                  bottom: 50,
                }}
              />
              <Grid
                item
                container
                // columnSpacing={1}
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ position: "relative", bottom: "40px" }}
              >
                <Grid item xs={7}>
                  <Button
                    disableElevation
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#5C7CFF",
                      borderRadius: 3,
                      boxShadow: "0px 7px 20px -5px #4469ff",
                      fontSize: 13,
                      px: 2,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "#5c7cffde",
                        boxShadow: "0px 7px 20px -5px #5c7cffde",
                      },
                    }}
                  >
                    دریافت محصول
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={5}
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Grid item display={"flex"} alignItems={"center"}>
                    {/* <CardIcon size="18" /> */}
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {item?.price} تومان
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
