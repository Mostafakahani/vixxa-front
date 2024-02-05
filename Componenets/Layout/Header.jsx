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
import React, { useState } from "react";
import {
  BasketIcon,
  ComponentIcon,
  ContactIcon,
  OpenLinkIcon,
  TemplateIcon,
  UserIcon,
} from "../Icons/icon";

function Header() {
  const [headerItems, setHeaderItems] = useState([
    { text: "کامپوننت ها", url: "/templates", icon: <ComponentIcon /> },
    { text: "تمپلیت ها", url: "/templates", icon: <TemplateIcon /> },
    { text: "ارتباط با ما", url: "/templates", icon: <ContactIcon /> },
  ]);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Container sx={{ position: "sticky" }} maxWidth={false} disableGutters>
      <header>
        <Grid container sx={{ boxShadow: 5, px: 2 }}>
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
            <Grid item md={2}>
              <Button startIcon={<ComponentIcon />}>کامپوننت ها</Button>
            </Grid>
            <Grid item md={2}>
              <Button startIcon={<TemplateIcon />}>تمپلیت ها</Button>
            </Grid>
            <Grid item md={2}>
              <Button startIcon={<ContactIcon />}>ارتباط با ما</Button>
            </Grid>
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
              <Button startIcon={<UserIcon />}>ورود</Button>
            </Grid>
          </Grid>
        </Grid>
      </header>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          role="presentation"
          onClick={handleDrawerClose}
        >
          {headerItems.map((item, index) => (
            <Button
              key={index}
              startIcon={item.icon}
              href={item.url}
              sx={{
                textTransform: "none",
                display: "flex",
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
