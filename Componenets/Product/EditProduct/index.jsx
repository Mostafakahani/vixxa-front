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
import ButtonImage from "../../Images/ButtonImage";
import CustomEditor from "../../Editor/CustomEditor";
function EditProduct({
  open,
  editedProduct,
  setEditedProduct,
  handleSave,
  categories,
  handleClose,
  handleDelete,
  handleChange,
  openDialogImage,
  setOpenDialogImage,
  setCategoriesUpdate,
  categoriesUpdate,
}) {
  // const [openDialogImage, setOpenDialogImage] = useState(false);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <DialogTitle>ویرایش محصول {editedProduct.name}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} my={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="نّام محصول"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              label="قیمت"
              name="price"
              value={editedProduct.price}
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
              value={editedProduct.category}
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
  );
}

export default EditProduct;
