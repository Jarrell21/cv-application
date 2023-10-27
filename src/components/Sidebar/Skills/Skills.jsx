import { useState } from "react";
import PropTypes from "prop-types";
import AddSkill from "./AddSkill";
import EditSkill from "./EditSkill";

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
            <AddSkill data={data} setData={setData} exitInput={exitInput} />
          ) : mode.action == "edit" ? (
            <EditSkill
              data={data}
              setData={setData}
              mode={mode}
              exitInput={exitInput}
            />
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
