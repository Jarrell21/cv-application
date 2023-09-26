import PropTypes from "prop-types";
import { convertDate } from "../../helpers/Date";

function Education({ educData }) {
  return (
    <div className="education">
      <div className="education-row">
        <div className="education-left-col">
          <p>{convertDate(educData.graduationDate)}</p>
        </div>
        <div className="education-right-col">
          <p>{educData.attainment}</p>
          <p>{educData.schoolName}</p>
          <p>{educData.course}</p>
        </div>
      </div>
    </div>
  );
}

Education.propTypes = {
  educData: PropTypes.object,
};

export default Education;
