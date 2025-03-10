import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ใช้สำหรับเปลี่ยนหน้า
import "./MQA3Insert3.css"; // ✅ ใช้ CSS แยก

const MQA3Insert3 = () => {
  const navigate = useNavigate(); // ✅ ใช้ navigate สำหรับเปลี่ยนหน้า

  const [courseDescription, setCourseDescription] = useState("");
  const [lectureHours, setLectureHours] = useState("");
  const [practiceHours, setPracticeHours] = useState("");
  const [selfStudyHours, setSelfStudyHours] = useState("");
  const [consultationHours, setConsultationHours] = useState("");

  const handleFetchData = () => {
    console.log("Fetching data... (ในอนาคตจะเชื่อม API)");
    // 🚀 ในอนาคตสามารถดึงข้อมูลจาก API และอัปเดต state formData ได้
  };

  return (
    <div className="mqa3-insert3-container">
      <h2 className="form-title-mqa3-insert3">
        หมวดที่ 3 แบบบันทึกข้อมูล มคอ.3 รายวิชา ปัญญาประดิษฐ์
      </h2>

      <form className="mqa3-form">
        <div className="form-container3">
          {/* ✅ ข้อ 1 คำอธิบายรายวิชา */}
          <div className="form-section">
            <label className="form-label">1. คำอธิบายรายวิชา</label>
            <textarea
              className="input-textarea"
              placeholder="กรอกคำอธิบายรายวิชา"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
            ></textarea>
          </div>

          {/* ✅ ข้อ 2 จำนวนชั่วโมงที่ใช้ต่อภาคการศึกษา */}
          <div className="form-section">
            <label className="form-label">2. จำนวนชั่วโมงที่ใช้ต่อภาคการศึกษา</label>
            <table className="hours-table">
              <thead>
                <tr>
                  <th>บรรยาย</th>
                  <th>การฝึกปฏิบัติ/งานภาคสนาม/การฝึกงาน</th>
                  <th>การศึกษาด้วยตนเอง</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <textarea
                      className="input-hours"
                      placeholder="พิมพ์ข้อความ"
                      value={lectureHours}
                      onChange={(e) => setLectureHours(e.target.value)}
                    />
                  </td>
                  <td>
                    <textarea
                      className="input-hours"
                      placeholder="พิมพ์ข้อความ"
                      value={practiceHours}
                      onChange={(e) => setPracticeHours(e.target.value)}
                    />
                  </td>
                  <td>
                    <textarea
                      className="input-hours"
                      placeholder="พิมพ์ข้อความ"
                      value={selfStudyHours}
                      onChange={(e) => setSelfStudyHours(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ✅ ข้อ 3 จำนวนชั่วโมงให้คำปรึกษารายบุคคล */}
          <div className="form-section">
            <label className="form-label">
              3. จำนวนชั่วโมงต่อสัปดาห์ที่อาจารย์ใช้ให้คำปรึกษาและแนะนำทางวิชาการแก่นักศึกษาเป็นรายบุคคล
            </label>
            <textarea
              className="input-textarea"
              placeholder="กรอกข้อมูลชั่วโมงให้คำปรึกษา"
              value={consultationHours}
              onChange={(e) => setConsultationHours(e.target.value)}
            ></textarea>

            {/* ✅ ปุ่มย้อนกลับ และ ปุ่มถัดไป (ย้ายมาอยู่ใต้ช่องกรอกข้อ 3) */}
            <div className="button-container">
              <button className="back-btn3" onClick={() => navigate("/mqa3-insert2")}>
                ย้อนกลับ
              </button>
              <button type="button" className="fetch-btn3" onClick={handleFetchData}>ดึงข้อมูล</button>
              <button className="next-btn3" onClick={() => navigate("/mqa3-insert4")}>
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MQA3Insert3;
