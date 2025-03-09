import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MQA3Insert2.css"; // ✅ ใช้ไฟล์ CSS แยก

const MQA3Insert2 = () => {
  const navigate = useNavigate();
  const [goals, setGoals] = useState([""]);
  const [objective, setObjective] = useState("");

  // ✅ เพิ่มช่องใหม่
  const addGoal = () => {
    setGoals([...goals, ""]);
  };

  // ✅ อัพเดตค่าในช่องป้อนข้อมูล
  const handleGoalChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  // ✅ ลบช่องข้อความที่ไม่ต้องการ
  const removeGoal = (index) => {
    if (goals.length > 1) { // ✅ ป้องกันไม่ให้ลบจนหมด
      const newGoals = goals.filter((_, i) => i !== index);
      setGoals(newGoals);
    }
  };

  return (
    <div className="mqa3-insert2-container">
      <h2 className="form-title-mqa3-insert2">
        หมวดที่ 2 แบบบันทึกข้อมูล มคอ.3 รายวิชา ปัญญาประดิษฐ์
      </h2>

      <form className="mqa3-form">
        <div className="form-container2">
          <div className="form-columns2">
            {/* ✅ คอลัมน์ซ้าย */}
            <div className="form-left2">
              <div className="goal-header">
                <label className="form-label2">1. จุดมุ่งหมายของรายวิชา</label>
                <button type="button" className="add-goal-btn" onClick={addGoal}>
                  +
                </button>
              </div>
              {goals.map((goal, index) => (
                <div key={index} className="goal-row">
                  <input
                    type="text"
                    className="input-goal"
                    placeholder="ใส่จุดมุ่งหมายของรายวิชา"
                    value={goal}
                    onChange={(e) => handleGoalChange(index, e.target.value)}
                  />
                  {goals.length > 1 && (
                    <button type="button" className="remove-goal-btn" onClick={() => removeGoal(index)}>
                      ✖
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* ✅ คอลัมน์ขวา */}
            <div className="form-right2">
              <label className="form-label">2. วัตถุประสงค์ในการพัฒนาปรับปรุงรายวิชา</label>
              <textarea
                className="input-objective"
                placeholder="ใส่วัตถุประสงค์ในการพัฒนาปรับปรุงรายวิชา"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              ></textarea>

              {/* ✅ ปุ่มอยู่ใต้ช่องวัตถุประสงค์ */}
              <div className="button-container">
                <button
                  type="button"
                  className="back-btn2"
                  onClick={() => navigate("/mqa3-insert")}
                >
                  ย้อนกลับ
                </button>
                <button
                  type="button"
                  className="next-btn2"
                  onClick={() => navigate("/mqa3-insert3")}
                >
                  ถัดไป
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MQA3Insert2;
