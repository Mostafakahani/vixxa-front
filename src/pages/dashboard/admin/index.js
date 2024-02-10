import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Server } from "../../../../config";
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
import MyEditor from "../../../../Componenets/Editor/MyEditor";

function AdminPage() {
  noStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    price: "",
    detail: "",
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
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditedProduct({
      name: product.name,
      price: product.price,
      detail: product.detail,
      image: product.image,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Send edited product details to server
    // Close dialog
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index}>
            <h4>{item.name}</h4>
            <Button variant="contained" onClick={() => handleEdit(item)}>
              Edit
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
          />
          <MyEditor />
          <TextField
            fullWidth
            label="Detail"
            name="detail"
            value={editedProduct.detail}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Image URL"
            name="image"
            value={editedProduct.image}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AdminPage;
