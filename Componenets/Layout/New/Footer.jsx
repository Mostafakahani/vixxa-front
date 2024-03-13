import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
const footerOptions = [
  {
    title: "محصولات",
    subs: [
      { name: "کامپوننت ها", url: "" },
      { name: "تمپلیت ها", url: "" },
      { name: "تحریم شکن", url: "" },
    ],
  },
  {
    title: "ویکسا",
    subs: [
      { name: "ارتباط با ما", url: "" },
      { name: "درباره ما", url: "" },
      { name: "وبلاگ", url: "" },
    ],
  },
  {
    title: "شبکه های اجتماعی",
    subs: [
      { name: "توییتر", url: "" },
      { name: "گیت ها", url: "" },
      { name: "اینستاگرام", url: "" },
    ],
  },
];
function FooterMain() {
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
              sx={{ width: { xs: "60px", sm: "70px" } }}
            />
            <Box
              component={"img"}
              src="/e-namad.svg"
              sx={{ width: { xs: "100px", sm: "110px" } }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FooterMain;
