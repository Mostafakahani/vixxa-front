import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import { Grid, TextField } from "@mui/material";

const CustomEditor = ({ value, onChange }) => {
  const [editorState, setEditorState] = useState(null);
  const [htmlValue, setHtmlValue] = useState(value);

  useEffect(() => {
    const loadEditor = async () => {
      const htmlToDraft = (await import("html-to-draftjs")).default;
      const blocksFromHtml = htmlToDraft(value);
      if (blocksFromHtml) {
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        const initialEditorState = EditorState.createWithContent(contentState);
        setEditorState(initialEditorState);
      }
    };
    loadEditor();
  }, [value]);

  const DynamicEditor = dynamic(() =>
    import("react-draft-wysiwyg").then((module) => module.Editor)
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    const contentHtml = draftToHtml(convertToRaw(state.getCurrentContent()));
    setHtmlValue(contentHtml);
    onChange(contentHtml);
  };

  const handleHtmlChange = (event) => {
    const newHtmlValue = event.target.value;
    setHtmlValue(newHtmlValue);
    const htmlToDraft = require("html-to-draftjs").default;
    const blocksFromHtml = htmlToDraft(newHtmlValue);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
      onChange(newHtmlValue);
    }
  };

  return (
    <div>
      {editorState && (
        <DynamicEditor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "link",
              "embedded",
              "image",
              "history",
            ],
          }}
          mention={{
            separator: " ",
            trigger: "@",
            suggestions: [
              { text: "APPLE", value: "apple", url: "apple" },
              { text: "BANANA", value: "banana", url: "banana" },
              { text: "CHERRY", value: "cherry", url: "cherry" },
              { text: "DURIAN", value: "durian", url: "durian" },
              { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
              { text: "FIG", value: "fig", url: "fig" },
              { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
              { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
            ],
          }}
        />
      )}
      <Grid container>
        <TextField
          id="html-editor"
          label="HTML Editor"
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          value={htmlValue}
          onChange={handleHtmlChange}
          inputProps={{
            style: { direction: "ltr", fontFamily: "Gilroy" },
          }}
        />
      </Grid>
    </div>
  );
};

export default CustomEditor;
