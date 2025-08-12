import MonacoEditor from "@monaco-editor/react";
import { LANGUAGES, THEMES } from "../utils/constants";
import { ShareIcon } from "./ShareIcon";

const Editor = ({ value, language, theme, onChange, height = "500px" }) => {
  const handleEditorChange = (newValue) => {
    onChange(newValue || "");
  };

  return (
    <div className="sm:w-full mx-auto mb-40 mt-10 ">
      <div className="sm:w-11/12 w-1/2 mx-auto rounded-lg relative px-3 overflow-hidden shadow-2xl">
        <div className="rounded-lg overflow-hidden">
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

              padding: {
                top: 20,
                bottom: 10,
                left: 10,
                right: 10,
              },

              scrollBeyondLastLine: false,
              wordWrap: "on",
              lineNumbers: "on",
              renderLineHighlight: "all",
              smoothScrolling: true,
            }}
          />
          <div
            className="px-4 py-2 flex justify-between items-center w-full"
            style={{
              backgroundColor: theme === "vs-dark" ? "#1E1E1E" : "#F3F4F6",
            }}
          >
            <div className="flex gap-2 items-center">
              <select
                value={LANGUAGES}
                className="outline-none rounded-xl py-1 px-2 w-20 text-sm"
              >
                {LANGUAGES.map((lang) => {
                  return (
                    <option key={lang.value} value={lang.value}>
                      {lang.label}
                    </option>
                  );
                })}
              </select>
              <select
                value={THEMES}
                className="outline-none rounded-xl py-1 px-2 w-20 text-sm"
              >
                {THEMES.map((theme) => {
                  return (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <button className="flex px-8 py-4 min-w-20 z-50 bg-share rounded-xl bg-share-button text-white">
                <ShareIcon />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
