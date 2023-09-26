import PropTypes from "prop-types";
import { convertDate } from "../../helpers/Date";

function Work({ workData }) {
  return (
    <div className="resume-work">
      <div className="work-header">
        <h3>{workData.companyName}</h3>
        <p>
          ({convertDate(workData.startDate)} - {convertDate(workData.endDate)})
        </p>
      </div>
      <div className="work-row">
        <div className="work-left-col">
          <p>Position: </p>
          <p>Specialization: </p>
          <p>Industry: </p>
          <p>Nature of Work: </p>
        </div>
        <div className="work-right-col">
          <p>{workData.position}</p>
          <p>{workData.specialization}</p>
          <p>{workData.industry}</p>
          <p>{workData.natureOfWork}</p>
        </div>
      </div>
    </div>
  );
}

Work.propTypes = {
  workData: PropTypes.object,
};

export default Work;
