import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { Grid } from "@mui/material";

const CustomEditor = ({ value, onChange }) => {
  const [text, setText] = useState(value || "");
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
        [{ align: [] }],
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  };
  useEffect(() => {
    setText(value || "");
  }, [value]);

  const handleTextChange = (value) => {
    setText(value);
    onChange && onChange(value);
  };

  if (typeof document !== "undefined") {
    // In a browser environment
    const ReactQuill = require("react-quill");
    return (
      <Grid container item sx={{ mb: { xs: 12, sm: 5 } }}>
        <ReactQuill
          modules={modules}
          style={{ width: "100%" }}
          theme="snow"
          value={text}
          onChange={handleTextChange}
        />
      </Grid>
    );
  } else {
    return <>ERROR</>;
  }
};

export default CustomEditor;
