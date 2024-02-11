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
  CircularProgress,
  MenuItem,
} from "@mui/material";
import { Server } from "../../../../config";
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
import CustomEditor from "../../../../Componenets/Editor/CustomEditor";
import ButtonImage from "../../../../Componenets/Images/ButtonImage";
import { toast } from "react-toastify";
import NewProduct from "../../../../Componenets/Product/NewProduct";
import ListProduct from "../../../../Componenets/Shop/products/ListProduct";
import EditProduct from "../../../../Componenets/Product/EditProduct";

function AdminPage() {
  noStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialogNewProduct, setOpenDialogNewProduct] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesUpdate, setCategoriesUpdate] = useState(0);
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
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditedProduct({
      id: product._id,
      name: product.name,
      price: product.price,
      detail: product?.detail,
      imageUrl: product?.imageUrl,
      image: product?.image,
      category: product?.category,
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
        toast.success("با موفقیت حذف شد");
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
      <Grid container>
        <Grid item sm={6}>
          <Button onClick={() => setOpenDialogNewProduct(true)}>
            افزودن محصول
          </Button>
        </Grid>
        <Grid item sm={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>افزودن دسته بندی</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {loading ? (
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "cener",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <>
            <ListProduct items={data} handleEdit={(e) => handleEdit(e)} />
          </>
        )}
      </Grid>
      <NewProduct
        onChange={(e) => {
          setUpdate(update + 1);
        }}
        openDialogNewProduct={openDialogNewProduct}
        setOpenDialogNewProduct={() => setOpenDialogNewProduct(false)}
      />

      <EditProduct
        categoriesUpdate={categoriesUpdate}
        setCategoriesUpdate={setCategoriesUpdate}
        openDialogImage={openDialogImage}
        setOpenDialogImage={setOpenDialogImage}
        open={open}
        handleClose={handleClose}
        editedProduct={editedProduct}
        setEditedProduct={setEditedProduct}
        handleSave={handleSave}
        categories={categories}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
    </>
  );
}

export default AdminPage;
