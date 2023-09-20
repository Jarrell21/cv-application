import React from "react";
import InputGroup from "./InputGroup";
import PropTypes from "prop-types";

function EducationInput({ data, setData, visible, handleAddButton }) {
  const educationInputList = [
    {
      groupName: "education",
      label: "School name",
      type: "text",
      name: "schoolName",
    },
    {
      groupName: "education",
      label: "Attainment",
      type: "text",
      name: "attainment",
    },
    { groupName: "education", label: "Course", type: "text", name: "course" },
    {
      groupName: "education",
      label: "Date graduated",
      type: "date",
      name: "dateGraduated",
    },
  ];

  return (
    <div className="side-education">
      <h3>Education</h3>
      {data.education &&
        data.education.map((education) => {
          return (
            <div key={education} className="education">
              <span>{education.schoolName}</span>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          );
        })}
      {visible["education"] ? (
        <>
          <InputGroup
            group={educationInputList}
            data={data}
            setData={setData}
          />
          <button>Submit</button>
          <button onClick={() => handleAddButton("education")}>Cancel</button>
        </>
      ) : (
        <button onClick={() => handleAddButton("education")}>
          Add education
        </button>
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
