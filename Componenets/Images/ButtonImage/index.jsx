import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Button,
  Dialog,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import UploadFile from "../UploadFile";
import { useTheme } from "@emotion/react";
import { Server } from "../../../config";

export default function ButtonImage({
  open,
  setOpen = () => {},
  onChange = () => {},
  imageUrlLink = () => {},
  label,
  disableStatus,
  justIcon,
  idStorage,
}) {
  // const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [gallery, setGallery] = useState(data);
  const [openAddPhoto, setOpenAddPhoto] = useState(false);
  const [selectedFileItem, setSelectedFileItem] = useState({});
  const [selectedImageId, setSelectedImageId] = useState(
    idStorage ? idStorage : null
  );
  const [addingFeature, setAddingFeature] = useState(false);
  const [count, setCount] = useState(0);
  const [requestError, setRequestError] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [item, setItem] = useState(false);
  const [scrollStatus, setScrollStatus] = useState(false);

  const matchDownMd = window.matchMedia("(max-width: 960px)").matches;
  const matchDownLg = window.matchMedia("(max-width: 1280px)").matches;

  const handleImageClick = (id) => {
    if (selectedImageId !== id) {
      setSelectedImageId(id);
    } else {
      setSelectedImageId(null);
    }
  };

  const handleSubmit = async () => {
    setAddingFeature(true);
    setRequestError("");
    const config = {
      headers: {
        // Authorization: `${
        //   ServerURL.developerMode === true ? ServerURL.Bear : GetToken("user")
        // }`,
      },
    };
    if (selectedFileItem && selectedFileItem.file) {
      try {
        const formData = new FormData();
        Object.keys(selectedFileItem?.fileResDetails?.fields || {}).map((x) => {
          formData.append(x, selectedFileItem?.fileResDetails?.fields[x]);
        });
        formData.append("file", selectedFileItem.file);

        const uploadResponse = await axios.post(
          `${Server.URL + "/image/images/upload"}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
        if (uploadResponse.status === 200) {
          setImageId(uploadResponse.data.data?.id);
        } else {
          setRequestError("خطا در آپلود فایل");
        }
      } catch (error) {
        console.error("خطا: ", error);
        setRequestError("خطا در ارسال درخواست به سرور. دوباره امتحان کنید");
      } finally {
        setAddingFeature(false);
      }
    } else {
      setRequestError("یک فایل انتخاب کنید");
      setAddingFeature(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${Server.URL}/image/images/`, {
          withCredentials: true,
        });
        setData(response.data.files);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (!isCancelled) {
          setRequestError("Error fetching data. Please try again.");
        }
      }
    }

    fetchData();
  }, [count]);

  const handleDelete = (title) => {
    const updatedGallery = gallery.filter((item) => item.title !== title);
    setGallery(updatedGallery);
  };
  const handleClosePanel = () => {
    setOpen(false);
    setSelectedFileItem({});
    setSelectedImageId(null);
  };
  const handleClosePanel2 = () => {
    console.log(count);
    setCount(count + 1);
    console.log(count);
    setOpenAddPhoto(false);
  };
  return (
    <>
      <Button
        sx={{ mt: justIcon ? 0 : 1 }}
        startIcon={!justIcon && <AddPhotoAlternateOutlinedIcon />}
        onClick={() => {
          setOpen(true);
          // setCount(count + 1);
          // handleOpen()
        }}
        fullWidth
        disabled={disableStatus ? true : false}
      >
        {justIcon ? (
          <>{justIcon}</>
        ) : (
          <>{idStorage ? "فایل انتخاب شده" : "انتخاب فایل"}</>
        )}
      </Button>
      <Dialog open={open} onClose={handleClosePanel} fullWidth maxWidth="lg">
        <Grid container item sx={{ p: "15px" }}>
          <ImageList
            sx={{ width: "100%", height: "400px" }}
            cols={matchDownMd ? 3 : matchDownLg ? 6 : 8}
            gap={8}
            rowHeight={"auto"}
            variant="quilted"
          >
            {data.map((x) => (
              <ImageListItem key={x.id}>
                <img
                  srcSet={`${x.url}?h=auto&fit=crop&auto=format&dpr=2 2x`}
                  src={`${x.url}?h=auto&fit=crop&auto=format`}
                  alt={x.id}
                  loading="lazy"
                  style={{
                    cursor: "pointer",
                    border:
                      selectedImageId === x.id ? "2px solid #1c49f1" : "none",
                    borderRadius: "5px",
                  }}
                  onClick={() => {
                    handleImageClick(x.id);
                    setImageId(x.id);
                    setImageUrl(x.url);
                  }}
                />
              </ImageListItem>
            ))}

            {scrollStatus ? <CircularProgress size={24} /> : ""}
          </ImageList>
          <Grid container>
            <Grid container item xs={6} md={2}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddToPhotosOutlinedIcon />}
                onClick={() => {
                  onChange(imageId);
                  imageUrlLink(imageUrl);
                  handleClosePanel();
                }}
                sx={{ mt: 2, fontSize: { xs: "12px", md: "13px" } }}
              >
                انتخاب عکس
              </Button>
            </Grid>
            <Grid container item xs={6} md={2}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<FileUploadOutlinedIcon />}
                onClick={() => setOpenAddPhoto(true)}
                sx={{ mt: 2, fontSize: { xs: "12px", md: "13px" } }}
              >
                اپلود عکس
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={openAddPhoto}
          fullWidth
          maxWidth={"sm"}
          onClose={handleClosePanel2}
        >
          <Grid container sx={{ p: "15px" }}>
            <Grid container item>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              >
                عکس مورد نظر خود را اپلود کنید
              </Typography>
            </Grid>
            <UploadFile
              id={"file1"}
              accept="image/png, image/jpg, image/jpeg"
              // label={"ایکون ( با اندازه برابر مثلا 200*200)"}
              onChange={(e) => {
                setCount(count + 1);
                setOpenAddPhoto(false);
              }}
              selectedFileItem={selectedFileItem}
            />
            <Typography
              variant="body2"
              sx={{ my: 1, color: "red", fontSize: "10px" }}
            >
              {requestError ? requestError : " "}
            </Typography>

            <Grid container>
              <Grid item xs={6} md={2}>
                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                  color="primary"
                  autoFocus
                >
                  {addingFeature ? <CircularProgress size={24} /> : "آپلود عکس"}
                </Button>
              </Grid>
              <Grid container item xs={6} md={2}>
                <Button onClick={() => setOpenAddPhoto(false)} color="primary">
                  برگشت
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
      </Dialog>
    </>
  );
}
