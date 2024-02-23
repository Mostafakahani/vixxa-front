import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import Login from "../../../Templates/Auth/Login";
import { toast } from "react-toastify";
import { Server, ServerDeveloperMode } from "../../../config";
import { getCookie, setCookie } from "../../../Cookie";
import { token } from "stylis";
import { useRouter } from "next/router";
import { unstable_noStore as noStore } from "next/cache";
import Cookies from "js-cookie";

function LoginPage() {
  noStore();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (getCookie("token")) {
      router.push("/");
    }
  }, [router]);
  const handleLogin = async () => {
    setLoading(true);

    try {
      const token = getCookie("token");
      if (token) {
        toast.success("شما لاگین شده اید");
        router.push("/");
        return;
      }

      const response = await axios.post(
        `${Server.URL}/auth/login`,
        {
          email: userData.email,
          password: userData.password,
        },
        {
          // withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        if (ServerDeveloperMode) {
          Cookies.set("token", response.data.token);
        } else {
          Cookies.set("token", response.data.token, { domain: ".vixxa.ir" });
        }
        // setCookie("token", response.data.token, 3600);
        // console.log(response.data.token);
        toast.success("با موفقیت وارد شدید");
        setLoading(false);

        router.push("/");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = Array.isArray(error.response.data.errors)
          ? error.response.data.errors.map((x) => x.msg)
          : ["Unknown errors"];
        toast.error(errors.join(" - "));
        setLoading(false);
      }
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        setLoading(false);
        toast.error("مشکلی پیش آمده لطفا بعدا تلاش کنید");
        console.error("Login failed", error);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          height: "84vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          maxWidth={"xs"}
          item
          sx={{
            bgcolor: "#031935",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 2,
            borderRadius: 4,
          }}
          rowSpacing={2}
        >
          <Grid item>
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
              ورود
            </Typography>
          </Grid>
          <Login
            userData={userData}
            setUserData={(e) => setUserData(e)}
            handleLogin={handleLogin}
            loading={loading}
            setLoading={(e) => setLoading(e)}
          />
          <Grid
            item
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default LoginPage;
