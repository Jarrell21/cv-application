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
    <>
      <h2 className="accordion-header">
        <button
          className="accordion-button fw-bold collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Skills
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionPanelsStayOpenExample"
      >
        <div className="accordion-body">
          {mode.action == "add" ? (
            <div className="input-group add-skill">
              <div className="form-floating mb-3">
                <input
                  className="input form-control"
                  id="skill-input"
                  name="skill"
                  type="text"
                  placeholder="Skill name"
                />
                <label htmlFor="floatingInput">Skill name</label>
              </div>
              <div
                className="btn-group w-100"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  onClick={saveNewSkill}
                  className="btn btn-outline-primary"
                  type="button"
                >
                  Save
                </button>
                <button
                  onClick={exitInput}
                  className="btn btn-outline-secondary"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : mode.action == "edit" ? (
            <div className="edit-skill">
              <div className="form-floating mb-3">
                <input
                  className="input form-control"
                  id="skill-input"
                  name="skill"
                  type="text"
                  placeholder="name@example.com"
                  defaultValue={mode.skillName}
                />
                <label htmlFor="floatingInput">Skill name</label>
              </div>
              <div
                className="btn-group w-100"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => saveEditedSkill(mode.skillId)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deleteSkill(mode.skillId)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={exitInput}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
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
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={addSkill}
              >
                Add skill
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

Skills.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Skills;
