import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import {
  BasketIcon,
  ComponentIcon,
  ContactIcon,
  ExitIcon,
  OpenLinkIcon,
  TemplateIcon,
  UserIcon,
} from "../Icons/icon";
import { useRouter } from "next/router";
import { eraseCookie, getCookie } from "../../Cookie";

function Header() {
  const [headerItems, setHeaderItems] = useState([
    { text: "کامپوننت ها", url: "/componenets", icon: <ComponentIcon /> },
    { text: "تمپلیت ها", url: "/templates", icon: <TemplateIcon /> },
    { text: "ارتباط با ما", url: "/contact", icon: <ContactIcon /> },
  ]);
  const [isLoginItem, setIsLoginItem] = useState([
    { text: "داشبورد", url: "/dashboard", icon: <ComponentIcon /> },
    { text: "سفارشات", url: "/orders", icon: <TemplateIcon /> },
    { text: "خروج", url: "/logout", icon: <ExitIcon /> },
  ]);

  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const logOut = () => {
    eraseCookie("token");
    router.push("/login");
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    if (getCookie("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [router.route]);
  return (
    <Container sx={{ position: "sticky" }} maxWidth={false} disableGutters>
      <header>
        <Grid
          container
          sx={{ boxShadow: "0px 9px 120px -15px #00000075", px: 2 }}
        >
          {/* Mobile Menu Button */}
          <Grid item xs={6} sx={{ display: { md: "none", xs: "block" } }}>
            <IconButton size="large" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            container
            md={10}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              maxWidth: "100px",
            }}
          >
            <Grid item md={2}>
              <Box
                component={"img"}
                src="/next.svg"
                width={100}
                sx={{ cursor: "pointer" }}
                onClick={() => router.push("/")}
              />
            </Grid>
            {headerItems.map((x) => (
              <Button
                key={x.text}
                color="inherit"
                startIcon={x.icon}
                onClick={() => router.push(x.url)}
              >
                {x.text}
              </Button>
            ))}
          </Grid>
          <Grid
            item
            container
            xs={6}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <Grid item>
              <IconButton size="large">
                <BasketIcon />
              </IconButton>
            </Grid>
            <Grid item>
              {isLogin ? (
                <>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <>
                        {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
                        <Button
                          onClick={handleOpenUserMenu}
                          color="inherit"
                          sx={{
                            bgcolor: "#4A6DFF",
                            borderRadius: 5,
                            px: 2,
                            color: "#FFFFFF",
                            "&:hover": {
                              color: "#4A6DFF",
                            },
                            display: { xs: "none", lg: "flex" },
                          }}
                          startIcon={<UserIcon />}
                        >
                          حساب کاربری
                        </Button>
                        <IconButton
                          onClick={handleOpenUserMenu}
                          size="small"
                          sx={{
                            display: { xs: "flex", lg: "none" },
                            bgcolor: "#4A6DFF",
                            color: "#FFFFFF",
                            "&:hover": {
                              color: "#4A6DFF",
                            },
                          }}
                        >
                          <UserIcon />
                        </IconButton>
                      </>
                      {/* </IconButton> */}
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {isLoginItem.map((setting) => (
                        <MenuItem
                          key={setting.text}
                          onClick={() => {
                            handleCloseUserMenu();
                            logOut();
                          }}
                          sx={{ display: "flex" }}
                        >
                          {setting.icon}
                          <Typography sx={{ ml: 1 }}>{setting.text}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </>
              ) : (
                <>
                  <>
                    <Button
                      color="inherit"
                      sx={{
                        bgcolor: "#10b981",
                        borderRadius: 5,
                        px: 2,
                        color: "#FFFFFF",
                        "&:hover": {
                          color: "#10b981",
                        },
                        display: { xs: "none", lg: "flex" },
                      }}
                      startIcon={<UserIcon />}
                      onClick={() => router.push("/login")}
                    >
                      ورود
                    </Button>
                    <IconButton
                      onClick={() => router.push("/login")}
                      size="small"
                      sx={{
                        display: { xs: "flex", lg: "none" },
                        bgcolor: "#10b981",
                        color: "#FFFFFF",
                        "&:hover": {
                          color: "#10b981",
                        },
                        display: { xs: "flex", lg: "none" },
                      }}
                    >
                      <UserIcon />
                    </IconButton>
                  </>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </header>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
          role="presentation"
          onClick={handleDrawerClose}
        >
          <Box component={"img"} src="/next.svg" width={100} sx={{ py: 1 }} />

          {headerItems.map((item, index) => (
            <Button
              fullWidth
              key={index}
              startIcon={item.icon}
              href={item.url}
              sx={{
                textTransform: "none",
                display: "flex",
                py: 1,
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
}

export default Header;
