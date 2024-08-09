import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Chunk from "./components/Chunk";
import "./App.css";

const App = () => {
  return (
    <div className="App">
    <div className="grid-container">
        <Chunk direction="north">North</Chunk>
        <Chunk direction="south">South</Chunk>
        <Chunk direction="east">East</Chunk>
        <Chunk direction="west">West</Chunk>
    </div>
</div>
  );
};

export default App;
