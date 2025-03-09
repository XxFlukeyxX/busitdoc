import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [role, setRole] = useState(""); // ✅ ใช้ตรวจสอบบทบาทของผู้ใช้
  let timeoutId = null;

  useEffect(() => {
    // ✅ ดึงบทบาทของผู้ใช้จากระบบ (สมมติว่า role ถูกเก็บไว้ใน localStorage)
    const userRole = localStorage.getItem("role") || "user"; // ค่าเริ่มต้นเป็น "user"
    setRole(userRole);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("role"); // ล้างค่าบทบาทเมื่อออกจากระบบ
    navigate("/");
  };

  const showDropdown = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const hideDropdown = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/home">| หน้าหลัก |</Link>

        {/* ✅ แสดงเฉพาะถ้าเป็นผู้ใช้ทั่วไป (User) */}
        {role === "user" && (
          <div
            className="dropdown"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <span className="dropdown-title">| มคอ. |</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/mqa3">มคอ. 3</Link>
                <Link to="/mqa4">มคอ. 4</Link>
                <Link to="/mqa5">มคอ. 5</Link>
                <Link to="/mqa6">มคอ. 6</Link>
              </div>
            )}
          </div>
        )}

        {/* ✅ แสดงเฉพาะถ้าเป็น Admin */}
        {role === "admin" && (
          <>
            <Link to="/admin-deadline">กำหนดขอบเขตเวลา</Link>
            <Link to="/admin-reports">รายงานข้อผิดพลาด</Link>
            <Link to="/admin-approval">กำหนดความรับผิดชอบ</Link>
          </>
        )}
      </div>

      <div className="nav-info">
        <span>นายสมศักดิ์ ศศิรา | {role === "admin" ? "แอดมิน" : "อาจารย์"}</span>
        <span className="logout-link" onClick={handleLogout}>
          ออกจากระบบ
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
