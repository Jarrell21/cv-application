import PropTypes from "prop-types";
import PersonalInfoInput from "./PersonalInfo/PersonalInfoInput";
import WorkInput from "./Work/WorkInput";
import EducationInput from "./Education/EducationInput";
import Skills from "./PersonalInfo/Skills";
import Languages from "./PersonalInfo/Languages";
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
          <h2 className="accordion-header">
            <button
              className="accordion-button fw-bold collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseSix"
            >
              Actions
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body row gap-2">
              <button type="button" className="btn-outline-primary">
                Clear CV
              </button>
              <button type="button" className="btn-outline-primary">
                Load sample data
              </button>
            </div>
          </div>
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
