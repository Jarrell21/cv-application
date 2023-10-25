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
    <>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFive"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFive"
        >
          Education
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseFive"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionPanelsStayOpenExample"
      >
        <div className="accordion-body">
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
              <div className="list-group">
                {data.education &&
                  data.education.map((education) => {
                    return (
                      <button
                        key={education.id}
                        onClick={() => editEducation(education)}
                        type="button"
                        className="list-group-item list-group-item-action mb-2 educ"
                        aria-current="true"
                      >
                        {education.schoolName}
                      </button>
                    );
                  })}
              </div>
              <button onClick={addEducation}>Add education</button>
            </>
          )}
        </div>
      </div>
    </>
    // <div className="side-education">
    //   <h5 className="section-header">Education</h5>
    // {mode.action == "add" ? (
    //   <AddEducation setData={setData} data={data} setMode={setMode} />
    // ) : mode.action == "edit" ? (
    //   <EditEducation
    //     data={data}
    //     setData={setData}
    //     mode={mode}
    //     setMode={setMode}
    //   />
    // ) : (
    //   <>
    //     <div className="list-group">
    //       {data.education &&
    //         data.education.map((education) => {
    //           return (
    //             <button
    //               key={education.id}
    //               onClick={() => editEducation(education)}
    //               type="button"
    //               className="list-group-item list-group-item-action mb-2 educ"
    //               aria-current="true"
    //             >
    //               {education.schoolName}
    //             </button>
    //           );
    //         })}
    //     </div>
    //     <button onClick={addEducation}>Add education</button>
    //   </>
    // )}
    // </div>
  );
}

EducationInput.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default EducationInput;
