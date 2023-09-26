import PropTypes from "prop-types";
import PersonalInfo from "./PersonalInfo";
import Work from "./Work";
import Education from "./Education";
import "../../styles/Resume.css";

function Resume({ data }) {
  return (
    <main className="resume">
      <div className="resume-left-col">
        <PersonalInfo data={data} />
      </div>
      <div className="resume-right-col">
        <section className="work-experience-section">
          <h3 className="section-header">WORK EXPERIENCE</h3>
          {data.workExperience &&
            data.workExperience.map((work) => {
              return <Work key={work.id} workData={work} />;
            })}
        </section>
        <section className="education-section">
          <h3 className="section-header">EDUCATION</h3>
          {data.education &&
            data.education.map((educ) => {
              return <Education key={educ.id} educData={educ} />;
            })}
        </section>
      </div>
    </main>
  );
}

Resume.propTypes = {
  data: PropTypes.object,
};

export default Resume;
