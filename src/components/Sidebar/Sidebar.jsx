import PropTypes from "prop-types";
import PersonalInfoInput from "./PersonalInfo/PersonalInfoInput";
import WorkInput from "./Work/WorkInput";
import EducationInput from "./Education/EducationInput";
import Skills from "./PersonalInfo/Skills";
import Languages from "./PersonalInfo/Languages";
// import "../../styles/Sidebar.css";

function Sidebar({ data, setData }) {
  return (
    <aside className="sidebar col-lg-5 border border-danger">
      <PersonalInfoInput data={data} setData={setData} />
      <Skills data={data} setData={setData} />
      <Languages data={data} setData={setData} />
      <WorkInput data={data} setData={setData} />
      <EducationInput data={data} setData={setData} />
    </aside>
  );
}

Sidebar.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Sidebar;
