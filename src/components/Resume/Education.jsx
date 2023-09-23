import React from "react";
import PropTypes from "prop-types";

function Education({ educData }) {
  return (
    <div className="attainment">
      <div className="attainment-row">
        <div className="attainment-left-col">
          <p>{educData.dateGraduated}</p>
        </div>
        <div className="attainment-right-col">
          <p>{educData.attainment}</p>
          <p>{educData.schoolName}</p>
          <p>{educData.course}</p>
        </div>
      </div>
    </div>
  );
}

Education.propTypes = {
  educData: PropTypes.any,
};

export default Education;
