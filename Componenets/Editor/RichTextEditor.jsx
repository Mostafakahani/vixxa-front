import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const QuillEditor = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState(value);
  const [quillComponent, setQuillComponent] = useState(null);

  useEffect(() => {
    const loadQuill = async () => {
      // Load Quill only in the browser environment
      const ReactQuill = (await import("react-quill")).default;
      require("react-quill/dist/quill.snow.css"); // Load Quill CSS
      setQuillComponent(
        <ReactQuill
          theme="snow"
          value={editorHtml}
          onChange={handleChange}
          className="ltr-quill" // Apply custom class here
        />
      );
    };

    if (typeof window !== "undefined") {
      loadQuill();
    }
  }, []);

  useEffect(() => {
    setEditorHtml(value);
  }, [value]);

  const handleChange = (html) => {
    setEditorHtml(html);
    onChange(html);
  };

  return <div>{quillComponent}</div>;
};

export default QuillEditor;
