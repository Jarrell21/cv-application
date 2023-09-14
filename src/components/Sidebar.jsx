import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Sidebar.css";

function Sidebar({ data, setData }) {
  const personalInfoinputList = [
    {
      groupName: "generalInfo",
      label: "Full name",
      type: "text",
      name: "fullName",
    },
    {
      groupName: "generalInfo",
      label: "Birthdate",
      type: "date",
      name: "birthDate",
    },
    {
      groupName: "generalInfo",
      label: "Address",
      type: "text",
      name: "address",
    },
    {
      groupName: "generalInfo",
      label: "Mobile number",
      type: "text",
      name: "mobile",
    },
    { groupName: "generalInfo", label: "Email", type: "email", name: "email" },
    {
      groupName: "generalInfo",
      label: "Skills",
      type: "text",
      name: "skills",
      isArray: true,
    },
    {
      groupName: "generalInfo",
      label: "Languages",
      type: "text",
      name: "languages",
      isArray: true,
    },
  ];

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

  const [visible, setVisible] = useState(false);

  const handleAddButton = (group) => {
    setVisible((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  return (
    <aside className="side">
      <div className="side-personal-info">
        <h3>Personal Information</h3>
        <InputGroup
          group={personalInfoinputList}
          data={data}
          setData={setData}
        />
        <button>Edit</button>
      </div>
      <div className="side-work-exp">
        <h3>Work Experience</h3>
        {data.workExperience &&
          data.workExperience.map((work) => {
            return (
              <div key={work} className="sidebar-item">
                {work.companyName}
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
      <div className="side-education">
        <h3>Education</h3>
        {data.education &&
          data.education.map((education) => {
            return (
              <div key={education} className="sidebar-item">
                {education.schoolName}
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
    </aside>
  );
}

function InputGroup({ group, data, setData }) {
  return (
    <div className="input-group">
      {group.map((input) => {
        return (
          <div key={input.label} className="input">
            <label htmlFor={input.name}>{input.label}</label>
            {input.type == "date" ? (
              Array.isArray(data[input.groupName]) ? (
                data[input.groupName].map((item) => {
                  return (
                    <input
                      key={item}
                      title={input.name}
                      type={input.type}
                      name={input.name}
                      defaultValue={
                        new Date(item[input.name]).toISOString().split("T")[0]
                      }
                    />
                  );
                })
              ) : (
                <input
                  title={input.name}
                  type={input.type}
                  name={input.name}
                  defaultValue={
                    new Date(data[input.groupName][input.name])
                      .toISOString()
                      .split("T")[0]
                  }
                />
              )
            ) : input.isArray ? (
              <>
                {data[input.groupName][input.name] &&
                  data[input.groupName][input.name].map((element) => {
                    return (
                      <input
                        key={element}
                        title={input.name}
                        type={input.type}
                        name={input.name}
                        defaultValue={element}
                      />
                    );
                  })}
                <button>Add</button>
              </>
            ) : (
              <input
                title={input.name}
                type={input.type}
                name={input.name}
                defaultValue={data.generalInfo[input.name]}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

Sidebar.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

InputGroup.propTypes = {
  group: PropTypes.any,
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default Sidebar;
