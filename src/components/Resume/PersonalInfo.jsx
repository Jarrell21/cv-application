import PropTypes from "prop-types";

function PersonalInfo({ data }) {
  return (
    <>
      <section className="applicant-name">
        {data.personalInfo && data.personalInfo.fullName}
      </section>
      <section className="objective-section">
        <h3 className="section-header">OBJECTIVE</h3>
        <p>{data.personalInfo && data.personalInfo.objective}</p>
      </section>
      <section className="personal-info-section">
        <h3 className="section-header">PERSONAL INFORMATION</h3>
        <p>Birthdate: {data.personalInfo && data.personalInfo.birthDate}</p>
        <p>Nationality: {data.personalInfo && data.personalInfo.nationality}</p>
        <p>Address: {data.personalInfo && data.personalInfo.address}</p>
      </section>
      <section className="contact-info-section">
        <h3 className="section-header">CONTACT INFORMATION</h3>
        <p>Mobile: {data.personalInfo && data.personalInfo.mobile}</p>
        <p>Email: {data.personalInfo && data.personalInfo.email}</p>
      </section>
      <section className="skills-section">
        <h3 className="section-header">SKILLS</h3>
        {data.personalInfo &&
          data.personalInfo.skills &&
          data.personalInfo.skills.map((skill) => {
            return <p key={skill.id}>{skill.skillName}</p>;
          })}
      </section>
      <section className="languages-section">
        <h3 className="section-header">LANGUAGES</h3>
        {data.personalInfo &&
          data.personalInfo.languages &&
          data.personalInfo.languages.map((language) => {
            return <p key={language.id}>{language.languageName}</p>;
          })}
      </section>
    </>
  );
}

PersonalInfo.propTypes = {
  data: PropTypes.object,
};

export default PersonalInfo;
