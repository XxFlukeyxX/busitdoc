import React from "react";
import { useLocation } from "react-router-dom"; // ใช้ตรวจสอบ path ปัจจุบัน
import "../styles/Header.css";
import logo from "../assets/Logo.png"; // นำเข้าโลโก้

const Header = () => {
  const location = useLocation(); // ดึง path ปัจจุบัน

  return (
    <header className={`header ${location.pathname === "/" ? "login-header" : "home-header"}`}>
      {/* แสดงโลโก้และข้อความเฉพาะหน้าอื่นๆ ที่ไม่ใช่หน้า Login */}
      {location.pathname !== "/" && (
        <div className="header-content">
          <img src={logo} alt="Logo" className="header-logo" />
          <h1 className="header-title">
              ระบบกรอบมาตรฐานคุณวุฒิระดับอุดมศึกษาแห่งชาติ (มคอ.)
          </h1>
        </div>
      )}
    </header>
  );
};

export default Header;
