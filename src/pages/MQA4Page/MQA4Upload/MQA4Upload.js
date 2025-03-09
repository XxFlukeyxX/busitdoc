import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ใช้ useNavigate
import checkmarkIcon from "../../../assets/Vector.png";
import "./MQA4Upload.css";

const MQA4Upload = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // ✅ ใช้ useNavigate

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      console.log("ไฟล์ที่อัพโหลด:", selectedFile.name);
      setShowModal(true);
    } else {
      console.log("กรุณาอัพโหลดไฟล์ PDF ก่อนส่ง");
    }
  };

  return (
    <div className="mqa4-upload-container">
      {/* หัวข้อใหญ่ */}
      <h2 className="Upload-page-title">
        แบบบันทึกข้อมูล มคอ.4 ประจำภาคการศึกษา ที่ 2 ปีการศึกษา 2567
      </h2>

      {/* ส่วนของเอกสาร */}
      <div className="document-section">
        <h3 className="document-title">เอกสาร มคอ.4</h3>
        <label className="document-upload">
          <input type="file" accept=".pdf" onChange={handleFileChange} hidden />
          {selectedFile ? selectedFile.name : "เลือกไฟล์ PDF"}
        </label>
      </div>

      {/* Checkbox ยืนยันข้อมูล */}
      <div className="confirmation-section">
        <input
          type="checkbox"
          id="confirm-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="confirm-checkbox">
          ก่อนได้ตรวจสอบข้อมูลนี้ให้ถูกต้องแล้ว
        </label>
      </div>

      {/* ปุ่มส่งเอกสาร */}
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!isChecked || !selectedFile}
      >
        ส่งเอกสาร
      </button>

      {/* ✅ Modal Popup แจ้งเตือน */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* ✅ ใช้รูปภาพ */}
            <div className="modal-icon">
              <img src={checkmarkIcon} alt="Success" className="checkmark-image" />
            </div>
            <h2>ส่งเอกสารเสร็จสิ้น</h2>
            <button className="confirm-button" onClick={() => navigate("/MQA4")}>
              ยืนยัน
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MQA4Upload;
