import { Grid } from "@mui/material";
import React from "react";
import UserPanel from "../../../../Templates/Dashboard/User/UserPanel";

function UserPanelPage() {
  return (
    <>
      <Grid container sx={{ height: "max-content" }}>
        <Grid container sx={{ mb: 15}}>
          <UserPanel />
        </Grid>
      </Grid>
    </>
  );
}

export default UserPanelPage;
