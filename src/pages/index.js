import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEN0pKGxIz2GoyHMm2ZfHGoEt5URdAQ0D7fL52uSi3A&s",
      title: "Vixxa",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEN0pKGxIz2GoyHMm2ZfHGoEt5URdAQ0D7fL52uSi3A&s",
      title: "Vixxa",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEN0pKGxIz2GoyHMm2ZfHGoEt5URdAQ0D7fL52uSi3A&s",
      title: "Vixxa",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEN0pKGxIz2GoyHMm2ZfHGoEt5URdAQ0D7fL52uSi3A&s",
      title: "Vixxa",
      description:
        "Vixxa is a website that helps you to find the best vaccines for you.",
      downloads: 300,
    },
  ]);

  return (
    <>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Grid item container columnSpacing={2} rowSpacing={{ xs: 2, sm: 2 }}>
          {items.map((item, index) => (
            <Grid
              item
              container
              key={index}
              xs={12}
              sm={6}
              md={4}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item container sx={{ boxShadow: 2, borderRadius: 3 }}>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    component="img"
                    sx={{ borderRadius: 2 }}
                    src={item.image}
                    alt={item.title}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <h1>{item.title}</h1>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <p>{item.description}</p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <p>{item.downloads}</p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button fullWidth variant="contained">
                    Buy
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      {items.length === 0 && (
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
      )}
    </>
  );
}
