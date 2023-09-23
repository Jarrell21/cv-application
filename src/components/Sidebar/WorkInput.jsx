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
    <div className="side-work-exp">
      <h3>Work Experience</h3>
      {mode.action == "add" ? (
        <AddWork setMode={setMode} data={data} setData={setData} />
      ) : mode.action == "edit" ? (
        <EditWork mode={mode} setMode={setMode} data={data} setData={setData} />
      ) : (
        <>
          {data.workExperience &&
            data.workExperience.map((work) => {
              return (
                <p
                  key={work.id}
                  className="work"
                  onClick={() => editWorkExperience(work)}
                >
                  {work.companyName}
                </p>
              );
            })}
          <button onClick={addWorkExperience}>Add work experience</button>
        </>
      )}
    </div>
  );
}

WorkInput.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default WorkInput;
