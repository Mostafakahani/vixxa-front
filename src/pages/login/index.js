import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import Login from "../../../Templates/Auth/Login";
import { toast } from "react-toastify";
import { Server } from "../../../config";
import { getCookie, setCookie } from "../../../Cookie";
import { token } from "stylis";
import { useRouter } from "next/router";

function LoginPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (getCookie("token")) {
      router.push("/");
    }
  }, []);
  const router = useRouter();

  const handleLogin = async () => {
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
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setCookie("token", response.data.token);
        toast.success("با موفقیت وارد شدید");
        router.push("/");
      }
    } catch (error) {
      toast.error("دوباره تلاش کنید");
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          height: "80vh",
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
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            py: 4,
            px: 2,
            borderRadius: 4,
          }}
          rowSpacing={2}
        >
          <Grid item>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#3F4264" }}
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
                color: "#3F4264",
                fontSize: { xs: "14px", sm: "1rem" },
              }}
            >
              ورود | ثبت نام
            </Typography>
          </Grid>
          <Login
            userData={userData}
            setUserData={(e) => setUserData(e)}
            handleLogin={handleLogin} // Pass the handleLogin function to the Login component
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
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2">حساب نداری؟</Typography>
              <Button onClick={() => router.push("/register")}>
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
