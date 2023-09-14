import React from "react";
import PropTypes from "prop-types";
import placeholderPerson from "../assets/placeholder-person.jpg";
import "../styles/Resume.css";

function GeneralInfo({ data }) {
  return (
    <div>
      <div className="img-section">
        <img src={placeholderPerson} alt="" />
        <p className="applicant-name">{data.generalInfo.fullName}</p>
      </div>
      <div className="objective-section">
        <h3>OBJECTIVE</h3>
        <p>{data.generalInfo.objective}</p>
      </div>
      <div className="personal-info-section">
        <h3>PERSONAL INFORMATION</h3>
        <p>Birthdate: {data.generalInfo.birthDate}</p>
        <p>Nationality: {data.generalInfo.nationality}</p>
        <p>Address: {data.generalInfo.address}</p>
      </div>
      <div className="contact-info-section">
        <h3>CONTACT INFORMATION</h3>
        <p>Mobile: {data.generalInfo.mobile}</p>
        <p>Email: {data.generalInfo.email}</p>
      </div>
      <div className="skills-section">
        <h3>SKILLS</h3>
        {data.generalInfo.skills &&
          data.generalInfo.skills.map((skill) => {
            return <p key={skill}>{skill}</p>;
          })}
      </div>
      <div className="languages-section">
        <h3>LANGUAGES</h3>
        {data.generalInfo.languages &&
          data.generalInfo.languages.map((language) => {
            return <p key={language}>{language}</p>;
          })}
      </div>
    </div>
  );
}

GeneralInfo.propTypes = {
  data: PropTypes.any,
};

export default GeneralInfo;
