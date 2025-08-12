import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { api } from "../services/api";
import { DEFAULT_CODE } from "../utils/constants";
import backgroundImage from "../assets/Hero-Background-notecode@2x.png";
import { Header } from "../components/Header";

const Home = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("vs-dark");
  const [isSharing, setIsSharing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const navigate = useNavigate();

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    setHasChanges(true);
  };

  const handleShare = async () => {
    try {
      setIsSharing(true);
      const result = await api.saveSnippet(code, language, theme);
      navigate(`/${result.id}`);
    } catch (error) {
      console.error("Error sharing snippet:", error);
      alert("Failed to share snippet");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="min-h-screen relative font-outfit">
      <div className="absolute inset-0">
        {/* Hero background image - full height để hiển thị đầy đủ vòng cung */}
        <div
          className="absolute inset-0 bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
          }}
        />
        {/* Gradient overlay để thêm màu xanh */}
        <div className="absolute inset-0 -z-10 bg-purple-gradient" />
      </div>
      {/* Header component */}
      <div className="flex flex-col justify-center min-h-screen relative z-10">
        <Header />

        <Editor
          value={code}
          language={language}
          theme={theme}
          onChange={handleCodeChange}
          height="500px"
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
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
