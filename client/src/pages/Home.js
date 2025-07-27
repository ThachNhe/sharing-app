import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { api } from "../services/api";
import { DEFAULT_CODE } from "../utils/constants";

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

  return <div className=""></div>;
};

export default Home;
