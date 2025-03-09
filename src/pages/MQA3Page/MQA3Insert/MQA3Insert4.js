import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MQA3Insert4.css"; // ✅ ใช้ไฟล์ CSS แยก

const MQA3Insert4 = () => {
  const navigate = useNavigate();

  // ✅ เก็บค่าที่ผู้ใช้กรอกในตาราง
  const [ethicsData, setEthicsData] = useState([
    { id: 1, learningOutcome: "1.2 มีวินัย ตรงต่อเวลา และมีความรับผิดชอบต่อตนเองและสังคม", teachingMethod: "", assessmentMethod: "" },
    { id: 2, learningOutcome: "1.3 มีภาวะความเป็นผู้นำและผู้ตาม สามารถทำงานเป็นทีม และแก้ไขข้อขัดแย้งและตัดสินใจตามความสำคัญ", teachingMethod: "", assessmentMethod: "" },
    { id: 3, learningOutcome: "1.6 สามารถวิเคราะห์ผลกระทบจากการใช้คอมพิวเตอร์ต่อบุคคล องค์กร และสังคมได้", teachingMethod: "", assessmentMethod: "" },
  ]);

  const [knowledgeData, setKnowledgeData] = useState([
    { id: 4, learningOutcome: "2.1 เข้าใจและสามารถอธิบายแนวคิดหลักของปัญญาประดิษฐ์", teachingMethod: "", assessmentMethod: "" },
    { id: 5, learningOutcome: "2.2 มีทักษะในการประยุกต์ใช้ปัญญาประดิษฐ์ในสาขาวิชาต่างๆ", teachingMethod: "", assessmentMethod: "" },
    { id: 6, learningOutcome: "2.3 สามารถวิเคราะห์และประเมินผลของเทคโนโลยีปัญญาประดิษฐ์ต่อสังคมและเศรษฐกิจ", teachingMethod: "", assessmentMethod: "" },
  ]);

  const [cognitiveSkillsData, setCognitiveSkillsData] = useState([
    { id: 7, learningOutcome: "3.1 มีทักษะการคิดวิเคราะห์และแก้ปัญหาเชิงสร้างสรรค์", teachingMethod: "", assessmentMethod: "" },
    { id: 8, learningOutcome: "3.2 สามารถบูรณาการความรู้เพื่อพัฒนาโซลูชันที่เหมาะสม", teachingMethod: "", assessmentMethod: "" },
    { id: 9, learningOutcome: "3.3 ประเมินผลและวิเคราะห์ผลกระทบของปัญญาประดิษฐ์ในสังคม", teachingMethod: "", assessmentMethod: "" },
  ]);

  const [interpersonalSkillsData, setInterpersonalSkillsData] = useState([
    { id: 10, learningOutcome: "4.1 มีทักษะการทำงานเป็นทีมและการสื่อสารที่มีประสิทธิภาพ", teachingMethod: "", assessmentMethod: "" },
    { id: 11, learningOutcome: "4.2 สามารถทำงานร่วมกับผู้อื่นในสภาพแวดล้อมที่หลากหลาย", teachingMethod: "", assessmentMethod: "" },
    { id: 12, learningOutcome: "4.3 มีความรับผิดชอบต่อหน้าที่การงานและพัฒนาตนเองอย่างต่อเนื่อง", teachingMethod: "", assessmentMethod: "" },
  ]);

  const [numericalSkillsData, setNumericalSkillsData] = useState([
    { id: 13, learningOutcome: "5.1 มีทักษะการใช้เครื่องมือวิเคราะห์ทางสถิติในการตัดสินใจ", teachingMethod: "", assessmentMethod: "" },
    { id: 14, learningOutcome: "5.2 สามารถสื่อสารผลการวิเคราะห์เชิงตัวเลขได้อย่างถูกต้องและเข้าใจง่าย", teachingMethod: "", assessmentMethod: "" },
    { id: 15, learningOutcome: "5.3 ใช้เทคโนโลยีสารสนเทศในการสนับสนุนกระบวนการทำงานอย่างมีประสิทธิภาพ", teachingMethod: "", assessmentMethod: "" },
  ]);

  const [professionalSkillsData, setProfessionalSkillsData] = useState([
    { id: 16, learningOutcome: "6.1 มีความเชี่ยวชาญในการปฏิบัติงานในสาขาวิชาชีพ", teachingMethod: "", assessmentMethod: "" },
    { id: 17, learningOutcome: "6.2 ปฏิบัติตามจรรยาบรรณวิชาชีพและมาตรฐานที่เกี่ยวข้อง", teachingMethod: "", assessmentMethod: "" },
    { id: 18, learningOutcome: "6.3 สามารถแก้ปัญหาเฉพาะทางในสาขาวิชาชีพได้อย่างเป็นระบบ", teachingMethod: "", assessmentMethod: "" },
  ]);

  // ✅ ฟังก์ชันอัพเดตข้อมูลที่กรอกในตาราง
  const handleInputChange = (index, field, value, category) => {
    let newData;
    switch (category) {
      case "ethics":
        newData = [...ethicsData];
        newData[index][field] = value;
        setEthicsData(newData);
        break;
      case "knowledge":
        newData = [...knowledgeData];
        newData[index][field] = value;
        setKnowledgeData(newData);
        break;
      case "cognitiveSkills":
        newData = [...cognitiveSkillsData];
        newData[index][field] = value;
        setCognitiveSkillsData(newData);
        break;
      case "interpersonalSkills":
        newData = [...interpersonalSkillsData];
        newData[index][field] = value;
        setInterpersonalSkillsData(newData);
        break;
      case "numericalSkills":
        newData = [...numericalSkillsData];
        newData[index][field] = value;
        setNumericalSkillsData(newData);
        break;
      case "professionalSkills":
        newData = [...professionalSkillsData];
        newData[index][field] = value;
        setProfessionalSkillsData(newData);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mqa3-insert4-container">
      <h2 className="form-title-mqa3-insert4">
        หมวดที่ 4 กำหนดการพัฒนาผลการเรียนรู้ของนักศึกษา รายวิชา ปัญญาประดิษฐ์
      </h2>

      <form className="mqa3-form">
        <div className="form-container4">
          {/* ✅ แสดงตารางสำหรับแต่ละหมวดหมู่ */}
          {[
            { label: "1. คุณธรรม จริยธรรม", data: ethicsData, category: "ethics" },
            { label: "2. ความรู้", data: knowledgeData, category: "knowledge" },
            { label: "3. ทักษะทางปัญญา", data: cognitiveSkillsData, category: "cognitiveSkills" },
            { label: "4. ทักษะความสัมพันธ์ระหว่างบุคคลและความรับผิดชอบ", data: interpersonalSkillsData, category: "interpersonalSkills" },
            { label: "5. ทักษะการวิเคราะห์เชิงตัวเลข การสื่อสาร และการใช้เทคโนโลยีสารสนเทศ", data: numericalSkillsData, category: "numericalSkills" },
            { label: "6. ทักษะด้านการปฏิบัติในวิชาชีพ (ถ้ามี)", data: professionalSkillsData, category: "professionalSkills" },
          ].map((section, secIndex) => (
            <div key={secIndex}>
              <label className="form-label">{section.label}</label>
              <table className="learning-table">
                <thead>
                  <tr>
                    <th>✔</th>
                    <th>ผลการเรียนรู้</th>
                    <th>วิธีการสอน</th>
                    <th>วิธีการประเมินผล</th>
                  </tr>
                </thead>
                <tbody>
                  {section.data.map((row, index) => (
                    <tr key={row.id}>
                      <td><input type="radio" name={`selectedOutcome-${section.category}`} /></td>
                      <td>{row.learningOutcome}</td>
                      <td><textarea className="input-cell" placeholder="กรุณากรอกข้อความ"></textarea></td>
                      <td><textarea className="input-cell" placeholder="กรุณากรอกข้อความ"></textarea></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          </div>
        {/* ✅ ปุ่มย้อนกลับ & ถัดไป */}
        <div className="button-container4">
          <button className="back-btn4" onClick={() => navigate("/mqa3-insert3")}>
            ย้อนกลับ
          </button>
          <button className="next-btn4" onClick={() => navigate("/mqa3-insert5")}>
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
};

export default MQA3Insert4;
