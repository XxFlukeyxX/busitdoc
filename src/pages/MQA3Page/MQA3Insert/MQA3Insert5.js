import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MQA3Insert5.css";


const MQA3Insert5 = () => {
  const navigate = useNavigate();

  // ✅ ตั้งค่าข้อมูลตารางแผนการสอนเป็น **ว่างเปล่า**
  const [teachingPlan, setTeachingPlan] = useState([]);

  // ✅ ตั้งค่าข้อมูลตารางการวัดผลเป็น **ว่างเปล่า**
  const [evaluationPlan, setEvaluationPlan] = useState([]);

  return (
    <div className="mqa3-insert5-container">
      {/* ✅ หัวข้อหลัก */}
      <h2 className="form-title-mqa3-insert5">
        หมวดที่ 5 แผนการสอนและการประเมินผล รายวิชา ปัญญาประดิษฐ์
      </h2>

      <form className="mqa3-form">
        <div className="form-container5">
          {/* ✅ หัวข้อ 1: แผนการสอน */}
          <h3>1. แผนการสอน</h3>

          <table className="teaching-plan-table">
            <thead>
              <tr>
                <th>สัปดาห์ที่</th>
                <th>หัวข้อ/รายละเอียด</th>
                <th>จำนวนชั่วโมง</th>
                <th>กิจกรรมการเรียนการสอนและสื่อที่ใช้</th>
                <th>ผู้สอน</th>
              </tr>
            </thead>
            <tbody>
              {teachingPlan.length === 0 ? (
                <tr>
                  <td colSpan="5" className="no-data">ไม่มีข้อมูล</td>
                </tr>
              ) : (
                teachingPlan.map((row, index) => (
                  <tr key={index}>
                    <td>{row.week}</td>
                    <td className="text-left">{row.topic}</td>
                    <td>{row.hours}</td>
                    <td className="text-left">{row.activities}</td>
                    <td>{row.instructor}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* ✅ หัวข้อ 2: แผนการประเมินความรู้ */}
          <h3>2. แผนการประเมินความรู้</h3>

          {/* ✅ หัวข้อย่อย 2.1 การวัดผล */}
          <h4>2.1 การวัดผล</h4>

          <table className="evaluation-plan-table">
            <thead>
              <tr>
                <th>กิจกรรมที่</th>
                <th>ผลการเรียนรู้</th>
                <th>วิธีการประเมิน</th>
                <th>สัปดาห์ที่ประเมิน</th>
                <th>สัดส่วนการประเมินผล</th>
              </tr>
            </thead>
            <tbody>
              {evaluationPlan.length === 0 ? (
                <tr>
                  <td colSpan="5" className="no-data">ไม่มีข้อมูล</td>
                </tr>
              ) : (
                evaluationPlan.map((row, index) => (
                  <tr key={index}>
                    <td>{row.activity}</td>
                    <td className="text-left">{row.learningOutcome}</td>
                    <td className="text-left">{row.evaluationMethod}</td>
                    <td>{row.evaluationWeek}</td>
                    <td>{row.evaluationWeight}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* ✅ หัวข้อย่อย 2.2 เกณฑ์ค่าระดับคะแนน */}
          <h4>2.2 เกณฑ์ค่าระดับคะแนน</h4>

          <table className="grading-table">
            <thead>
              <tr>
                <th>ช่วงคะแนน</th>
                <th>ค่าระดับ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>80-100</td>
                <td>A</td>
              </tr>
              <tr>
                <td>75-79</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>70-74</td>
                <td>B</td>
              </tr>
              <tr>
                <td>65-69</td>
                <td>C+</td>
              </tr>
              <tr>
                <td>60-64</td>
                <td>C</td>
              </tr>
              <tr>
                <td>55-59</td>
                <td>D+</td>
              </tr>
              <tr>
                <td>50-54</td>
                <td>D</td>
              </tr>
              <tr>
                <td>0-49</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>

          {/* ✅ หมายเหตุ */}
          <p className="grading-note">
            <strong>หมายเหตุ :</strong> กำหนดการเรียนการสอนตามแผนประเมินผลการเรียนรู้นี้อาจเปลี่ยนแปลงได้ตามประกาศของมหาวิทยาลัย
            และ/หรือข้อตกลงระหว่างผู้เรียนกับผู้สอนของแต่ละวิชาเขต
          </p>
        </div>

        {/* ✅ ปุ่มย้อนกลับ & ถัดไป */}
        <div className="button-container5">
          <button type="button" className="back-btn5" onClick={() => navigate("/mqa3-insert4")}>
            ย้อนกลับ
          </button>
          <button type="button" className="next-btn5" onClick={() => navigate("/mqa3-insert6")}>
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
};

export default MQA3Insert5;
