import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "@/pages/authContext";
import { AccountCircle } from "@mui/icons-material";
import { BasketIcon, UserIcon } from "../../Icons/icon";

export default function HeaderMain() {
  const theme = useTheme();
  const router = useRouter();
  const { isAuth, inBasket, setAuth } = useAuth();

  const matchDownMd = useMediaQuery(theme.breakpoints.up("xl"));
  const matchDownLg = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuItems = [
    { label: "کامپوننت ها", url: "/components" },
    { label: "تمپلیت ها", url: "/templates" },
    { label: "ارتباط با ما", url: "/" },
  ];
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <Grid container mb={10} sx={{ position: "relative", zIndex: 10000 }}>
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
                {!isAuth ? (
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
                    onClick={() => router.push("/register")}
                  >
                    ثبت نام یا ورود
                  </Button>
                ) : (
                  <>
                    <div>
                      <IconButton size="large">
                        <Badge
                          color="secondary"
                          variant={inBasket ? "dot" : "standard"}
                        >
                          <BasketIcon sx={{ color: "#FFFFFF" }} />
                        </Badge>
                      </IconButton>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        // sx={{ border: "1px solid #1565C0" }}
                      >
                        <UserIcon />
                        {/* <AccountCircle sx={{ color: "#1565C0" }} /> */}
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        sx={{ zIndex: 200000 }}
                        PaperProps={{
                          sx: {
                            bgcolor: "#04112166",
                            color: "#fff",
                            borderRadius: 3,
                            p: 2,
                            border: "1px solid #575A62",
                            backdropFilter: "blur(30px)",
                          },
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem
                          dense
                          onClick={() => router.push("/dashboard")}
                        >
                          داشبورد
                        </MenuItem>
                        <MenuItem
                          dense
                          onClick={() => router.push("/dashboard")}
                        >
                          سفارشات
                        </MenuItem>
                        <MenuItem dense onClick={() => setAuth(false)}>
                          خروج
                        </MenuItem>
                      </Menu>
                    </div>
                  </>
                )}
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
        sx={{ position: "relative", zIndex: 10001 }}
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
            alignItems: "center",
            p: 2,
          }}
          role="presentation"
          onClick={handleDrawerClose}
        >
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Button
                  variant="text"
                  size="small"
                  disableElevation
                  sx={{ borderRadius: 2, color: "#7A8093" }}
                  href={item?.url}
                >
                  {item?.label}
                </Button>
              </Grid>
              {index < menuItems.length - 1 && (
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
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Drawer>
    </>
  );
}
