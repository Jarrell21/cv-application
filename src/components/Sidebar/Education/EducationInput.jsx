import { useState } from "react";
import PropTypes from "prop-types";
import AddEducation from "./AddEducation";
import EditEducation from "./EditEducation";

function EducationInput({ data, setData }) {
  const [mode, setMode] = useState({ action: "", modeData: "" });

  const addEducation = () => {
    setMode({ action: "add" });
  };

  const editEducation = (education) => {
    setMode({ action: "edit", modeData: education });
  };

  return (
    <div className="side-education">
      <h3 className="section-header">Education</h3>
      {mode.action == "add" ? (
        <AddEducation setData={setData} data={data} setMode={setMode} />
      ) : mode.action == "edit" ? (
        <EditEducation
          data={data}
          setData={setData}
          mode={mode}
          setMode={setMode}
        />
      ) : (
        <>
          {data.education &&
            data.education.map((education) => {
              return (
                <p
                  key={education.id}
                  onClick={() => editEducation(education)}
                  className="educ"
                >
                  {education.schoolName}
                </p>
              );
            })}
          <button onClick={addEducation}>Add education</button>
        </>
      )}
    </div>
  );
}

EducationInput.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default EducationInput;
