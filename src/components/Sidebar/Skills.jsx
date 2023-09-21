import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function Skills({ data, setData }) {
  const [mode, setMode] = useState({ action: "", skillId: "", skillName: "" });

  const addSkill = () => {
    setMode({ action: "add", skillId: "", skillName: "" });
  };

  const editSkill = (skillId, skillName) => {
    setMode({ action: "edit", skillId: skillId, skillName: skillName });
  };

  const exitInput = () => {
    const skillInput = document.getElementById("skill-input");

    skillInput.value = "";
    setMode("");
  };

  const saveNewSkill = () => {
    const skillName = document.getElementById("skill-input").value;
    const skillId = uuidv4();

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        skills: [
          ...data.personalInfo.skills,
          { id: skillId, skillName: skillName },
        ],
      },
    });

    exitInput();
  };

  const saveEditedSkill = (skillId) => {
    const skillName = document.getElementById("skill-input").value;
    const newSkills = [...data.personalInfo.skills].map((skill) => {
      if (skill.id == skillId) {
        skill.skillName = skillName;
      }

      return { id: skill.id, skillName: skill.skillName };
    });

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        skills: newSkills,
      },
    });

    exitInput();
  };

  const deleteSkill = (skillId) => {
    const newSkills = [...data.personalInfo.skills].filter(
      (skill) => skill.id != skillId
    );

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        skills: newSkills,
      },
    });

    exitInput();
  };

  return (
    <div className="side-skills">
      <h3>Skills</h3>
      {mode.action == "add" ? (
        <div className="add-skill">
          <input className="input" id="skill-input" name="skill" type="text" />
          <button onClick={saveNewSkill}>Save</button>
          <button onClick={exitInput}>Cancel</button>
        </div>
      ) : mode.action == "edit" ? (
        <div className="edit-skill">
          <input
            className="input"
            id="skill-input"
            name="skill"
            type="text"
            defaultValue={mode.skillName}
          />
          <button onClick={() => saveEditedSkill(mode.skillId)}>Save</button>
          <button onClick={() => deleteSkill(mode.skillId)}>Delete</button>
          <button onClick={exitInput}>Cancel</button>
        </div>
      ) : (
        <>
          {data.personalInfo.skills.map((skill) => (
            <p
              key={skill.id}
              className="skill"
              data-skill-id={skill.id}
              onClick={() => editSkill(skill.id, skill.skillName)}
            >
              {skill.skillName}
            </p>
          ))}
          <button onClick={addSkill}>Add skill</button>
        </>
      )}
    </div>
  );
}

Skills.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default Skills;
