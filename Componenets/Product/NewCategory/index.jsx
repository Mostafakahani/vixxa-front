import React, { useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Server } from "../../../config";
import { toast } from "react-toastify";

function NewCategory({ openDialogNewCategory, setOpenDialogNewCategory }) {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCategory = async () => {
    try {
      const response = await axios.post(
        Server.URL + `/category/add`,
        categoryData,
        {
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        toast.success("با موفقیت ساخته شد");
        handleClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده است");
    }
  };

  const handleClose = () => {
    setCategoryData({
      name: "",
      description: "",
    });
    setOpenDialogNewCategory(false);
  };

  return (
    <Dialog open={openDialogNewCategory} onClose={handleClose}>
      <DialogTitle>افزودن دسته بندی</DialogTitle>
      <DialogContent>
        <Container maxWidth="sm">
          <Grid container spacing={2} my={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="نام دسته بندی"
                name="name"
                value={categoryData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="توضیحات"
                name="description"
                value={categoryData.description}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </Container>
      </DialogContent>
      <DialogActions>
        <Grid container columnSpacing={1}>
          <Grid item>
            <Button onClick={handleAddCategory} variant="contained">
              ساخت دسته بندی
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClose} variant="outlined" color="error">
              کنسل
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default NewCategory;
