import React, { useState } from "react";
import "./MQA4Insert.css";

const MQA4Insert = () => {
  const [formData, setFormData] = useState({
    courseCode: "",
    courseName: "",
    credit: "",
    curriculum: "",
    instructor: "", // ✅ เพิ่มช่องของข้อ 3 (อาจารย์)
    semesterInfo: "", // ✅ เพิ่มช่องของข้อ 4
    revisionDate: "" // ✅ เพิ่มช่องของข้อ 5
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="mqa4-insert-container">
      <h2 className="form-title-mqa4-insert">แบบบันทึกข้อมูล มคอ.4 รายวิชา ปัญญาประดิษฐ์</h2>

      <div className="mqa4-layout">
        {/* ✅ ฝั่งซ้าย: ส่วนของฟอร์ม */}
        <div className="form-section">
          <form className="mqa4-form" onSubmit={handleSubmit}>
            <div className="form-container">
              {/* ✅ ข้อ 1 - 5 */}
              <div className="form-row">
                <label className="label-above">1. รหัสและชื่อรายวิชา</label>
                <div className="input-container-mqa4">
                  <input type="text" name="courseCode" placeholder="รหัสวิชา" value={formData.courseCode} onChange={handleChange} />
                  <input type="text" name="courseName" placeholder="ชื่อรายวิชา" value={formData.courseName} onChange={handleChange} />
                  <input type="text" name="credit" placeholder="หน่วยกิต" value={formData.credit} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <label className="label-above">2. หลักสูตรและประเภทของรายวิชา</label>
                <input type="text" name="curriculum" className="single-input-mqa4" placeholder="หลักสูตร" value={formData.curriculum} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label className="label-above">3. อาจารย์ผู้รับผิดชอบและอาจารย์ที่ปรึกษาการฝึกประสบการณ์ภาคสนาม</label>
                <input type="text" name="instructor" className="long-input-mqa4" placeholder="ชื่ออาจารย์" value={formData.instructor} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label className="label-above">4. ภาคการศึกษาและชั้นปีที่กำหนดให้มีการฝึกประสบการณ์ภาคสนาม</label>
                <input type="text" name="semesterInfo" className="long-input-mqa4" placeholder="ระบุภาคการศึกษา" value={formData.semesterInfo} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label className="label-above">5. วันที่จัดทำหรือปรับปรุงรายละเอียดของรายวิชา</label>
                <input type="text" name="revisionDate" className="long-input-mqa4" placeholder="ระบุวันที่" value={formData.revisionDate} onChange={handleChange} />
              </div>
            </div>
          </form>
        </div>

        {/* ✅ ฝั่งขวา: ส่วนของคำอธิบาย */}
        <div className="description-section">
          <div className="mqa4-description">
            <h3 className="description-title">คำอธิบาย</h3>
            <textarea className="description-box" placeholder="กรอกคำอธิบายเพิ่มเติม..." />
          </div>
        </div>
      </div>

      {/* ✅ ปุ่มส่งข้อมูล */}
      <div className="form-submit">
        <button type="submit" className="submit-btn">ส่งข้อมูลที่กรอก</button>
      </div>
    </div>
  );
};

export default MQA4Insert;