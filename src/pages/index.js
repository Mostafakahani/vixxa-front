import { Chip, Container, Divider, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid item container>
        <Container disableGutters>
          <Grid container item>
            <Grid container item>
              <Grid container item>
                <Divider
                  sx={{
                    width: "100%",
                    "&.MuiDivider-root": { borderColor: "red" },
                  }}
                >
                  CENTER
                </Divider>
              </Grid>
              <Typography variant="h1" sx={{ color: "#fff", fontWeight: 600 }}>
                ایده بعدی خود را به راحتی و سریعتر بسازید
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
