import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ นำเข้า useNavigate
import "./MQA3Insert.css"; // ✅ อ้างอิงไฟล์ CSS ให้ตรงกับโครงสร้างโฟลเดอร์

const MQA3Insert = () => {
  const navigate = useNavigate(); // ✅ ใช้เพื่อเปลี่ยนหน้า
  const [formData, setFormData] = useState({
    courseCode: "",
    courseName: "",
    credit: "",
    curriculum: "",
    major: "",
    instructor: "",
    semester: "",
    prerequisite: "",
    corequisite: "",
    location: "",
    lastUpdate: "",
  });

  // ฟังก์ชันจัดการการเปลี่ยนค่าในช่องอินพุต
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ฟังก์ชันดึงข้อมูล (จะเชื่อมต่อ API ในอนาคต)
  const handleFetchData = () => {
    console.log("Fetching data... (ในอนาคตจะเชื่อม API)");
    // 🚀 ในอนาคตสามารถดึงข้อมูลจาก API และอัปเดต state formData ได้
  };

  // ฟังก์ชันจัดการการกดปุ่มถัดไป
  const handleNext = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/mqa3-insert2"); // ✅ เปลี่ยนเส้นทางไปยังหน้า MQA3Insert2
  };

  return (
    <div className="mqa3-insert-container">
      <h2 className="form-title-mqa3-insert">หมวดที่ 1 แบบนำส่งข้อมูล มคอ.3 รายวิชา ปัญญาประดิษฐ์</h2>

      <form className="mqa3-form" onSubmit={handleNext}>
        <div className="form-container">
          <div className="form-columns">
            {/* ✅ คอลัมน์ซ้าย */}
            <div className="form-left">
              <div className="form-row">
                <label>1. รหัสและชื่อรายวิชา</label>
                <div className="input-container-mqa3-insert">
                  <input type="text" name="courseCode" placeholder="รหัสวิชา" value={formData.courseCode} onChange={handleChange} />
                  <input type="text" name="courseName" placeholder="ชื่อรายวิชา" value={formData.courseName} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <label>2. จำนวนหน่วยกิต</label>
                <input type="text" className="input-credit" placeholder="หน่วยกิต" name="credit" value={formData.credit} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>3. หลักสูตรและแขนงของรายวิชา</label>
                <div className="input-container-mqa3-insert">
                  <input type="text" className="input-curriculum" placeholder="หลักสูตร" name="curriculum" value={formData.curriculum} onChange={handleChange} />
                  <input type="text" className="input-major" placeholder="ประเภทของรายวิชา" name="major" value={formData.major} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <label>4. อาจารย์ผู้รับผิดชอบรายวิชา</label>
                <input type="text" className="input-instructor" placeholder="ชื่ออาจารย์" name="instructor" value={formData.instructor} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>5. ภาคการศึกษา สัปดาห์เรียน</label>
                <input type="text" className="input-semester" placeholder="ภาคการศึกษา" name="semester" value={formData.semester} onChange={handleChange} />
              </div>
            </div>

            {/* ✅ คอลัมน์ขวา */}
            <div className="form-right">
              <div className="form-row">
                <label>6. รายวิชาที่ต้องเรียนมาก่อน</label>
                <input type="text" className="input-prerequisite" placeholder="รายวิชาที่ต้องเรียนก่อน" name="prerequisite" value={formData.prerequisite} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>7. รายวิชาที่ต้องเรียนพร้อมกัน</label>
                <input type="text" className="input-corequisite" placeholder="รายวิชาที่ต้องเรียนพร้อมกัน" name="corequisite" value={formData.corequisite} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>8. สถานที่เรียน</label>
                <input type="text" className="input-location" placeholder="สถานที่เรียน" name="location" value={formData.location} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>9. วันที่จัดทำหรือปรับปรุงรายละเอียดรายวิชา</label>
                <input type="text" className="input-last-update" placeholder="วันที่อัปเดตล่าสุด" name="lastUpdate" value={formData.lastUpdate} onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>

        {/* ✅ ปุ่ม "ดึงข้อมูล" และ "ถัดไป" บนบรรทัดเดียวกัน */}
        <div className="form-submit">
          <button type="button" className="fetch-btn" onClick={handleFetchData}>ดึงข้อมูล</button>
          <button type="submit" className="next-btn">ถัดไป</button>
        </div>
      </form>
    </div>
  );
};

export default MQA3Insert;
