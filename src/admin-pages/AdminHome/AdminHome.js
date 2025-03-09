import React from "react";

const AdminHome = () => {
  return (
    <div className="admin-home-container">
      {/* หัวข้อหลัก */}
      <h2 className="admin-home-title">เลือกหลักสูตร</h2>

      {/* ปุ่มเลือกหลักสูตร */}
      <div className="course-selection">
        <button className="course-button">หลักสูตรบัณฑิต (ปริญญาตรี)</button>
        <button className="course-button">หลักสูตรมหาบัณฑิต (ปริญญาโท)</button>
        <button className="course-button">หลักสูตรดุษฎีบัณฑิต (ปริญญาเอก)</button>
      </div>
    </div>
  );
};

export default AdminHome;
