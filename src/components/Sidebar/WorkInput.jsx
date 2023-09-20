import React from "react";
import InputGroup from "./InputGroup";
import PropTypes from "prop-types";

function WorkInput({ data, setData, visible, handleAddButton }) {
  const workInputList = [
    {
      groupName: "workExperience",
      label: "Company name",
      type: "text",
      name: "companyName",
    },
    {
      groupName: "workExperience",
      label: "Start date",
      type: "date",
      name: "startDate",
    },
    {
      groupName: "workExperience",
      label: "End date",
      type: "date",
      name: "endDate",
    },
    {
      groupName: "workExperience",
      label: "Position",
      type: "text",
      name: "position",
    },
    {
      groupName: "workExperience",
      label: "Specialization",
      type: "text",
      name: "specialization",
    },
    {
      groupName: "workExperience",
      label: "Industry",
      type: "email",
      name: "industry",
    },
    {
      groupName: "workExperience",
      label: "Nature of work",
      type: "text",
      name: "natureOfWork",
      isArray: true,
    },
  ];

  return (
    <div className="side-work-exp">
      <h3>Work Experience</h3>
      {data.workExperience &&
        data.workExperience.map((work) => {
          return (
            <div key={work} className="work">
              <span>{work.companyName}</span>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          );
        })}
      {visible["work"] ? (
        <>
          <InputGroup group={workInputList} data={data} setData={setData} />
          <button>Submit</button>
          <button onClick={() => handleAddButton("work")}>Cancel</button>
        </>
      ) : (
        <button onClick={() => handleAddButton("work")}>
          Add work experience
        </button>
      )}
    </div>
  );
}

WorkInput.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
  visible: PropTypes.any,
  handleAddButton: PropTypes.any,
};

export default WorkInput;
