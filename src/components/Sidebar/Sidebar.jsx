import PropTypes from "prop-types";
import PersonalInfoInput from "./PersonalInfo/PersonalInfoInput";
import WorkInput from "./Work/WorkInput";
import EducationInput from "./Education/EducationInput";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import Actions from "./Actions/Actions";
import "../../styles/Sidebar.css";

function Sidebar({ data, setData }) {
  return (
    <aside className="sidebar col-lg">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <PersonalInfoInput data={data} setData={setData} />
        </div>
        <div className="accordion-item">
          <Skills data={data} setData={setData} />
        </div>
        <div className="accordion-item">
          <Languages data={data} setData={setData} />
        </div>
        <div className="accordion-item">
          <WorkInput data={data} setData={setData} />
        </div>
        <div className="accordion-item">
          <EducationInput data={data} setData={setData} />
        </div>
        <div className="accordion-item">
          <Actions setData={setData} />
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Sidebar;
