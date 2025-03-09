import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MQA3Insert7.css"; // ใช้ไฟล์ CSS แยกสำหรับสไตล์

const MQA3Insert7 = () => {
  const navigate = useNavigate();

  // ✅ ข้อ 1: กลยุทธ์การประเมินประสิทธิผลของรายวิชาโดยนักศึกษา
  const [evaluationStrategies, setEvaluationStrategies] = useState([""]);

  const addEvaluationStrategy = () => {
    setEvaluationStrategies([...evaluationStrategies, ""]);
  };

  const updateEvaluationStrategy = (index, value) => {
    const updatedStrategies = [...evaluationStrategies];
    updatedStrategies[index] = value;
    setEvaluationStrategies(updatedStrategies);
  };

  const removeEvaluationStrategy = (index) => {
    if (evaluationStrategies.length > 1) {
      setEvaluationStrategies(evaluationStrategies.filter((_, i) => i !== index));
    }
  };

  // ✅ ข้อ 2: กลยุทธ์การเรียนการสอน
  const [teachingStrategies, setTeachingStrategies] = useState([""]);

  const addTeachingStrategy = () => {
    setTeachingStrategies([...teachingStrategies, ""]);
  };

  const updateTeachingStrategy = (index, value) => {
    const updatedStrategies = [...teachingStrategies];
    updatedStrategies[index] = value;
    setTeachingStrategies(updatedStrategies);
  };

  const removeTeachingStrategy = (index) => {
    if (teachingStrategies.length > 1) {
      setTeachingStrategies(teachingStrategies.filter((_, i) => i !== index));
    }
  };

  // ✅ ข้อ 3: การปรับปรุงรายวิชา
  const [courseImprovements, setCourseImprovements] = useState([""]);

  const addCourseImprovement = () => {
    setCourseImprovements([...courseImprovements, ""]);
  };

  const updateCourseImprovement = (index, value) => {
    const updatedImprovements = [...courseImprovements];
    updatedImprovements[index] = value;
    setCourseImprovements(updatedImprovements);
  };

  const removeCourseImprovement = (index) => {
    if (courseImprovements.length > 1) {
      setCourseImprovements(courseImprovements.filter((_, i) => i !== index));
    }
  };

  // ✅ ข้อ 4: การทวนสอบมาตรฐานผลสัมฤทธิ์ของนักศึกษาในรายวิชา
  const [assessmentReviews, setAssessmentReviews] = useState([""]);

  const addAssessmentReview = () => {
    setAssessmentReviews([...assessmentReviews, ""]);
  };

  const updateAssessmentReview = (index, value) => {
    const updatedReviews = [...assessmentReviews];
    updatedReviews[index] = value;
    setAssessmentReviews(updatedReviews);
  };

  const removeAssessmentReview = (index) => {
    if (assessmentReviews.length > 1) {
      setAssessmentReviews(assessmentReviews.filter((_, i) => i !== index));
    }
  };

  // ✅ ข้อ 5: การดำเนินการทบทวนและการวางแผนปรับปรุง (ไม่มีปุ่มเพิ่ม)
  const [courseReviewPlan, setCourseReviewPlan] = useState("");

  return (
    <div className="mqa3-insert7-container">
      {/* ✅ หัวข้อหลัก */}
      <h2 className="form-title-mqa3-insert7">
        หมวดที่ 7 การประเมินและการปรับปรุงการดำเนินการของรายวิชา รายวิชา ปัญญาประดิษฐ์
      </h2>

      <form className="mqa3-form">
  <div className="form-container7">
    {/* ✅ คอลัมน์ซ้าย: ข้อ 1-3 */}
    <div className="left-column">
      {/* ✅ ข้อ 1 */}
      <div className="form-section7">
        <div className="section-header7">
          <h3>1. กลยุทธ์การประเมินประสิทธิผลของรายวิชาโดยนักศึกษา</h3>
          <button type="button" className="add-btn" onClick={addEvaluationStrategy}>+</button>
        </div>
        {evaluationStrategies.map((strategy, index) => (
          <div key={index} className="input-row7">
            <input type="text" className="input-text7" placeholder="ใส่กลยุทธ์การประเมิน"
              value={strategy} onChange={(e) => updateEvaluationStrategy(index, e.target.value)} />
            {evaluationStrategies.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeEvaluationStrategy(index)}>✖</button>
            )}
          </div>
        ))}
      </div>

      {/* ✅ ข้อ 2 */}
      <div className="form-section7">
        <div className="section-header7">
          <h3>2. กลยุทธ์การเรียนการสอน</h3>
          <button type="button" className="add-btn" onClick={addTeachingStrategy}>+</button>
        </div>
        {teachingStrategies.map((strategy, index) => (
          <div key={index} className="input-row7">
            <input type="text" className="input-text7" placeholder="ใส่กลยุทธ์การเรียนการสอน"
              value={strategy} onChange={(e) => updateTeachingStrategy(index, e.target.value)} />
            {teachingStrategies.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeTeachingStrategy(index)}>✖</button>
            )}
          </div>
        ))}
      </div>

      {/* ✅ ข้อ 3 */}
      <div className="form-section7">
        <div className="section-header7">
          <h3>3. การปรับปรุงรายวิชา</h3>
          <button type="button" className="add-btn" onClick={addCourseImprovement}>+</button>
        </div>
        {courseImprovements.map((improvement, index) => (
          <div key={index} className="input-row7">
            <input type="text" className="input-text7" placeholder="ใส่ข้อมูลการปรับปรุงรายวิชา"
              value={improvement} onChange={(e) => updateCourseImprovement(index, e.target.value)} />
            {courseImprovements.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeCourseImprovement(index)}>✖</button>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* ✅ คอลัมน์ขวา: ข้อ 4-5 */}
    <div className="right-column">
      {/* ✅ ข้อ 4 */}
      <div className="form-section7">
        <div className="section-header7">
          <h3>4. การทวนสอบมาตรฐานผลสัมฤทธิ์ของนักศึกษาในรายวิชา</h3>
          <button type="button" className="add-btn" onClick={addAssessmentReview}>+</button>
        </div>
        {assessmentReviews.map((review, index) => (
          <div key={index} className="input-row7">
            <input type="text" className="input-text7" placeholder="ใส่รายละเอียดการทวนสอบ"
              value={review} onChange={(e) => updateAssessmentReview(index, e.target.value)} />
            {assessmentReviews.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeAssessmentReview(index)}>✖</button>
            )}
          </div>
        ))}
      </div>

      {/* ✅ ข้อ 5 */}
      <div className="form-section7">
        <h3>5. การดำเนินการทบทวนและการวางแผนปรับปรุง</h3>
        <textarea className="input-textarea7" placeholder="ใส่แผนการปรับปรุง"
          value={courseReviewPlan} onChange={(e) => setCourseReviewPlan(e.target.value)}></textarea>
      </div>
    </div>
  </div>

  {/* ✅ ปุ่มย้อนกลับ & บันทึกและส่งเอกสาร */}
  <div className="button-container7">
    <button type="button" className="back-btn7" onClick={() => navigate("/mqa3-insert6")}>
      ย้อนกลับ
    </button>
    <button type="button" className="save-btn7" onClick={() => navigate("/mqa3-upload")}>
      บันทึกและส่งเอกสาร
    </button>
  </div>
</form>


    </div>
  );
};

export default MQA3Insert7;
