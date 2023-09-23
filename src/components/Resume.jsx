import React from "react";
import PropTypes from "prop-types";
import PersonalInfo from "./Resume/PersonalInfo";
import Work from "./Resume/Work";
import Education from "./Resume/Education";
import "../styles/Resume.css";

function Resume({ data }) {
  return (
    <main className="resume">
      <div className="resume-left-col">
        <PersonalInfo data={data} />
      </div>
      <div className="resume-right-col">
        <div className="work-experience">
          <h3>WORK EXPERIENCE</h3>
          {data.workExperience &&
            data.workExperience.map((work) => {
              return <Work key={work.id} workData={work} />;
            })}
        </div>
        <div className="education">
          <h3>EDUCATION</h3>
          {data.education &&
            data.education.map((educ) => {
              return <Education key={educ.id} educData={educ} />;
            })}
        </div>
      </div>
    </main>
  );
}

Resume.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default Resume;
