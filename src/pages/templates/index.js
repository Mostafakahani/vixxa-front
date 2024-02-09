import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import QuillEditor from "../../../Componenets/Editor/RichTextEditor";

const YourPage = () => {
  const [richTextValue, setRichTextValue] = useState("");

  const handleRichTextChange = (value) => {
    setRichTextValue(value);
  };

  const handleSave = () => {
    // Handle saving the rich text content
    console.log(richTextValue);
  };

  return (
    <Container>
      <QuillEditor value={richTextValue} onChange={handleRichTextChange} />
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
};

export default YourPage;
