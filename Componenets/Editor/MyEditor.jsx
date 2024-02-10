import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField, Button, Typography } from '@mui/material';

const CustomEditor = () => {
  const [text, setText] = useState('');
  const [htmlInput, setHtmlInput] = useState('');

  useEffect(() => {
    setHtmlInput(text);
  }, [text]);

  const handleHtmlInputChange = (event) => {
    setHtmlInput(event.target.value);
  };

  const applyHtmlChanges = () => {
    setText(htmlInput);
  };

  return (
    <div>
      <Typography variant="h5">Custom Editor</Typography>
      <ReactQuill 
        theme="snow"
        value={text}
        onChange={setText}
      />
      <TextField
        multiline
        rows={4}
        variant="outlined"
        label="HTML Input"
        value={htmlInput}
        onChange={handleHtmlInputChange}
        sx={{ mt: 2, mb: 2, width: '100%' }}
      />
      <Button variant="contained" onClick={applyHtmlChanges}>
        Apply HTML Changes
      </Button>
    </div>
  );
};

export default CustomEditor;
