import React, { useEffect, useState } from "react";
import axios from "axios"; // ใช้ axios เพื่อดึงข้อมูลจาก API
import "../../pages/HomePage/Home.css"; // เรียกใช้ CSS

const Home = () => {
  const [data, setData] = useState([]); // สร้าง state สำหรับเก็บข้อมูล

  useEffect(() => {
    // ดึงข้อมูลจาก API เมื่อ component ถูกโหลด
    axios.get("https://your-api-url.com/data")
      .then(response => {
        setData(response.data); // กำหนดข้อมูลที่ดึงมา
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // ทำแค่ครั้งเดียวตอนที่ component โหลด

  return (
    <div className="home-container">
      <h2 className="table-title">รายงานสถานะการส่งเอกสาร</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>รายชื่อวิชา</th>
              <th>มคอ. 3</th>
              <th>มคอ. 4</th>
              <th>มคอ. 5</th>
              <th>มคอ. 6</th>
              <th>สถานะการส่ง</th>
              <th>สถานะเอกสาร</th>
              <th>เวลาในการส่ง</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.subject}</td>
                <td>{item.mqa3 ? "✔️" : "⭕"}</td>
                <td>{item.mqa4 ? "✔️" : "⭕"}</td>
                <td>{item.mqa5 ? "✔️" : "⭕"}</td>
                <td>{item.mqa6 ? "✔️" : "⭕"}</td>
                <td>{item.status}</td>
                <td>{item.docStatus}</td>
                <td className={item.late ? "late-submission" : ""}>{item.submissionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* กำหนดเวลาการส่ง */}
      <div className="deadline">
        <span>กำหนดเวลาการส่ง: 12 / ก.ค / 2567</span>
      </div>
    </div>
  );
};

export default Home;
