import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((module) => module.Editor),
  { ssr: false }
);

function MyEditor() {
  return (
    <Editor
      apiKey="c5ntc8vol3nhrs0iyi8gb6d83a3yoyl5omfaqs38ozl5wehy" // Replace this with your actual TinyMCE API key
      init={{
        height: 500,
        menubar: true,
      }}
    />
  );
}

export default MyEditor;
