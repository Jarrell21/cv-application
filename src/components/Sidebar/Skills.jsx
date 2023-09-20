import { useState } from "react";
import PropTypes from "prop-types";

function Skills({ data, setData }) {
  const [counter, setCounter] = useState(0);
  const [newSkills, setNewSkills] = useState([]);

  const handleAddSkill = () => {
    setNewSkills((prevArray) => [...prevArray, counter]);
    setCounter(counter + 1);
  };

  return (
    <div className="side-skills">
      <h3>Skills</h3>
      {data.personalInfo.skills.map((skill) => (
        <p key={skill.id} className="skill">
          {skill.skillName}
        </p>
      ))}
      {/* {newSkills.map((skill) => (
          <div key={skill} className="skill">
            <input className="input" name="skill" type="text" />
          </div>
        ))} */}
      <button onClick={handleAddSkill}>Add skill</button>
    </div>
  );
}

Skills.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default Skills;
