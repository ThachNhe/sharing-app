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

  return (
    <div className="min-h-screen relative">
      {/* Background - Split into two sections */}
      <div className="absolute inset-0">
        {/* Top half - Image/Pattern background */}
        <div className="h-1/2 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-50"></div>
          <div className="absolute top-20 left-1/3 w-8 h-8 bg-yellow-200 rounded-full opacity-70"></div>
        </div>

        {/* Bottom half - Purple gradient */}
        <div className="h-1/2 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700"></div>
      </div>
    </div>
  );
};

export default Home;
