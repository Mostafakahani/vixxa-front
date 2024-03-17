import { Grid } from "@mui/material";
import React from "react";
import UserPanel from "../../../../Templates/Dashboard/User/UserPanel";
import HeaderMain from "../../../../Componenets/Layout/New/Header";

function UserPanelPage() {
  return (
    <>
      <HeaderMain />
      <Grid container sx={{ height: "70vh" }}>
        {/* <Grid container sx={{ mb: 15}}> */}
        <UserPanel />
        {/* </Grid> */}
      </Grid>
    </>
  );
}

export default UserPanelPage;
