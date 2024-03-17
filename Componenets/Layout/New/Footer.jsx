import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const footerOptions = [
  {
    title: "محصولات",
    subs: [
      { name: "کامپوننت ها", url: "/components" },
      { name: "تمپلیت ها", url: "/templates" },
      // { name: "رفع محدودیت", url: "/vpn" },
    ],
  },
  {
    title: "ویکسا",
    subs: [
      { name: "ارتباط با ما", url: "/" },
      { name: "درباره ما", url: "/" },
      { name: "وبلاگ", url: "/" },
    ],
  },
  {
    title: "شبکه های اجتماعی",
    subs: [
      { name: "توییتر", url: "/" },
      { name: "گیت ها", url: "/" },
      { name: "اینستاگرام", url: "/" },
    ],
  },
];
function FooterMain() {
  const router = useRouter();
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ mt: 20, mx: { xs: 0, sm: 2, md: 10 } }}
    >
      <Grid
        container
        rowSpacing={8}
        sx={{
          bgcolor: "#0c0e15d9",
          borderRadius: 4,
          border: "1px solid #ffffff1f",
          px: 5,
          pb: 5,
        }}
      >
        <Grid container item rowSpacing={{ xs: 10, sm: 1 }}>
          {footerOptions.map((x, index) => (
            <Grid
              container
              item
              xs={12}
              sm={4}
              key={index}
              rowSpacing={{ xs: 2, sm: 1 }}
              //   columnSpacing={3}
            >
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
                {x?.title}
              </Typography>
              {x?.subs?.map((z, index) => (
                <Grid item key={index} xs={12}>
                  <Link
                    href={z?.url}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      // justifyContent: "space-evenly",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/dot-blue.svg"
                      sx={{ width: "auto", mr: 1 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "#7A8093", fontWeight: 200 }}
                    >
                      {z?.name}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={12} display={"flex"} justifyContent={"center"}>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              borderColor: "#575A62",
              width: "100%",
              borderRightWidth: 1,
              textAlign: "center",
              //   width: "90%",
            }}
          />
        </Grid>
        <Grid container item xs={12} rowSpacing={{ xs: 5, sm: 0 }}>
          <Grid
            item
            xs={12}
            sm={6}
            display={"flex"}
            // justifyContent={"center"}
            alignItems="center"
          >
            <Box
              component={"img"}
              src="/logo-big.svg"
              sx={{ width: { xs: "100%", sm: "50%" } }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            alignItems="center"
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              component={"img"}
              src="/zp-1.svg"
              sx={{ width: { xs: "60px", sm: "70px" }, cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.zarinpal.com/trustPage/vixxa.ir",
                  "_blank"
                )
              }
            />
            <Grid
              container
              item
              justifyContent="center"
              alignItems="center"
              xs={2}
            >
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
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FooterMain;
