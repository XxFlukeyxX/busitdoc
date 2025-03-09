import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MQA3Insert6.css"; // ใช้ไฟล์ CSS แยกสำหรับสไตล์

const MQA3Insert6 = () => {
  const navigate = useNavigate();

  // ✅ จัดการรายการ "เอกสารอ้างอิงหลัก"
  const [mainDocuments, setMainDocuments] = useState([""]);

  const addMainDocument = () => {
    setMainDocuments([...mainDocuments, ""]);
  };

  const updateMainDocument = (index, value) => {
    const updatedDocs = [...mainDocuments];
    updatedDocs[index] = value;
    setMainDocuments(updatedDocs);
  };

  const removeMainDocument = (index) => {
    if (mainDocuments.length > 1) {
      setMainDocuments(mainDocuments.filter((_, i) => i !== index));
    }
  };

  // ✅ จัดการรายการ "เอกสารและข้อมูลสำคัญ"
  const [importantLinks, setImportantLinks] = useState([""]);

  const addImportantLink = () => {
    setImportantLinks([...importantLinks, ""]);
  };

  const updateImportantLink = (index, value) => {
    const updatedLinks = [...importantLinks];
    updatedLinks[index] = value;
    setImportantLinks(updatedLinks);
  };

  const removeImportantLink = (index) => {
    if (importantLinks.length > 1) {
      setImportantLinks(importantLinks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="mqa3-insert6-container">
      {/* ✅ หัวข้อหลัก */}
      <h2 className="form-title-mqa3-insert6">
        หมวดที่ 6 ทรัพยากรประกอบการเรียนการสอน รายวิชา ปัญญาประดิษฐ์
      </h2>

      <form className="mqa3-form">
        <div className="form-container6">
          
          {/* ✅ ฝั่งซ้าย: เอกสารอ้างอิงหลัก */}
          <div className="left-column">
            <div className="form-section">
              <div className="section-header">
                <h3>1. เอกสารตำราหลัก</h3>
                <button type="button" className="add-btn" onClick={addMainDocument}>+</button>
              </div>
              {mainDocuments.map((doc, index) => (
                <div key={index} className="input-row">
                  <input type="text" className="input-text" placeholder="ใส่ชื่อเอกสาร" value={doc} onChange={(e) => updateMainDocument(index, e.target.value)} />
                  {mainDocuments.length > 1 && (
                    <button type="button" className="remove-btn" onClick={() => removeMainDocument(index)}>✖</button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ✅ ฝั่งขวา: เอกสารและข้อมูลสำคัญ */}
          <div className="right-column">
            <div className="form-section">
              <div className="section-header">
                <h3>2. เอกสารและข้อมูลสำคัญ</h3>
                <button type="button" className="add-btn" onClick={addImportantLink}>+</button>
              </div>
              {importantLinks.map((link, index) => (
                <div key={index} className="input-row">
                  <input type="text" className="input-text" placeholder="https://example.com" value={link} onChange={(e) => updateImportantLink(index, e.target.value)} />
                  {importantLinks.length > 1 && (
                    <button type="button" className="remove-btn" onClick={() => removeImportantLink(index)}>✖</button>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ✅ ปุ่มย้อนกลับ & ถัดไป */}
        <div className="button-container6">
          <button type="button" className="back-btn6" onClick={() => navigate("/mqa3-insert5")}>ย้อนกลับ</button>
          <button type="button" className="next-btn6" onClick={() => navigate("/mqa3-insert7")}>ถัดไป</button>
        </div>
      </form>
    </div>
  );
};

export default MQA3Insert6;
