import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function Login({ userData, setUserData, handleLogin, loading }) {
  const [errors, setErrors] = useState({ email: false, password: false });

  const validateForm = () => {
    const newErrors = {
      email: userData.email.trim() === "",
      password: userData.password.trim().length < 6,
    };
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleLogin();
    }
  };

  return (
    <Grid item container rowSpacing={2}>
      <Grid item xs={12}>
        <Typography
          sx={{ fontSize: { xs: "14px", sm: "1rem" }, color: "#cfcfcf" }}
        >
          ایمیل
        </Typography>
        <TextField
          size="small"
          type="email"
          fullWidth
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          InputProps={{
            sx: {
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: "#292b31",
              border: "1px solid #575A62",
              color: "#fff",
              mt: 1,
            },
          }}
          error={errors.email}
          helperText={errors.email ? "ایمیل را وارد کنید" : ""}
        />
      </Grid>
      <br />
      <Grid item xs={12}>
        <Typography
          sx={{ fontSize: { xs: "14px", sm: "1rem" }, color: "#cfcfcf" }}
        >
          رمز عبور
        </Typography>
        <TextField
          size="small"
          type="password"
          fullWidth
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          InputProps={{
            sx: {
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: "#292b31",
              border: "1px solid #575A62",
              color: "#fff",
              mt: 1,
            },
          }}
          error={errors.password}
          helperText={
            errors.password ? "رمز عبور باید حداقل شش کاراکتر داشته باشد" : ""
          }
        />
      </Grid>
      <br />
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={{
            borderRadius: 3,
            p: 1,
            backgroundColor: "#276EF6",
            boxShadow: "0px 7px 20px -5px #4469ff",
            fontSize: 13,
            "&:hover": {
              backgroundColor: "#276EF6de",
              boxShadow: "0px 7px 20px -5px #276EF6de",
            },
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={30} variant="indeterminate" />
          ) : (
            "ورود به حساب کاربری"
          )}
        </Button>
      </Grid>
    </Grid>
  );
}

export default Login;
