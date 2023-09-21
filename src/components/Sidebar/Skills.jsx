import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function Skills({ data, setData }) {
  const [addSkillMode, setaddSkillMode] = useState(false);

  const handleAddSkill = () => {
    setaddSkillMode((prev) => !prev);
  };

  const handleCancelAddSkill = () => {
    const newSkillInput = document.getElementById("new-skill");

    newSkillInput.value = "";
    setaddSkillMode((prev) => !prev);
  };

  const handleSaveSkill = () => {
    const skillValue = document.getElementById("new-skill").value;
    const skillId = uuidv4();

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        skills: [
          ...data.personalInfo.skills,
          { id: skillId, skillName: skillValue },
        ],
      },
    });

    handleCancelAddSkill();
  };

  return (
    <div className="side-skills">
      <h3>Skills</h3>
      {!addSkillMode ? (
        <>
          {data.personalInfo.skills.map((skill) => (
            <p key={skill.id} className="skill">
              {skill.skillName}
            </p>
          ))}
          <button onClick={handleAddSkill}>Add skill</button>
        </>
      ) : (
        <div className="skill">
          <input className="input" id="new-skill" name="skill" type="text" />
          <button onClick={handleSaveSkill}>Save</button>
          <button onClick={handleCancelAddSkill}>Cancel</button>
        </div>
      )}
    </div>
  );
}

Skills.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default Skills;
