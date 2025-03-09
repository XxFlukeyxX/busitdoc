import React, { useEffect, useState } from "react";
import axios from "axios"; // ใช้ axios เพื่อดึงข้อมูลจาก API
import "../../pages/MQA5Page/MQA5.css"; // เรียกใช้ CSS

const MQA5 = () => {
  const [data, setData] = useState([]); // สร้าง state สำหรับเก็บข้อมูล
  const [loading, setLoading] = useState(false); // เพิ่มสถานะการโหลด

  // ฟังก์ชันดึงข้อมูลรายวิชา
  const fetchSubjects = () => {
    setLoading(true); // เริ่มโหลดข้อมูล
    axios
      .get("https://your-api-url.com/mqa5-data")
      .then((response) => {
        setData(response.data); // กำหนดข้อมูลที่ดึงมา
        setLoading(false); // หยุดโหลด
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // หยุดโหลดหากเกิดข้อผิดพลาด
      });
  };

  return (
    <div className="mqa5-container">
      {/* ✅ ส่วนหัวของเอกสาร */}
      <h2 className="table-title-mqa5">
        แบบบันทึกข้อมูล มคอ. 5 <br />
        ประจำภาคการศึกษาที่ 2 ปีการศึกษา 2567
      </h2>

      {/* ✅ กล่องของตาราง */}
      <div className="table-container-mqa5">
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>รหัสวิชา</th>
              <th>ชื่อรายวิชา</th>
              <th></th> {/* ✅ คอลัมน์ว่างเพื่อความสวยงาม */}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td></td> {/* ✅ คอลัมน์ว่างเพื่อความสมดุล */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data-text">ยังไม่มีข้อมูลรายวิชา</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* ✅ ปุ่มดึงรายวิชา */}
      </div>
      <button className="fetch-subjects-btn" onClick={fetchSubjects} disabled={loading}>
          {loading ? "กำลังโหลด..." : "ดึงรายวิชา"}
        </button>
    </div>
  );
};

export default MQA5;
