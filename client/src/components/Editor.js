import MonacoEditor from "@monaco-editor/react";

const Editor = ({ value, language, theme, onChange, height = "500px" }) => {
  const handleEditorChange = (newValue) => {
    onChange(newValue || "");
  };

  return (
    <div className="w-full">
      <MonacoEditor
        height={height}
        language={language}
        theme={theme}
        value={value}
        onChange={handleEditorChange}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: "line",
          automaticLayout: true,
          fontSize: 14,
          fontFamily: "Fira Code, Consolas, Monaco, monospace",
          minimap: {
            enabled: true,
          },
          scrollBeyondLastLine: false,
          wordWrap: "on",
          lineNumbers: "on",
          renderLineHighlight: "all",
          smoothScrolling: true,
        }}
      />
    </div>
  );
};

export default Editor;
