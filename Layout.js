import React, { useEffect } from "react";
import "./assets/css/main.css";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  // Kiểm tra đăng nhập
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="layout-bg">
      {/* Header */}
      <header>
        <div id="divheader" className="header1">
          <div id="banner" className="banner1">
            {/* Menu bên trái */}
            <div id="topleft">
              <ul className="ul1">
                <li>
                  <a href="/#">TRANG CHỦ</a>
                </li>
                <li>
                  <a href="/trang1">EGOV</a>
                </li>
                <li>
                  <a href="/trang2">SINH VIÊN</a>
                </li>
              </ul>
            </div>

            {/* Logo giữa */}
            <div id="logo" className="logo1">
              <img
                src="https://i.ibb.co/XZCfr78X/t-i-xu-ng.png"
                width="548"
                alt="Logo Trường"
              />
            </div>

            {/* Ô tìm kiếm + nút đăng xuất bên phải */}
            <div
              id="divtimkiem"
              style={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>Phần tìm kiếm</div>
              <button
                onClick={handleLogout}
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  backgroundColor: "blueviolet",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Nội dung chính */}
      <main id="container" className="container">
        <Outlet />
      </main>

      {/* Footer */}
      <footer></footer>
    </div>
  );
};

export default Layout;
