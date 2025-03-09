import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./styles/App.css";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Login from "./pages/LoginPage/Login";
import Home from "./pages/HomePage/Home";
import MQA3 from "./pages/MQA3Page/MQA3"; // ✅ นำเข้า มคอ. 3
import MQA4 from "./pages/MQA4Page/MQA4";
import MQA5 from "./pages/MQA5Page/MQA5";
import MQA6 from "./pages/MQA6Page/MQA6";
/*------------------------------------------------------------------------------------------------------------- */
import MQA3Insert from "./pages/MQA3Page/MQA3Insert/MQA3Insert";
import MQA3Insert2 from "./pages/MQA3Page/MQA3Insert/MQA3Insert2";
import MQA3Insert3 from "./pages/MQA3Page/MQA3Insert/MQA3Insert3";
import MQA3Insert4 from "./pages/MQA3Page/MQA3Insert/MQA3Insert4";
import MQA3Insert5 from "./pages/MQA3Page/MQA3Insert/MQA3Insert5";
import MQA3Insert6 from "./pages/MQA3Page/MQA3Insert/MQA3Insert6";
import MQA3Insert7 from "./pages/MQA3Page/MQA3Insert/MQA3Insert7";
import MQA3Upload from "./pages/MQA3Page/MQA3Upload/MQA3Upload";
/*------------------------------------------------------------------------------------------------------------- */
import MQA4Insert from "./pages/MQA4Page/MQA4Insert/MQA4Insert";
import MQA4Upload from "./pages/MQA4Page/MQA4Upload/MQA4Upload";
/*------------------------------------------------------------------------------------------------------------- */
import AdminHome from "./admin-pages/AdminHome/AdminHome";
/*------------------------------------------------------------------------------------------------------------- */
// ✅ Layout ครอบทุกหน้า ยกเว้น Navbar ไม่ให้แสดงที่หน้า Login
const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/"; // ✅ ซ่อน Navbar ในหน้า Login

  return (
    <div className="app-container">
      <Header />
      {showNavbar && <Navbar />} {/* ✅ แสดง Navbar ในหน้าที่ไม่ใช่ Login */}
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ ใช้ Layout ครอบ Login แต่ไม่แสดง Navbar */}
        <Route path="/" element={<Layout><Login /></Layout>} /> 
        
        {/* ✅ ใช้ Layout ครอบ Home และมี Navbar */}
        <Route path="/home" element={<Layout><Home /></Layout>} /> 
        /*------------------------------------------------------------------------------------------------------------- */
        <Route path="/mqa3" element={<Layout><MQA3 /></Layout>} />
        <Route path="/mqa3-insert" element={<Layout><MQA3Insert /></Layout>} />
        <Route path="/mqa3-insert2" element={<Layout><MQA3Insert2 /></Layout>} />
        <Route path="/mqa3-insert3" element={<Layout><MQA3Insert3 /></Layout>} />
        <Route path="/mqa3-insert4" element={<Layout><MQA3Insert4 /></Layout>} />
        <Route path="/mqa3-insert5" element={<Layout><MQA3Insert5 /></Layout>} />
        <Route path="/mqa3-insert6" element={<Layout><MQA3Insert6 /></Layout>} />
        <Route path="/mqa3-insert7" element={<Layout><MQA3Insert7 /></Layout>} />
        <Route path="/mqa3-upload" element={<Layout><MQA3Upload /></Layout>} />
        /*------------------------------------------------------------------------------------------------------------- */
        <Route path="/mqa4" element={<Layout><MQA4 /></Layout>} />
        <Route path="/mqa4-insert" element={<Layout><MQA4Insert /></Layout>} />
        <Route path="/mqa4-upload" element={<Layout><MQA4Upload /></Layout>} />
        <Route path="/mqa5" element={<Layout><MQA5 /></Layout>} />
        <Route path="/mqa6" element={<Layout><MQA6 /></Layout>} />
        /*------------------------------------------------------------------------------------------------------------- */
        <Route path="/admin-home" element={<Layout><AdminHome /></Layout>} />
        /*------------------------------------------------------------------------------------------------------------- */

      </Routes>
    </Router>
  );
}

export default App;
