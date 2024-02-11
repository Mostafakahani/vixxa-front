import React, { useRef, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import styles from "./styles";
import axios from "axios";
import { Server } from "../../../config";

function UploadFile({
  label = null,
  accept = "image/*",
  id,
  readOnly = false,
  onChange = () => {},
  fileName = null,
  srcImage = null,
  selectedFileItem,
}) {
  const fileInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(false);

  const handleFileUpload = async () => {
    const selectedFile = fileInputRef.current.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await axios.post(
          `${Server.URL}/image/images/upload`,
          formData,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          // setResItems(response.data);

          onChange();
        } else {
          console.error("خطا در دریافت اطلاعات ریسپانس!");
        }
      } catch (error) {
        if (error.code === "ERR_NETWORK") {
          window.alert("ERR_NETWORK");
        }
        console.error("خطایی رخ داده است: ", error);
      } finally {
        setLoading(false);
      }
    } else {
      onChange({ fileDetails: [] });
    }
  };

  return (
    <Box
      sx={{ ...styles.box, width: "100%", my: "15px" }}
      className="box-upload input-box"
    >
      {label && <label htmlFor={id}>{label}</label>}
      <Box
        className="box-input center-between"
        onClick={() => !readOnly && fileInputRef.current.click()}
      >
        <input
          type="file"
          accept={accept}
          hidden
          ref={fileInputRef}
          id={id}
          onChange={handleFileUpload}
        />
        <Typography component={"h6"}>
          {fileName
            ? fileName
            : srcImage
            ? srcImage.split("/")[srcImage.split("/").length - 1]
            : "فایل خود را انتخاب کنید"}
        </Typography>

        <Button
          text={
            file ? (
              "مشاهده"
            ) : loading ? (
              <CircularProgress size={24} />
            ) : (
              "مشاهده"
            )
          } // تغییرات اینجا
          isUploaded={Boolean(file)} // ارسال وضعیت آپلود به عنوان isUploaded
          onClick={(e) => {
            e.stopPropagation();
            if (fileInputRef.current.files[0] || srcImage) {
              const newLink = document.createElement("a");
              newLink.href = fileInputRef.current.files[0]
                ? URL.createObjectURL(fileInputRef.current.files[0])
                : srcImage;
              newLink.setAttribute("target", "_blank");
              newLink.click();
            }
          }}
        />
      </Box>
    </Box>
  );
}

export default UploadFile;
