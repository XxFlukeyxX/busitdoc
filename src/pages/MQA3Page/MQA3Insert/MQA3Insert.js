import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ ใช้ axios เพื่อเรียก API
import "./MQA3Insert.css";

const MQA3Insert = () => {
  const navigate = useNavigate();
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

  const [loading, setLoading] = useState(false);

  // ✅ โหลดข้อมูลจาก localStorage หรือ sessionStorage
  useEffect(() => {
    const savedData = localStorage.getItem("mqa3_course_data");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData)); // ✅ แปลง JSON เป็น Object ก่อนเซ็ตค่า
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  // ✅ บันทึกข้อมูลลง Local Storage ทุกครั้งที่ formData เปลี่ยน
  useEffect(() => {
    if (formData.courseCode) { // ✅ บันทึกเฉพาะกรณีที่มีข้อมูล
      localStorage.setItem("mqa3_course_data", JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ฟังก์ชันดึงข้อมูลจาก API
  const handleFetchData = async () => {
    if (!formData.courseCode.trim()) {
      alert("กรุณากรอกรหัสวิชาก่อนดึงข้อมูล");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`http://127.0.0.1:5000/course/${formData.courseCode}`);
      console.log("API Response:", response.data); // 🔍 Debug ตรงนี้

      if (response.data) {
        setFormData({
          ...formData,
          courseName: response.data.course_name || "",
          credit: response.data.credit_details || "",
          curriculum: response.data.curriculum_detail || "",
          major: response.data.category_type || "",
          instructor: response.data.teacher_name || "",
          semester: response.data.semester || "",
          prerequisite: response.data.pre_requisites || "",
          corequisite: response.data.co_requisites || "",
          location: response.data.location || "",
          lastUpdate: response.data.last_updated || "",
        });
      } else {
        alert("ไม่พบข้อมูลรายวิชา");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("เกิดข้อผิดพลาดในการดึงข้อมูล");
    } finally {
      setLoading(false);
    }
  };

  // ฟังก์ชันจัดการการกดปุ่มถัดไป
  const handleNext = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/mqa3-insert2");
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

        <div className="form-submit">
          <button type="button" className="fetch-btn" onClick={handleFetchData} disabled={loading}>
            {loading ? "กำลังโหลด..." : "ดึงข้อมูล"}
          </button>
          <button type="submit" className="next-btn">ถัดไป</button>
        </div>
      </form>
    </div>
  );
};

export default MQA3Insert;
