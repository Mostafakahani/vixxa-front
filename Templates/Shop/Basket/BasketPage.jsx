import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function BasketPage({ data, addToBasket, removeFromBasket }) {
  if (!data || data.length === 0) {
    return (
      <Container sx={{ height: "77vh" }}>
        <Typography variant="h5" gutterBottom>
          سبد خرید شما خالی می‌باشد.
        </Typography>
        <Button variant="contained" color="primary">
          برو به محصولات
        </Button>
      </Container>
    );
  }

  if (!Array.isArray(data)) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ height: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        سبد خرید
      </Typography>
      {data.map((item) => (
        <div key={item.id}>
          <Typography>{item.name}</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeFromBasket(item.id)}
          >
            حذف
          </Button>
        </div>
      ))}
    </Container>
  );
}
