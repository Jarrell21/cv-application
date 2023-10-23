import { useState } from "react";
import PropTypes from "prop-types";
import AddWork from "./AddWork";
import EditWork from "./EditWork";

function WorkInput({ data, setData }) {
  const [mode, setMode] = useState({ action: "", modeData: "" });

  const addWorkExperience = () => {
    setMode({ action: "add" });
  };

  const editWorkExperience = (work) => {
    setMode({ action: "edit", modeData: work });
  };

  return (
    <div className="side-work-exp mb-3 border border-dark">
      <h5 className="section-header">Work Experience</h5>
      {mode.action == "add" ? (
        <AddWork setMode={setMode} data={data} setData={setData} />
      ) : mode.action == "edit" ? (
        <EditWork mode={mode} setMode={setMode} data={data} setData={setData} />
      ) : (
        <>
          <div className="list-group">
            {data.workExperience &&
              data.workExperience.map((work) => {
                return (
                  <button
                    key={work.id}
                    type="button"
                    className="list-group-item list-group-item-action mb-2 work"
                    aria-current="true"
                    onClick={() => editWorkExperience(work)}
                  >
                    {work.companyName}
                  </button>
                );
              })}
          </div>
          <button onClick={addWorkExperience}>Add work experience</button>
        </>
      )}
    </div>
  );
}

WorkInput.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default WorkInput;
