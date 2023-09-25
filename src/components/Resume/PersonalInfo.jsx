import PropTypes from "prop-types";

function PersonalInfo({ data }) {
  return (
    <>
      <div className="img-section">
        <p className="applicant-name">
          {data.personalInfo && data.personalInfo.fullName}
        </p>
      </div>
      <div className="objective-section">
        <h3>OBJECTIVE</h3>
        <p>{data.personalInfo && data.personalInfo.objective}</p>
      </div>
      <div className="personal-info-section">
        <h3>PERSONAL INFORMATION</h3>
        <p>Birthdate: {data.personalInfo && data.personalInfo.birthDate}</p>
        <p>Nationality: {data.personalInfo && data.personalInfo.nationality}</p>
        <p>Address: {data.personalInfo && data.personalInfo.address}</p>
      </div>
      <div className="contact-info-section">
        <h3>CONTACT INFORMATION</h3>
        <p>Mobile: {data.personalInfo && data.personalInfo.mobile}</p>
        <p>Email: {data.personalInfo && data.personalInfo.email}</p>
      </div>
      <div className="skills-section">
        <h3>SKILLS</h3>
        {data.personalInfo &&
          data.personalInfo.skills &&
          data.personalInfo.skills.map((skill) => {
            return <p key={skill.id}>{skill.skillName}</p>;
          })}
      </div>
      <div className="languages-section">
        <h3>LANGUAGES</h3>
        {data.personalInfo &&
          data.personalInfo.languages &&
          data.personalInfo.languages.map((language) => {
            return <p key={language.id}>{language.languageName}</p>;
          })}
      </div>
    </>
  );
}

PersonalInfo.propTypes = {
  data: PropTypes.object,
};

export default PersonalInfo;
