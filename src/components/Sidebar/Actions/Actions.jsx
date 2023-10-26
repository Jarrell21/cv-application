import PropTypes from "prop-types";

function Actions({ setData }) {
  const handleClearCv = () => {
    setData({
      personalInfo: {
        fullName: "",
        birthDate: "",
        objective: "",
        nationality: "",
        address: "",
        mobile: "",
        email: "",
        skills: [],
        languages: [],
      },
      workExperience: [],
      education: [],
    });
  };

  return (
    <>
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
        data-bs-parent="#accordionPanelsStayOpenExample"
      >
        <div className="accordion-body row gap-2">
          <button
            type="button"
            className="btn-outline-primary"
            onClick={handleClearCv}
          >
            Clear CV
          </button>
          <button type="button" className="btn-outline-primary">
            Load sample data
          </button>
        </div>
      </div>
    </>
  );
}

Actions.propTypes = {
  setData: PropTypes.func,
};

export default Actions;
