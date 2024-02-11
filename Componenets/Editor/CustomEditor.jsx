import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { Grid } from "@mui/material";

const CustomEditor = ({ value, onChange }) => {
  const [text, setText] = useState(value || "");

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
