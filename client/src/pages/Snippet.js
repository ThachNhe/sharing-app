import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { api } from "../services/api";

const Snippet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("vs-dark");
  const [originalCode, setOriginalCode] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState(null);

  // Check if code has changed
  const hasChanges = code !== originalCode;

  useEffect(() => {
    fetchSnippet();
  }, [id]);

  const fetchSnippet = async () => {
    try {
      setIsLoading(true);
      const result = await api.getSnippet(id);
      const snippet = result.data;

      setCode(snippet.code);
      setOriginalCode(snippet.code);
      setLanguage(snippet.language);
      setTheme(snippet.theme);
    } catch (error) {
      console.error("Error fetching snippet:", error);
      setError("Snippet not found");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
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

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <div className="text-white text-xl">Loading snippet...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">{error}</div>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-primary-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-primary p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">NoteCode</h1>
          <p className="text-white/80">Snippet ID: {id}</p>
        </div>

        {/* Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 flex justify-between items-center">
          <div className="flex gap-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white/20 text-white rounded px-3 py-2 border border-white/30"
            >
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>

            {/* Theme Selector */}
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-white/20 text-white rounded px-3 py-2 border border-white/30"
            >
              <option value="vs-dark">Dark</option>
              <option value="light">Light</option>
              <option value="hc-black">High Contrast</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="bg-white/20 text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
            >
              Copy Link
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              disabled={!hasChanges || isSharing}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                hasChanges && !isSharing
                  ? "bg-white text-primary-500 hover:bg-gray-100"
                  : "bg-white/20 text-white/50 cursor-not-allowed"
              }`}
            >
              {isSharing ? "Sharing..." : "Share"}
            </button>
          </div>
        </div>

        {/* Editor */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <Editor
            value={code}
            language={language}
            theme={theme}
            onChange={handleCodeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Snippet;
