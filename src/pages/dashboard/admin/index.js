import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { Server } from "../../../../config";
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
import CustomEditor from "../../../../Componenets/Editor/CustomEditor";
import ButtonImage from "../../../../Componenets/Images/ButtonImage";
import { toast } from "react-toastify";

function AdminPage() {
  noStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialogImage, setOpenDialogImage] = useState(false);

  const [editedProduct, setEditedProduct] = useState({
    _id: "",
    name: "",
    price: "",
    detail: "",
    imageUrl: "",
    image: "",
  });

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        Server.URL + "/products/list",
        {},
        {
          withCredentials: true,
        }
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [update]);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditedProduct({
      id: product._id,
      name: product.name,
      price: product.price,
      detail: product?.detail,
      imageUrl: product?.imageUrl,
      image: product?.image,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    try {
      const response = await axios.post(
        Server.URL + `/products/delete/${editedProduct.id}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("با موفقیت بروز شد");
        setOpen(false);
        setUpdate(update + 1);
      }
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده است");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // به روز رسانی مقادیر به کامپوننت ButtonImage
    setOpenDialogImage(false); // این خط برای بروزرسانی کامپوننت ButtonImage و نمایش تغییرات می‌باشد.
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        Server.URL + `/products/update/${editedProduct.id}`,
        {
          name: editedProduct.name,
          price: editedProduct.price,
          detail: editedProduct?.detail,
          imageUrl: editedProduct?.imageUrl,
          image: editedProduct?.image,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("با موفقیت بروز شد");
        setOpen(false);
        setUpdate(update + 1);
      }
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده است");
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Box
              component={"img"}
              src={item.imageUrl || "/next.svg"}
              sx={{ width: "100px" }}
            />
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "90%",
              }}
            >
              {item.name}
            </Typography>
            <Button variant="contained" onClick={() => handleEdit(item)}>
              Edit
            </Button>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>ویرایش محصول {editedProduct.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} my={1}>
            <Grid item xs={10}>
              <TextField
                fullWidth
                label="نام محصول"
                name="name"
                value={editedProduct.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="قیمت"
                name="price"
                value={editedProduct.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomEditor
                value={editedProduct.detail}
                onChange={(value) =>
                  setEditedProduct((prev) => ({ ...prev, detail: value }))
                }
              />
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <Box
                  component={"img"}
                  src={`${
                    editedProduct.imageUrl || "/next.svg"
                  }?h=auto&fit=crop&auto=format`}
                  sx={{ width: "100%", height: "300px", objectFit: "contain" }}
                />
              </Grid>
              <Grid item xs={12} container>
                <ButtonImage
                  open={openDialogImage}
                  setOpen={(e) => setOpenDialogImage(e)}
                  imageUrlLink={(e) =>
                    setEditedProduct((prev) => ({ ...prev, imageUrl: e }))
                  }
                  onChange={(e) =>
                    setEditedProduct((prev) => ({
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
              <Grid item container>
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
              <Grid item container spacing={2}>
                <Grid item xs={6}>
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
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    disableElevation
                    variant="text"
                    color="error"
                    onClick={handleDelete}
                  >
                    حذف محصول
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AdminPage;
