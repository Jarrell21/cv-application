import { useState } from "react";
import PropTypes from "prop-types";

function EducationInput({ data, setData }) {
  const [mode, setMode] = useState({ action: "", modeData: "" });

  return (
    <div className="side-education">
      <h3>Education</h3>
      {mode.action == "add" ? (
        <>
          <button>Submit</button>
          <button>Cancel</button>
        </>
      ) : mode.action == "edit" ? (
        <>
          <button>Submit</button>
          <button>Cancel</button>
        </>
      ) : (
        <>
          {data.education &&
            data.education.map((education) => {
              return <p key={education.id}>{education.schoolName}</p>;
            })}
          <button>Add education</button>
        </>
      )}
    </div>
  );
}

EducationInput.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
  visible: PropTypes.any,
  handleAddButton: PropTypes.any,
};

export default EducationInput;
