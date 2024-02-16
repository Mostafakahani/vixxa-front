import { Box, Container, Grid } from "@mui/material";
import TemplatesPage from "../../../Templates/Templates/TemplatesPage";

const Templates = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <Box
          component={"img"}
          src="/icon/Dots.svg"
          sx={{ height: "auto", width: "25px", mr: 1 }}
        />
        <h1 style={{ color: "#4b4c4c" }}>لیست Templates</h1>
      </Grid>
      <TemplatesPage />
    </Container>
  );
};

export default Templates;
