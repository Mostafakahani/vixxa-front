import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import Login from "../../../Templates/Auth/Login";
import { toast } from "react-toastify";
import { Server } from "../../../config";
import { getCookie, setCookie } from "../../../Cookie";
import { token } from "stylis";
import { useRouter } from "next/router";
import Register from "../../../Templates/Auth/Register";

function RegisterPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const router = useRouter();
  useEffect(() => {
    if (getCookie("token")) {
      router.push("/");
    }
  }, [router]);

  const handleRegister = async () => {
    try {
      const token = getCookie("token");
      if (token) {
        toast.success("شما لاگین شده اید");
        router.push("/");
        return;
      }

      const response = await axios.post(
        `${Server.URL}/auth/register`,
        {
          email: userData.email,
          password: userData.password,
          fullName: userData.fullName,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // setCookie("token", response.data.token);
        toast.success("اکانت با موفقیت ساخته شد");
        router.push("/login");
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
            bgcolor: "#fff",
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
              ثبت نام
            </Typography>
          </Grid>
          <Register
            userData={userData}
            setUserData={(e) => setUserData(e)}
            handleRegister={handleRegister} // Pass the handleLogin function to the Login component
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
              <Typography variant="body2">حساب داری؟</Typography>
              <Button onClick={() => router.push("/login")}>
                برای ورود به حساب کاربری کلیک کنید
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RegisterPage;
