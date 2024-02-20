import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { CardIcon } from "../../../Componenets/Icons/icon";

function DetailsItemPage({ data }) {
  return (
    <>
      <Container disableGutters>
        <Grid container mt={5}>
          <Grid
            container
            item
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              flexWrap: { xs: "nowrap", md: "" },
            }}
          >
            <Grid container item xs={12} md={6} rowSpacing={3}>
              <Grid container item xs={12}>
                <h1 style={{ color: "#fff" }}>{data?.product.name}</h1>
              </Grid>
              <Grid container item xs={12}>
                <p style={{ color: "#F5F5F6" }}>
                  اگر میخواهیید یکبار برای همیشه به همه ابهامات قبل شروع برنامه
                  نویسی که در ذهن تون هست پاسخ داده شود، همچنین مسیر اصولی شروع
                  برنامه نویسی وب را برای خودتون ترسیم کنید، نحوه یادگیری اصولی
                  برنامه نویسی را بیاموزید و راه های کسب درآمد از برنامه نویسی
                  را یاد بگیرید؛ پس این دوره برای شماست.
                </p>
              </Grid>
              <Grid
                container
                item
                md={12}
                xs={12}
                justifyContent={"space-between"}
              >
                <Grid item display={"flex"} alignItems={"center"}>
                  <Button
                    disableElevation
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#5C7CFF",
                      borderRadius: 3,
                      boxShadow: "0px 7px 20px -5px #4469ff",
                      fontSize: 13,
                      // px: 2,
                      // py: 1,
                      "&:hover": {
                        backgroundColor: "#5c7cffde",
                        boxShadow: "0px 7px 20px -5px #5c7cffde",
                      },
                    }}
                  >
                    دریافت محصول
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  container
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Grid
                    container
                    item
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                  >
                    <CardIcon size="18" />
                    <Typography
                      variant="body2"
                      sx={{ ml: 1, color: "#F5F5F6" }}
                    >
                      {data?.product.price} تومان
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Grid container item>
                <img
                  src={data?.image?.url}
                  alt="نمونه عکس"
                  style={{ width: "100%", height: "auto", borderRadius: 4 }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item display={"flex"} justifyContent={"center"}>
            <Grid
              container
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
            >
              <div
                style={{ width: "100%", color: "#F5F5F6" }}
                dangerouslySetInnerHTML={{
                  __html: data?.product.detail,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailsItemPage;
