import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";


function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#e9edf5" }}>
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
