import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/snippets/:id" element={<SnippetDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
