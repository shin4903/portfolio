import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Profile from "./pagecomponents/profile";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Profile></Profile>
    </div>
  );
}

export default App;
