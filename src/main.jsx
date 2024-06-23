import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieSelection from "./pages/MovieSelection.jsx";
import NotFound from "./pages/404.jsx";
import Info from "./pages/Info.jsx";
import Browse from "./pages/Browse.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/info" element={<Info/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
        <Route path="/movieselection" element={<MovieSelection/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
