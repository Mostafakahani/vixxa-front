import { useTheme } from "@emotion/react";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function MainItems({ data }) {
  const theme = useTheme();
  const router = useRouter();

  const matchDownMd = useMediaQuery(theme.breakpoints.up("xl"));
  const matchDownLg = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      item
      columnSpacing={{ xs: 0, sm: 2 }}
      rowSpacing={{ xs: 5, sm: 0 }}
    >
      {data.map((price, index) => (
        <Grid container item xs={12} sm={4} key={index}>
          <Grid
            container
            item
            rowSpacing={2}
            xs={12}
            sx={{
              bgcolor: "#00000017",
              borderRadius: 4,
              border: "1px solid #ffffff1f",
              p: 3,
            }}
          >
            <Grid
              container
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box component={"img"} src={price.iconSrc} />
            </Grid>
            <Grid container item xs={12}>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 24,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {price.title}
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              <Typography
                variant="body2"
                sx={{
                  color: "#7A8093",
                  fontWeight: 300,
                  fontSize: 13,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {price.description}
              </Typography>
              {!matchDownLg && (
                <Box
                  component={"img"}
                  src={price.imageSrc}
                  width={"100%"}
                  sx={{
                    position: "relative",
                    top: 24,
                    filter: "brightness(0.5)",
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default MainItems;
