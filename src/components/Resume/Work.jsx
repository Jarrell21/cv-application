import PropTypes from "prop-types";
import { convertDateToYearAndMonth } from "../../helpers/Date";

function Work({ workData }) {
  return (
    <div className="resume-work mb-3">
      <div className="work-header text-center">
        <h5 className="mb-0">{workData.companyName}</h5>
        <p className="mb-0">
          ({convertDateToYearAndMonth(workData.startDate)} -{" "}
          {convertDateToYearAndMonth(workData.endDate)})
        </p>
      </div>
      <div className="work-body row">
        <span className="work-left-col col-5">Position:</span>
        <span className="work-right-col col">{workData.position}</span>
        <span className="work-left-col col-5">Specialization:</span>
        <span className="work-right-col col">{workData.specialization}</span>
        <span className="work-left-col col-5">Industry:</span>
        <span className="work-right-col col">{workData.industry}</span>
        <span className="work-left-col col-5">Nature of Work:</span>
        <span className="work-right-col col">{workData.natureOfWork}</span>
      </div>
    </div>
  );
}

Work.propTypes = {
  workData: PropTypes.object,
};

export default Work;
