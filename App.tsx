import "./styles.css";
// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./Layout";
// @ts-ignore
import Trang1 from "./Trang1";
// @ts-ignore
import Chitietsanpham from "./Chitietsanpham";
// @ts-ignore
import Trang2 from "./Trang2";
// 👉 THÊM LOGIN
import Login from "./pages/Login";


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 👉 Route riêng cho trang đăng nhập */}
        <Route path="/login" element={<Login />} />

        {/* Các route có layout chung */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
          <Route path="trang2" element={<Trang2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
