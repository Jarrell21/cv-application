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
    <>
      <h2 className="accordion-header">
        <button
          className="accordion-button fw-bold collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFour"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFour"
        >
          Work Experience
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseFour"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionPanelsStayOpenExample"
      >
        <div className="accordion-body">
          {mode.action == "add" ? (
            <AddWork setMode={setMode} data={data} setData={setData} />
          ) : mode.action == "edit" ? (
            <EditWork
              mode={mode}
              setMode={setMode}
              data={data}
              setData={setData}
            />
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
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={addWorkExperience}
              >
                Add work experience
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

WorkInput.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default WorkInput;
