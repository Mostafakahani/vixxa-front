import { Box, Button, Container, Divider, Drawer, Grid } from "@mui/material";
import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";

export default function HeaderMain() {
  const theme = useTheme();
  const router = useRouter();

  const matchDownMd = useMediaQuery(theme.breakpoints.up("xl"));
  const matchDownLg = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <Grid container mb={10}>
        <Grid container item>
          <Grid
            container
            item
            sx={{
              bgcolor: "#202124",
              p: 2,
              borderRadius: 3,
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0px 15px 50px -5px #00000029",
            }}
          >
            <Grid
              container
              item
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {!matchDownMd && (
                <Grid
                  item
                  onClick={handleDrawerOpen}
                  sx={{ cursor: "pointer" }}
                >
                  <Box component={"img"} src="/menu.svg" width={20} />
                  {/* Menu Icon */}
                </Grid>
              )}
              {matchDownMd && (
                <Grid item>
                  <Box
                    component={"img"}
                    src="/logo-main.svg"
                    width={130}
                    height={"auto"}
                  />
                </Grid>
              )}
              {matchDownMd && (
                <Grid
                  container
                  item
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "#575A62",
                      borderRightWidth: 1,
                      textAlign: "center",
                      ml: 3,
                      mr: 1,
                    }}
                  />
                  <Grid item>
                    <Button
                      variant="text"
                      size="medium"
                      disableElevation
                      sx={{ borderRadius: 2, py: 1, px: 3, color: "#7A8093" }}
                    >
                      کامپوننت ها
                    </Button>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "#575A62",
                      borderRightWidth: 1,
                      textAlign: "center",
                      mx: 1,
                    }}
                  />
                  <Grid item>
                    <Button
                      variant="text"
                      size="medium"
                      disableElevation
                      sx={{ borderRadius: 2, py: 1, px: 3, color: "#7A8093" }}
                    >
                      تمپلیت ها
                    </Button>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "#575A62",
                      borderRightWidth: 1,
                      textAlign: "center",
                      mx: 1,
                    }}
                  />
                  <Grid item>
                    <Button
                      variant="text"
                      size="medium"
                      disableElevation
                      sx={{ borderRadius: 2, py: 1, px: 3, color: "#7A8093" }}
                    >
                      ارتباط با ما
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
            {!matchDownLg && !matchDownMd && (
              <Grid item>
                <Box
                  component={"img"}
                  src="/logo-main.svg"
                  width={130}
                  height={"auto"}
                />
              </Grid>
            )}
            <Grid
              container
              item
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  disableElevation
                  //   fullWidth
                  sx={{
                    borderRadius: 2,
                    py: 1,
                    px: 3,
                    fontSize: { xs: 12, sm: 12 },
                  }}
                >
                  ثبت نام
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            bgcolor: "#171b2c",
          },
        }}
      >
        {matchDownLg && !matchDownMd && (
          <Grid item mt={2}>
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                component={"img"}
                src="/logo-main.svg"
                width={110}
                height={"auto"}
              />
            </Grid>
          </Grid>
        )}
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
          role="presentation"
          onClick={handleDrawerClose}
        >
          <Grid item>
            <Button
              variant="text"
              size="small"
              disableElevation
              sx={{ borderRadius: 2, color: "#7A8093" }}
            >
              کامپوننت ها
            </Button>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "#575A62",
              borderRightWidth: 1,
              textAlign: "center",
              mx: 1,
            }}
          />

          <Grid item>
            <Button
              variant="text"
              size="small"
              disableElevation
              sx={{ borderRadius: 2, color: "#7A8093" }}
            >
              تمپلیت ها
            </Button>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "#575A62",
              borderRightWidth: 1,
              textAlign: "center",
              mx: 1,
            }}
          />
          <Grid item>
            <Button
              variant="text"
              size="small"
              disableElevation
              sx={{ borderRadius: 2, color: "#7A8093" }}
            >
              ارتباط با ما
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
