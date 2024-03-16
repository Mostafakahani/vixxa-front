import { Button, Container, Grid, Typography } from "@mui/material";
import Register from "./Register";
import { useRouter } from "next/router";
import Login from "./Login";

function AuthPage({
  userData,
  setUserData,
  loading,
  setLoading,
  handleRegister,
  handleLogin,
  isLogin,
}) {
  const router = useRouter();
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          height: "max-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "#202124",
          borderRadius: 4,
        }}
      >
        <Grid
          container
          //   maxWidth={"xs"}
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            m: 2,
          }}
          rowSpacing={2}
        >
          <Grid item onClick={() => router.push("/")}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#dbdbdb" }}
            >
              ویکسا
            </Typography>
          </Grid>
          <Grid
            item
            container
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Typography
              variant="span"
              sx={{
                fontWeight: "bold",
                color: "#cfcfcf",
                fontSize: { xs: "14px", sm: "1rem" },
              }}
            >
              {isLogin ? "ورود" : "ثبت نام"}
            </Typography>
          </Grid>
          {isLogin ? (
            <Login
              userData={userData}
              setUserData={(e) => setUserData(e)}
              handleLogin={handleLogin}
              loading={loading}
              setLoading={(e) => setLoading(e)}
            />
          ) : (
            <Register
              userData={userData}
              setUserData={(e) => setUserData(e)}
              handleRegister={handleRegister}
              loading={loading}
              setLoading={(e) => setLoading(e)}
            />
          )}
          <Grid
            item
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!isLogin ? (
              <Grid
                item
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#cfcfcf", fontSize: { xs: 12, sm: 13 } }}
                >
                  حساب داری؟
                </Typography>
                <Button
                  onClick={() => router.push("/login")}
                  sx={{ fontSize: { xs: 12, sm: 13 } }}
                >
                  برای ورود به حساب کاربری کلیک کنید
                </Button>
              </Grid>
            ) : (
              <Grid
                item
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#cfcfcf", fontSize: { xs: 12, sm: 13 } }}
                >
                  حساب نداری؟
                </Typography>
                <Button
                  onClick={() => router.push("/register")}
                  sx={{ fontSize: { xs: 12, sm: 13 } }}
                >
                  برای ساخت حساب کاربری کلیک کنید
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AuthPage;
