import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

function AddCategory({ open, setOpen }) {
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving category:", categoryName);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>افزودن دسته بندی جدید</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="نام دسته بندی"
          value={categoryName}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          کنسل
        </Button>
        <Button onClick={handleSave} color="primary">
          ذخیره
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddCategory;
