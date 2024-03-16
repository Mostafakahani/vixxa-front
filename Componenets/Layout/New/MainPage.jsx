import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import MainItems from "../../../Templates/Landing/MainItems/MainItems";
import { motion } from "framer-motion";

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
          <motion.div
            style={{
              width: "100%",
              maxWidth: "100%",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 50 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Move to top
            transition={{ duration: 0.5 }} // Adjust timing
            // initial="hidden" // Start from below
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
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
          </motion.div>
        </Grid>
        <Grid container item>
          <motion.div
            style={{
              width: "100%",
              maxWidth: "100%",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 50 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Move to top
            transition={{ duration: 0.5, delay: 1 }} // Adjust timing
          >
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
              <Box
                component={"img"}
                src="/check.svg"
                width={15}
                sx={{ mr: 1 }}
              />
              <Typography
                variant="body2"
                sx={{
                  maxWidth: { xs: "100%" },
                  color: "#fff",
                  fontSize: { xs: 7, sm: 11, md: 13 },
                  fontWeight: 200,
                }}
              >
                آخرین به‌روزرسانی‌های قالب‌های آماده از وب‌سایت رسمی Tailwind
                CSS
              </Typography>
            </Grid>
          </motion.div>
          <motion.div
            style={{
              width: "100%",
              maxWidth: "100%",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 50 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Move to top
            transition={{ duration: 0.5, delay: 1.2 }} // Adjust timing
          >
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
          </motion.div>
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
          // xs={12}
          // sm={7}
          // md={5}
          rowSpacing={2}
          sx={{
            borderRadius: 4,
            border: "1px solid #ffffff1f",
            p: 3,
            pb: 3,
            // mx: ,
            bgcolor: "transparent",
            width: "550px",
          }}
        >
          <Grid container item>
            <motion.div
              style={
                {
                  // custom styles here
                }
              }
              initial={{ opacity: 0, scale: 0 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Box component={"img"} src="/logo-small.svg" width={30} />
            </motion.div>
            <Typography variant="p" sx={{ color: "#fff" }}>
              <motion.div
                style={
                  {
                    // custom styles here
                  }
                }
                // initial={{ opacity: 0, y: 50 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                ویکسا چی هست؟
              </motion.div>
            </Typography>
          </Grid>
          <Grid container item>
            <motion.div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // whileInView="visible"
              // viewport={{ once: false }}
              // transition={{ duration: 1 }}
              // variants={{
              //   visible: { opacity: 1 },
              //   hidden: { opacity: 0 },
              // }}
            >
              <motion.div
                style={{
                  background: "linear-gradient(to right, transparent, #7A8093)",
                  width: "100%",
                  height: 1,
                  overflow: "hidden",
                }}
                whileInView="visible"
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { width: "100%" },
                  hidden: { width: "0%" },
                }}
              >
                <Divider orientation="horizontal" />
              </motion.div>
            </motion.div>
          </Grid>

          <Grid container item>
            <Typography variant="p" sx={{ color: "#7A8093", fontWeight: 300 }}>
              <motion.div
                style={
                  {
                    // width: "100%",
                    // maxWidth: "100%",
                    // textAlign: "center",
                  }
                }
                initial={{ opacity: 0, y: 50 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                ویکسا، تمپلیت ها و کامپوننت هایی که با استفاده از Tailwind CSS
                کد نویسی شده اند رو بصورت فایل و آخرین آپدیت سازنده از وب سایت
                تیلویند با قیمت بسیار پایین برای شما ارایه میده.
              </motion.div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid container item xs={12}>
          <motion.div
            style={{
              width: "100%",
              maxWidth: "100%",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 20 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Move to top
            transition={{
              repeat: 1,
              duration: 2,
              // repeatType: "reverse",
            }}
            // initial="hidden" // Start from below
            whileInView="visible"
            viewport={{ once: false }}
            // variants={{
            //   visible: { opacity: 1, y: 50 },
            //   hidden: { opacity: 0, y: 0 },
            // }}

            // initial={{ opacity: 0.5 }}
            // animate={{

            //   // Putting values into an array tells framer these are keyframes
            //   opacity: [0.5, 0.8],

            //   // Moved transition to be specific to the `animate` stage
            //   transition: {
            //     repeat: Infinity,
            //     repeatType: "reverse",
            //   },
            // }}
            // exit={{ opacity: 0, y: 50 }}
          >
            <Typography
              variant="h2"
              sx={{
                width: "100%",
                maxWidth: "100%",
                textAlign: "center",
                color: "#fff",
                fontSize: { xs: 20, sm: 32, md: 52 },
                fontWeight: 600,
                my: 10,
              }}
            >
              چرا از ویکــــسا خرید کنم؟
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
      <MainItems data={prices} />
    </Grid>
  );
}

export default MainPage;
