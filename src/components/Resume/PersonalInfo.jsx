import PropTypes from "prop-types";
import { convertDateToCompleteDate } from "../../helpers/Date";

function PersonalInfo({ data }) {
  return (
    <>
      <section className="applicant-name my-3">
        <h4>
          {data.personalInfo.fullName != ""
            ? data.personalInfo.fullName
            : "Your name here"}
        </h4>
      </section>
      <section className="objective-section mb-4">
        <h5 className="section-header p-1">OBJECTIVE</h5>
        <p>{data.personalInfo.objective}</p>
      </section>
      <section className="personal-info-section mb-4">
        <h5 className="section-header p-1">PERSONAL INFORMATION</h5>
        <p className="row mb-1">
          <span className="col-4 fw-bold">Birthdate:</span>
          <span className="col">
            {data.personalInfo.birthDate != "" &&
              convertDateToCompleteDate(data.personalInfo.birthDate)}
          </span>
        </p>
        <p className="row mb-1">
          <span className="col-4 fw-bold">Nationality:</span>
          <span className="col">{data.personalInfo.nationality}</span>
        </p>
        <p className="row mb-1">
          <span className="col-4 fw-bold">Address:</span>
          <span className="col">{data.personalInfo.address}</span>
        </p>
      </section>
      <section className="contact-info-section mb-4">
        <h5 className="section-header p-1">CONTACT INFORMATION</h5>
        <p className="row mb-1">
          <span className="col-4 fw-bold">Mobile:</span>
          <span className="col">{data.personalInfo.mobile}</span>
        </p>
        <p className="row mb-1">
          <span className="col-4 fw-bold">Email:</span>
          <span className="col">{data.personalInfo.email}</span>
        </p>
      </section>
      <section className="skills-section mb-4">
        <h5 className="section-header p-1">SKILLS</h5>
        {data.personalInfo.skills.map((skill, index) => {
          return (
            <p className="mb-1" key={index}>
              {skill.skillName}
            </p>
          );
        })}
      </section>
      <section className="languages-section">
        <h5 className="section-header p-1">LANGUAGES</h5>
        {data.personalInfo.languages.map((language, index) => {
          return <p key={index}>{language.languageName}</p>;
        })}
      </section>
    </>
  );
}

PersonalInfo.propTypes = {
  data: PropTypes.object,
};

export default PersonalInfo;
