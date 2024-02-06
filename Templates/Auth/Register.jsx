import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function Register({ userData, setUserData, handleRegister }) {
  return (
    <Grid item container rowSpacing={2}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: { xs: "14px", sm: "1rem" } }}>
          نام و نام خانوادگی
        </Typography>
        <TextField
          size="small"
          type="text"
          fullWidth
          value={userData.fullName}
          onChange={(e) =>
            setUserData({ ...userData, fullName: e.target.value })
          }
          InputProps={{ sx: { borderRadius: 3, textAlign: "center" } }}
        />
      </Grid>
      <br />
      <Grid item xs={12}>
        <Typography sx={{ fontSize: { xs: "14px", sm: "1rem" } }}>
          ایمیل
        </Typography>
        <TextField
          size="small"
          type="email"
          fullWidth
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          InputProps={{ sx: { borderRadius: 3, textAlign: "center" } }}
        />
      </Grid>
      <br />
      <Grid item xs={12}>
        <Typography sx={{ fontSize: { xs: "14px", sm: "1rem" } }}>
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
          InputProps={{ sx: { borderRadius: 3, textAlign: "center" } }}
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
            backgroundColor: "#5C7CFF",
            boxShadow: "0px 7px 20px -5px #4469ff",
            fontSize: 13,
            "&:hover": {
              backgroundColor: "#5c7cffde",
              boxShadow: "0px 7px 20px -5px #5c7cffde",
            },
          }}
          onClick={handleRegister}
        >
          ثبت نام در ویکسا
        </Button>
      </Grid>
    </Grid>
  );
}

export default Register;
