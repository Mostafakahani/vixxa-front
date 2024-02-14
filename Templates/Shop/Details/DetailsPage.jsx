import { Box, Button, Container, Grid, Typography } from "@mui/material";

function DetailsItemPage() {
  return (
    <>
      <Container disableGutters>
        <Grid container>
          <Grid container item spacing={2}>
            <Grid container item xs={12} sm={6}>
              <Grid container item xs={12}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: 32, fontWeight: "bold" }}
                >
                  tailwindui-keynote
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                <Typography variant="p">
                  اگر میخواهیید یکبار برای همیشه به همه ابهامات قبل شروع برنامه
                  نویسی که در ذهن تون هست پاسخ داده شود، همچنین مسیر اصولی شروع
                  برنامه نویسی وب را برای خودتون ترسیم کنید، نحوه یادگیری اصولی
                  برنامه نویسی را بیاموزید و راه های کسب درآمد از برنامه نویسی
                  را یاد بگیرید؛ پس این دوره برای شماست.{" "}
                </Typography>
              </Grid>
              <Grid container item xs={4}>
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
            </Grid>
            <Grid container item xs={12} sm={6}>
              <Grid container item>
                <Box
                  component={"img"}
                  src="https://vixxa.storage.iran.liara.space/1707681399257-banner.png"
                  sx={{ width: "100%", height: "auto", borderRadius: 4 }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailsItemPage;
