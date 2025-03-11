import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Add axios for API calls
import "./MQA3Insert5.css";

const MQA3Insert5 = () => {
  const navigate = useNavigate();

  // Set initial state for teaching plan and evaluation plan
  const [teachingPlan, setTeachingPlan] = useState([]);
  const [evaluationPlan, setEvaluationPlan] = useState([]);

  // Function to fetch data from the API
  const handleFetchData = async () => {
    const courseCode = localStorage.getItem("courseCode"); // Get course_code from localStorage

    if (!courseCode) {
      alert("กรุณากรอกรหัสวิชา");
      return;
    }

    try {
      // Fetch teaching plan and evaluation plan data from the backend API
      const response = await axios.get("http://127.0.0.1:5000/course-plan", {
        params: { course_code: courseCode },
      });

      console.log("Teaching Plan Response:", response.data.teaching_plan); // Log the response to check the data
      console.log("Evaluation Plan Response:", response.data.assessment_plan); // Log the response to check the data

      // Update state with fetched data
      setTeachingPlan(response.data.teaching_plan || []);
      setEvaluationPlan(response.data.assessment_plan || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="mqa3-insert5-container">
      <h2 className="form-title-mqa3-insert5">
        หมวดที่ 5 แผนการสอนและการประเมินผล รายวิชา ปัญญาประดิษฐ์
      </h2>

      <form className="mqa3-form">
        <div className="form-container5">
          {/* Teaching Plan Table */}
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
                    <td>{row.week_number}</td> {/* แสดงสัปดาห์ที่ */}
                    <td className="text-left">{row.teaching_plan_description}</td> {/* แสดงหัวข้อ/รายละเอียด */}
                    <td>{row.total_hours}</td> {/* แสดงจำนวนชั่วโมง */}
                    <td className="text-left">{row.activity_performed}</td> {/* แสดงกิจกรรมการเรียนการสอนและสื่อที่ใช้ */}
                    <td>{row.teacher_firstname} {row.teacher_surname}</td> {/* แสดงผู้สอน */}
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Evaluation Plan Table */}
          <h3>2. แผนการประเมินความรู้</h3>

          {/* Subsection 2.1 Evaluation */}
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
                    <td>{row.assessment_plan_id}</td> {/* แสดงกิจกรรมที่ */}
                    <td className="text-left">{row.learning_outcome}</td> {/* แสดงผลการเรียนรู้ */}
                    <td className="text-left">{row.evaluation_method}</td> {/* แสดงวิธีการประเมิน */}
                    <td>{row.assessment_week}</td> {/* แสดงสัปดาห์ที่ประเมิน */}
                    <td>{row.assessment_weight}</td> {/* แสดงสัดส่วนการประเมินผล */}
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Grading Table */}
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

          {/* Notes */}
          <p className="grading-note">
            <strong>หมายเหตุ :</strong> กำหนดการเรียนการสอนตามแผนประเมินผลการเรียนรู้นี้อาจเปลี่ยนแปลงได้ตามประกาศของมหาวิทยาลัย
            และ/หรือข้อตกลงระหว่างผู้เรียนกับผู้สอนของแต่ละวิชาเขต
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="button-container5">
          <button type="button" className="back-btn5" onClick={() => navigate("/mqa3-insert4")}>
            ย้อนกลับ
          </button>
          <button type="button" className="fetch-btn5" onClick={handleFetchData}>
            ดึงข้อมูล
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
