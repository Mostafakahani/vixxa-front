import { Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios"; // Import Axios
import Login from "../../../Templates/Auth/Login";
import { toast } from "react-toastify";
import { Server } from "../../../config";

function LoginPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
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
        toast.success("با موفقیت وارد شدید");
      }
      //   console.log("با موفقیت وارد شدید", response.data);
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
        </Grid>
      </Container>
    </>
  );
}

export default LoginPage;
