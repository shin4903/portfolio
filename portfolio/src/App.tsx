import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Profile from "./pagecomponents/profile";
import Contents from "./pagecomponents/contents";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Profile></Profile>
      <Contents></Contents>
    </div>
  );
}

export default App;
