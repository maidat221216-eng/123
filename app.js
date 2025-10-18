import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Trang1 from "./Trang1";
import Trang2 from "./Trang2";
import Chitietsanpham from "./Chitietsanpham";
import Login from "./pages/Login"; // ✅ đường dẫn chính xác

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Login tách riêng, không nằm trong Layout */}
        <Route path="/login" element={<Login />} />

        {/* Các trang chính có Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
