import React, { useEffect, useState } from "react";
import { Grid, Button, CircularProgress } from "@mui/material";
import { Server } from "../../../../config";
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
import { toast } from "react-toastify";
import NewProduct from "../../../../Componenets/Product/NewProduct";
import ListProduct from "../../../../Componenets/Product/ListProduct/ListProduct";
import EditProduct from "../../../../Componenets/Product/EditProduct";
import NewCategory from "../../../../Componenets/Product/NewCategory";
import jwt from "jsonwebtoken";
import Head from "next/head";
function AdminPage() {
  noStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialogNewProduct, setOpenDialogNewProduct] = useState(false);
  const [openDialogNewCategory, setOpenDialogNewCategory] = useState(false);
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
          category: editedProduct?.category,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("با موفقیت بروز شد");
        setOpen(false);
        setUpdate(update + 1);
        console.log(editedProduct);
      }
    } catch (error) {
      console.log(error);
      toast.error("مشکلی پیش آمده است");
    }
  };
  // if (data.length === 0) {
  //   return (
  //     <h2 style={{ width: "100%", textAlign: "center" }}>موردی یافت نشد</h2>
  //   );
  // }
  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="viewport" content="width=device-width, initial-scale" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <Grid container>
        <Grid item sm={6}>
          <Button onClick={() => setOpenDialogNewProduct(true)}>
            افزودن محصول
          </Button>
        </Grid>
        <Grid item sm={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => setOpenDialogNewCategory(true)}>
            افزودن دسته بندی
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {loading ? (
          <Grid
            item
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              height: "70vh",
            }}
          >
            <CircularProgress />
          </Grid>
        ) : data.length === 0 ? (
          <Grid item xs={12}>
            <h2
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                height: "70vh",
              }}
            >
              موردی یافت نشد
            </h2>
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
      <NewCategory
        openDialogNewCategory={openDialogNewCategory}
        setOpenDialogNewCategory={setOpenDialogNewCategory}
      />
    </>
  );
}
export async function getServerSideProps(context) {
  // const { Server } = require("../../../../config");
  const token = context.req.cookies.token;
  try {
    const decodedToken = jwt.verify(token, Server.SECRET);
    const isAdmin = decodedToken.isAdmin || false;
    if (isAdmin) {
      return {
        props: {},
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default AdminPage;
