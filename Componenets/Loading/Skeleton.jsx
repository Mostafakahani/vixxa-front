import React from "react";
import { Grid, Skeleton } from "@mui/material";

const SkeletonComponent = ({ count }) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <Grid
        item
        container
        columnSpacing={2}
        rowSpacing={2}
        xs={12}
        sm={6}
        md={4}
        key={i}
      >
        <Grid item container rowSpacing={1}>
          <Grid item xs={12}>
            <Skeleton
              variant="rounded"
              height={150}
              sx={{ width: "100%", borderRadius: 3 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="text" sx={{ width: "100%", fontSize: "1rem" }} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton
              variant="text"
              sx={{ width: "100%", fontSize: "0.5rem" }}
            />
          </Grid>
        </Grid>
        <Grid container item columnSpacing={2}>
          <Grid container item xs={6}>
            <Skeleton
              variant="rectangular"
              height={35}
              sx={{ width: "100%", borderRadius: 3 }}
            />
          </Grid>
          <Grid container item xs={6}>
            <Skeleton
              variant="text"
              sx={{ width: "100%", fontSize: "0.5rem" }}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={3} display={"flex"} justifyContent={"center"}>
      {skeletons}
    </Grid>
  );
};

export default SkeletonComponent;
