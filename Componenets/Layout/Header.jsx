import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import {
  BasketIcon,
  ComponentIcon,
  ContactIcon,
  OpenLinkIcon,
  TemplateIcon,
  UserIcon,
} from "../Icons/icon";
import { useRouter } from "next/router";
import { getCookie } from "../../Cookie";

function Header() {
  const [headerItems, setHeaderItems] = useState([
    { text: "کامپوننت ها", url: "/templates", icon: <ComponentIcon /> },
    { text: "تمپلیت ها", url: "/templates", icon: <TemplateIcon /> },
    { text: "ارتباط با ما", url: "/templates", icon: <ContactIcon /> },
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
  useEffect(() => {
    if (getCookie("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [router.pathname]);
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
              <Box component={"img"} src="/next.svg" width={100} />
            </Grid>
            <Button color="inherit" startIcon={<ComponentIcon />}>
              کامپوننت ها
            </Button>
            <Button color="inherit" startIcon={<TemplateIcon />}>
              تمپلیت ها
            </Button>
            <Button color="inherit" startIcon={<ContactIcon />}>
              ارتباط با ما
            </Button>
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
                  <Button
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
                    onClick={() => router.push("/dashboard")}
                  >
                    حساب کاربری
                  </Button>
                  <IconButton
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
              ) : (
                <Button
                  color="inherit"
                  sx={{
                    bgcolor: "#4A6DFF",
                    borderRadius: 5,
                    px: 2,
                    color: "#FFFFFF",
                    "&:hover": {
                      color: "#4A6DFF",
                    },
                  }}
                  startIcon={<UserIcon />}
                  onClick={() => router.push("/login")}
                >
                  ورود
                </Button>
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
