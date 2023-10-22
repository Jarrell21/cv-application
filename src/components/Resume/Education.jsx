import PropTypes from "prop-types";
import { convertDate } from "../../helpers/Date";

function Education({ educData }) {
  return (
    <div className="education row mb-3">
      <div className="education-left-col col-5">
        <p>{convertDate(educData.graduationDate)}</p>
      </div>
      <div className="education-right-col col">
        <p className="mb-0 fw-bold">{educData.attainment}</p>
        <p className="mb-0">{educData.schoolName}</p>
        <p className="mb-0">{educData.course}</p>
      </div>
    </div>
  );
}

Education.propTypes = {
  educData: PropTypes.object,
};

export default Education;
