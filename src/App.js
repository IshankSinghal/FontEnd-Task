// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./components/LeaderBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
