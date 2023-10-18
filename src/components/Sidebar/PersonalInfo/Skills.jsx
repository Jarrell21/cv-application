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
      <h3 className="section-header">Skills</h3>
      <div className="list-group">
        {data.personalInfo.skills.map((skill) => (
          <button
            key={skill.id}
            type="button"
            className="list-group-item list-group-item-action mb-2 skill"
            aria-current="true"
            onClick={() => editSkill(skill.id, skill.skillName)}
          >
            {skill.skillName}
          </button>
        ))}
      </div>

      {mode.action == "add" ? (
        <div className="input-group add-skill">
          <input
            id="skill-input"
            name="skill"
            type="text"
            className="form-control input"
            placeholder="Skill name"
            aria-label="Skill name"
          />
          <button
            onClick={saveNewSkill}
            className="btn btn-outline-success"
            type="button"
          >
            Save
          </button>
          <button
            onClick={exitInput}
            className="btn btn-outline-danger"
            type="button"
          >
            Cancel
          </button>
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
          <button onClick={addSkill}>Add skill</button>
        </>
      )}
    </div>
  );
}

Skills.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Skills;
