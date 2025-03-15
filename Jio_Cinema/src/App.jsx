import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
import Movies from "./pages/Movies"; // Ensure correct import (case-sensitive)
import Home from "./pages/Home"; // Example Home component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} /> {/* Movies page route */}
      </Routes>
    </Router>
  );
};

export default App;
