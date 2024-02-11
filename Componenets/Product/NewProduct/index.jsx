import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
  MenuItem, // Add MenuItem component from Material-UI
} from "@mui/material";
import axios from "axios";
import { Server } from "../../../config";
import ButtonImage from "../../Images/ButtonImage";
import { toast } from "react-toastify";
import CustomEditor from "../../Editor/CustomEditor";

function NewProduct({
  onChange,
  openDialogNewProduct,
  setOpenDialogNewProduct,
}) {
  const [openDialogImage, setOpenDialogImage] = useState(false);

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    detail: "",
    category: "",
    image: "",
  });

  const [categories, setCategories] = useState([]);
  const [categoriesUpdate, setCategoriesUpdate] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          Server.URL + "/category/list",
          {},
          {
            withCredentials: true,
          }
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, [categoriesUpdate]);

  const handleSave = async () => {
    try {
      const response = await axios.post(
        Server.URL + `/products/add`,
        {
          name: productData.name,
          price: parseInt(productData.price),
          detail: productData?.detail,
          category: productData?.category,
          image: productData?.image,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("با موفقیت ساخته شد");
        onChange(1);
        setOpenDialogNewProduct();
        handleClose();
      }
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("مشکلی پیش آمده است");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setOpenDialogNewProduct(false);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={openDialogNewProduct}
      onClose={() => setOpenDialogNewProduct(false)}
    >
      <DialogTitle>افزودن محصول جدید</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} my={1}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              label="نام محصول"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              label="قیمت"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <TextField
              onClick={() => setCategoriesUpdate(categoriesUpdate + 1)}
              select
              fullWidth
              label="دسته بندی"
              name="category"
              value={productData.category}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <CustomEditor
              value={productData.detail}
              onChange={(value) =>
                setProductData((prev) => ({ ...prev, detail: value }))
              }
            />
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Box
                component={"img"}
                src={`${
                  productData.imageUrl || "/next.svg"
                }?h=auto&fit=crop&auto=format`}
                sx={{ width: "100%", height: "300px", objectFit: "contain" }}
              />
            </Grid>
            <Grid item xs={12} container>
              <ButtonImage
                open={openDialogImage}
                setOpen={(e) => setOpenDialogImage(e)}
                imageUrlLink={(e) =>
                  setProductData((prev) => ({ ...prev, imageUrl: e }))
                }
                onChange={(e) =>
                  setProductData((prev) => ({
                    ...prev,
                    image: e,
                  }))
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Container maxWidth="sm">
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Button
                fullWidth
                disableElevation
                onClick={handleSave}
                variant="contained"
                color="primary"
              >
                ذخیره
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                disableElevation
                onClick={handleClose}
                variant="outlined"
                color="error"
              >
                کنسل
              </Button>
            </Grid>
          </Grid>
        </Container>
      </DialogActions>
    </Dialog>
  );
}

export default NewProduct;
