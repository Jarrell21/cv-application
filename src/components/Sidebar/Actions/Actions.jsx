import PropTypes from "prop-types";
import sampleData from "../../../sampleData";

function Actions({ setData }) {
  const handleClearCv = () => {
    const personalInfoInput = document.querySelectorAll(".personal-info-input");

    personalInfoInput.forEach((input) => {
      input.value = "";
    });

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

  const handleLoadData = () => {
    setData(sampleData);

    const personalInfoInput = document.querySelectorAll(".personal-info-input");

    personalInfoInput.forEach((input) => {
      input.value = sampleData.personalInfo[input.name];
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
          <button
            type="button"
            className="btn-outline-primary"
            onClick={handleLoadData}
          >
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
