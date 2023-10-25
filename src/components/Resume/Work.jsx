import PropTypes from "prop-types";
import { convertDateToYearAndMonth } from "../../helpers/Date";

function Work({ workData }) {
  return (
    <div className="resume-work">
      <div className="work-header text-center">
        <h5 className="mb-0">{workData.companyName}</h5>
        <p>
          ({convertDateToYearAndMonth(workData.startDate)} -{" "}
          {convertDateToYearAndMonth(workData.endDate)})
        </p>
      </div>
      <div className="work-body">
        <p className="row">
          <span className="work-left-col col-5">Position:</span>
          <span className="work-right-col col">{workData.position}</span>
        </p>
        <p className="row">
          <span className="work-left-col col-5">Specialization:</span>
          <span className="work-right-col col">{workData.specialization}</span>
        </p>
        <p className="row">
          <span className="work-left-col col-5">Industry:</span>
          <span className="work-right-col col">{workData.industry}</span>
        </p>
        <p className="row">
          <span className="work-left-col col-5">Nature of Work:</span>
          <span className="work-right-col col">{workData.natureOfWork}</span>
        </p>
      </div>
    </div>
  );
}

Work.propTypes = {
  workData: PropTypes.object,
};

export default Work;
