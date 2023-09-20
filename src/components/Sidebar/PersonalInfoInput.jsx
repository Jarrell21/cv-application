import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function PersonalInfoInput({ data, setData }) {
  const [editFormMode, setEditFormMode] = useState(false);

  const toggleEditFormMode = () => {
    setEditFormMode((prevState) => !prevState);
  };

  const handleSubmitFormButton = () => {
    const allInput = document.querySelectorAll(".input");

    const newValues = [...allInput].reduce((obj, input) => {
      return { ...obj, [input.name]: input.value };
    }, {});

    const newData = {
      ...data,
      personalInfo: {
        ...data.personalInfo,
        fullName: newValues.fullName,
        birthDate: newValues.birthDate,
        nationality: newValues.nationality,
        address: newValues.address,
        mobile: newValues.mobile,
        email: newValues.email,
        objective: newValues.objective,
      },
    };

    setData(newData);
    toggleEditFormMode();
  };

  const handleCancelFormButton = () => {
    // console.log(data);
    setData(data);
    toggleEditFormMode();
  };

  // const handleAddSkill = () => {
  //   const id = uuidv4();
  //   const newData = {
  //     ...data,
  //     personalInfo: {
  //       ...data.personalInfo,
  //       skills: [...data.personalInfo.skills, { id: id, skillName: "" }],
  //     },
  //   };

  //   setData(newData);
  // };

  return (
    <div className="side-personal-info">
      <h3>Personal Information</h3>
      <div className="input-group">
        <label htmlFor="fullName">Full name</label>
        <input
          className="input"
          name="fullName"
          disabled={!editFormMode}
          type="text"
          defaultValue={data.personalInfo.fullName}
        />
      </div>
      <div className="input-group">
        <label htmlFor="birthDate">Birth date</label>
        <input
          className="input"
          name="birthDate"
          disabled={!editFormMode}
          type="date"
          defaultValue={data.personalInfo.birthDate}
        />
      </div>
      <div className="input-group">
        <label htmlFor="nationality">Nationality</label>
        <input
          className="input"
          name="nationality"
          disabled={!editFormMode}
          type="text"
          defaultValue={data.personalInfo.nationality}
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">Address</label>
        <input
          className="input"
          name="address"
          disabled={!editFormMode}
          type="text"
          defaultValue={data.personalInfo.address}
        />
      </div>
      <div className="input-group">
        <label htmlFor="mobile">Mobile</label>
        <input
          className="input"
          name="mobile"
          disabled={!editFormMode}
          type="text"
          defaultValue={data.personalInfo.mobile}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          className="input"
          name="email"
          disabled={!editFormMode}
          type="text"
          defaultValue={data.personalInfo.email}
        />
      </div>
      <div className="input-group">
        <label htmlFor="objective">Objective</label>
        <textarea
          className="input"
          name="objective"
          disabled={!editFormMode}
          type="text"
          rows="4"
          defaultValue={data.personalInfo.objective}
        ></textarea>
      </div>
      <div className="input-group">
        <label htmlFor="skills">Skills</label>
        <div className="skills-list">
          {data.personalInfo.skills.map((skill) => (
            <div key={skill.id} className="skill">
              <input
                className="input"
                name={skill.skillName}
                disabled={!editFormMode}
                type="text"
                defaultValue={skill.skillName}
              />
              <button disabled={!editFormMode}>Delete</button>
            </div>
          ))}
        </div>
        {/* <input type="text" /> */}
        <button disabled={!editFormMode}>Add skill</button>
      </div>
      <div className="input-group">
        <label htmlFor="languages">Languages</label>
        {data.personalInfo.languages.map((language) => (
          <div key={language.id}>
            <input
              className="input"
              name={language.languageName}
              disabled={!editFormMode}
              type="text"
              defaultValue={language.languageName}
            />
            <button disabled={!editFormMode}>Delete</button>
          </div>
        ))}
        {/* <input type="text" /> */}
        <button disabled={!editFormMode}>Add language</button>
      </div>
      {editFormMode ? (
        <>
          <button onClick={handleSubmitFormButton}>Submit</button>
          <button onClick={handleCancelFormButton}>Cancel</button>
        </>
      ) : (
        <button onClick={toggleEditFormMode}>Edit</button>
      )}
    </div>
  );
}

PersonalInfoInput.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default PersonalInfoInput;
