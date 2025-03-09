import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ เพิ่ม useNavigate
import "../../pages/LoginPage/Login.css"; 
import logo from "../../assets/Logo.png"; 

const Login = () => {
  const navigate = useNavigate(); // ✅ ใช้สำหรับเปลี่ยนหน้า

  // ✅ ฟังก์ชันสำหรับเปลี่ยนไปหน้า Home
  const handleGoogleLogin = () => {
    navigate("/home"); // ไปที่หน้า Home
  };

  return (
    <div className="page-container">
      <div className="login-content">
        <img src={logo} alt="Logo" className="login-logo" />
        <h1 className="login-title">ระบบกรอบมาตรฐานคุณวุฒิระดับอุดมศึกษาแห่งชาติ (มคอ.)</h1>

        {/* ✅ เมื่อกดปุ่มจะเปลี่ยนไปหน้า Home */}
        <button className="google-login-btn" onClick={handleGoogleLogin}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" className="google-logo" />
          เข้าสู่ระบบด้วย Google
        </button>
      </div>
    </div>
  );
};

export default Login;
