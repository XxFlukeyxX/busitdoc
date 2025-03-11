import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import "./MQA3Insert6.css"; // Use separate CSS file for styling

const MQA3Insert6 = () => {
  const navigate = useNavigate();

  // State to manage "Main Documents"
  const [mainDocuments, setMainDocuments] = useState([""]);

  // State to manage "Important Links"
  const [importantLinks, setImportantLinks] = useState([""]);

  // Add a new document in the "Main Documents" section
  const addMainDocument = () => {
    setMainDocuments([...mainDocuments, ""]);
  };

  // Update an existing "Main Document" entry
  const updateMainDocument = (index, value) => {
    const updatedDocs = [...mainDocuments];
    updatedDocs[index] = value;
    setMainDocuments(updatedDocs);
  };

  // Remove a "Main Document" entry
  const removeMainDocument = (index) => {
    if (mainDocuments.length > 1) {
      setMainDocuments(mainDocuments.filter((_, i) => i !== index));
    }
  };

  // Add a new link in the "Important Links" section
  const addImportantLink = () => {
    setImportantLinks([...importantLinks, ""]);
  };

  // Update an existing "Important Link" entry
  const updateImportantLink = (index, value) => {
    const updatedLinks = [...importantLinks];
    updatedLinks[index] = value;
    setImportantLinks(updatedLinks);
  };

  // Remove an "Important Link" entry
  const removeImportantLink = (index) => {
    if (importantLinks.length > 1) {
      setImportantLinks(importantLinks.filter((_, i) => i !== index));
    }
  };

  // Fetch data when the "ดึงข้อมูล" button is clicked
  const handleFetchData = async () => {
    const courseCode = localStorage.getItem("courseCode"); // Get course code from localStorage

    if (!courseCode) {
      alert("กรุณากรอกรหัสวิชา");
      return;
    }

    try {
      // Fetch main documents and important links data
      const response = await axios.get("http://127.0.0.1:5000/course/section6", {
        params: { course_code: courseCode },
      });

      console.log("API Response:", response.data); // Log the API response to check the data

      if (response.data && response.data[0]) {
        const primaryTextbook = response.data[0]?.primary_Textbook || "";
        const importantDocumentsInfo = response.data[0]?.important_Documents_Info || "";

        setMainDocuments([primaryTextbook]); // Set primary_Textbook in the mainDocuments state
        setImportantLinks([importantDocumentsInfo]); // Set important_Documents_Info in the importantLinks state

        console.log("Updated mainDocuments:", [primaryTextbook]); // Check the updated state
        console.log("Updated importantLinks:", [importantDocumentsInfo]); // Check the updated state
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="mqa3-insert6-container">
      <h2 className="form-title-mqa3-insert6">
        หมวดที่ 6 ทรัพยากรประกอบการเรียนการสอน รายวิชา ปัญญาประดิษฐ์
      </h2>

      <form className="mqa3-form">
        <div className="form-container6">
          {/* Left Column: Main Documents */}
          <div className="left-column">
            <div className="form-section">
              <div className="section-header">
                <h3>1. เอกสารตำราหลัก</h3>
                <button type="button" className="add-btn" onClick={addMainDocument}>
                  +
                </button>
              </div>
              {mainDocuments.map((doc, index) => (
                <div key={index} className="input-row">
                  <input
                    type="text"
                    className="input-text"
                    placeholder="ใส่ชื่อเอกสาร"
                    value={doc}
                    onChange={(e) => updateMainDocument(index, e.target.value)}
                  />
                  {mainDocuments.length > 1 && (
                    <button type="button" className="remove-btn" onClick={() => removeMainDocument(index)}>
                      ✖
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Important Links */}
          <div className="right-column">
            <div className="form-section">
              <div className="section-header">
                <h3>2. เอกสารและข้อมูลสำคัญ</h3>
                <button type="button" className="add-btn" onClick={addImportantLink}>
                  +
                </button>
              </div>
              {importantLinks.map((link, index) => (
                <div key={index} className="input-row">
                  <input
                    type="text"
                    className="input-text"
                    placeholder="https://example.com"
                    value={link}
                    onChange={(e) => updateImportantLink(index, e.target.value)}
                  />
                  {importantLinks.length > 1 && (
                    <button type="button" className="remove-btn" onClick={() => removeImportantLink(index)}>
                      ✖
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="button-container6">
          <button type="button" className="back-btn6" onClick={() => navigate("/mqa3-insert5")}>
            ย้อนกลับ
          </button>
          <button type="button" className="fetch-btn6" onClick={handleFetchData}>
            ดึงข้อมูล
          </button>
          <button type="button" className="next-btn6" onClick={() => navigate("/mqa3-insert7")}>
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
};

export default MQA3Insert6;
