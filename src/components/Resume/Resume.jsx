import PropTypes from "prop-types";
import PersonalInfo from "./PersonalInfo";
import Work from "./Work";
import Education from "./Education";
import "../../styles/Resume.css";

function Resume({ data }) {
  return (
    <main className="resume container col-8 border border-dark-subtle mb-3">
      <div className="row p-2 h-100">
        <div className="resume-left-col col-sm">
          <PersonalInfo data={data} />
        </div>
        <div className="resume-right-col col-sm">
          {data.workExperience.length > 0 && (
            <section className="work-experience-section">
              <h5 className="section-header p-1 mt-3">WORK EXPERIENCE</h5>
              {data.workExperience.map((work, index) => {
                return <Work key={index} workData={work} />;
              })}
            </section>
          )}
          {data.education.length > 0 && (
            <section className="education-section">
              <h5 className="section-header p-1">EDUCATION</h5>
              {data.education.map((educ, index) => {
                return <Education key={index} educData={educ} />;
              })}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

Resume.propTypes = {
  data: PropTypes.object,
};

export default Resume;
