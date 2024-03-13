import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import MainItems from "../../../Templates/Landing/MainItems/MainItems";
const prices = [
  {
    iconSrc: "/price-icon.svg",
    title: "قیمت",
    description:
      "ویکسا در ارزان ترین حالت ممکن، قالب های مورد نظر شما را ارایه میدهد.",
    imageSrc: "/price-image-icon.svg",
  },
  {
    iconSrc: "/privcy-icon.svg",
    title: "حفظ حریم خصوصی",
    description:
      "اولویت ویکـــسا امنیت شماست و برای حفظ حریم خصوصی قوانین دقیقی داره",
    imageSrc: "/code-privcy-image.svg",
  },
  {
    iconSrc: "/peyment-icon.svg",
    title: "پرداخت",
    description:
      "به سادگی از درگاه های ایرانی خرید خود را به ارزش رایج کشور می توانید انجام دهید.",
    imageSrc: "/money-image.svg",
  },
];

function MainPage() {
  return (
    <Grid container item rowSpacing={10}>
      <Grid container item xs={12} rowSpacing={5}>
        <Grid container item xs={12}>
          <Typography
            variant="h1"
            sx={{
              width: "100%",
              maxWidth: "100%",
              textAlign: "center",
              color: "#fff",
              fontSize: { xs: 19, sm: 32, md: 52 },
              fontWeight: 600,
            }}
          >
            ویکـــــــــــــــــــــــــسا
          </Typography>
          <Typography
            variant="h1"
            sx={{
              width: "100%",
              maxWidth: "100%",
              textAlign: "center",
              color: "#fff",
              fontSize: { xs: 10, sm: 15, md: 24 },
            }}
          >
            راه‌اندازی سریع و آسان وبسایت‌هایی جذاب با استفاده از Tailwind CSS
          </Typography>
        </Grid>
        <Grid container item>
          <Grid
            item
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                maxWidth: { xs: "100%" },
                color: "#fff",
                fontSize: { xs: 7, sm: 11, md: 13 },
                fontWeight: 200,
              }}
            >
              + ۱۰۰ خرید موفق
            </Typography>
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
            <Box component={"img"} src="/check.svg" width={15} sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              sx={{
                maxWidth: { xs: "100%" },
                color: "#fff",
                fontSize: { xs: 7, sm: 11, md: 13 },
                fontWeight: 200,
              }}
            >
              آخرین به‌روزرسانی‌های قالب‌های آماده از وب‌سایت رسمی Tailwind CSS
            </Typography>
          </Grid>
          <Grid
            mt={4}
            container
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src="/main-Products.svg"
              sx={{ width: { xs: "100%", sm: "90%" } }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          container
          xs={12}
          sm={7}
          md={5}
          rowSpacing={2}
          sx={{
            borderRadius: 4,
            border: "1px solid #ffffff1f",
            p: 2,
            pb: 3,
            // mx: ,
            bgcolor: "transparent",
          }}
        >
          <Grid container item>
            <Box component={"img"} src="/logo-small.svg" width={30} />
            <Typography variant="body2" sx={{ color: "#fff" }}>
              ویکسا چی هست؟
            </Typography>
          </Grid>
          <Grid container item>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                borderColor: "#575A62",
                width: "100%",
                borderRightWidth: 1,
                textAlign: "center",
              }}
            />
          </Grid>
          <Grid container item>
            <Typography
              variant="body2"
              sx={{ color: "#7A8093", fontWeight: 300 }}
            >
              ویکسا، تمپلیت ها و کامپوننت هایی که با استفاده از Tailwind CSS کد
              نویسی شده اند رو بصورت فایل و آخرین آپدیت سازنده از وب سایت
              تیلویند با قیمت بسیار پایین برای شما ارایه میده.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid container item xs={12}>
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              maxWidth: "100%",
              textAlign: "center",
              color: "#fff",
              fontSize: { xs: 19, sm: 32, md: 52 },
              fontWeight: 600,
              my: 10,
            }}
          >
            چرا از ویکــــسا خرید کنم؟
          </Typography>
        </Grid>
      </Grid>
      <MainItems data={prices} />
    </Grid>
  );
}

export default MainPage;
