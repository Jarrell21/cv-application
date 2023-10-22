import PropTypes from "prop-types";
import PersonalInfo from "./PersonalInfo";
import Work from "./Work";
import Education from "./Education";
import "../../styles/Resume.css";

function Resume({ data }) {
  return (
    <main className="resume container col-lg-7 h-100 border border-dark-subtle">
      <div className="row p-2">
        <div className="resume-left-col col-lg">
          <PersonalInfo data={data} />
        </div>
        <div className="resume-right-col col-lg">
          <section className="work-experience-section">
            <h5 className="section-header p-1 mt-3">WORK EXPERIENCE</h5>
            {data.workExperience &&
              data.workExperience.map((work) => {
                return <Work key={work.id} workData={work} />;
              })}
          </section>
          <section className="education-section">
            <h5 className="section-header p-1">EDUCATION</h5>
            {data.education &&
              data.education.map((educ) => {
                return <Education key={educ.id} educData={educ} />;
              })}
          </section>
        </div>
      </div>
    </main>
  );
}

Resume.propTypes = {
  data: PropTypes.object,
};

export default Resume;
