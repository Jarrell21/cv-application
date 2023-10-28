import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import isFormValid from "../../../helpers/FormValidation";

function AddWork({ setMode, data, setData }) {
  const saveNewWork = (event) => {
    if (!isFormValid(event)) return;

    const allWorkInput = document.querySelectorAll(".work-input");

    var newWorkData = Object.fromEntries(
      [...allWorkInput].map((input) => [input.name, input.value])
    );
    newWorkData = { ...newWorkData, id: uuidv4() };

    setData({
      ...data,
      workExperience: [...data.workExperience, newWorkData],
    });

    exitInput();
  };

  const exitInput = () => {
    setMode({ action: "" });
  };

  return (
    <form
      onSubmit={saveNewWork}
      className="add-work needs-validation"
      noValidate
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-companyName"
          placeholder="Company name"
          name="companyName"
          required
        />
        <label htmlFor="work-input-companyName">Company name</label>
        <div className="invalid-feedback">Please enter Company name.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="date"
          className="work-input form-control"
          id="work-input-startDate"
          placeholder="Start date"
          name="startDate"
          required
        />
        <label htmlFor="work-input-startDate">Start date</label>
        <div className="invalid-feedback">Please enter a valid date.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="date"
          className="work-input form-control"
          id="work-input-endDate"
          placeholder="End date"
          name="endDate"
          required
        />
        <label htmlFor="work-input-endDate">End date</label>
        <div className="invalid-feedback">Please enter a valid date.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-position"
          placeholder="Position"
          name="position"
          required
        />
        <label htmlFor="work-input-position">Position</label>
        <div className="invalid-feedback">Please enter Position.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-specialization"
          placeholder="Specialization"
          name="specialization"
          required
        />
        <label htmlFor="work-input-specialization">Specialization</label>
        <div className="invalid-feedback">Please enter Specialization.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-industry"
          placeholder="Industry"
          name="industry"
          required
        />
        <label htmlFor="work-input-industry">Industry</label>
        <div className="invalid-feedback">Please enter Industry.</div>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="work-input form-control"
          placeholder="Nature of Work"
          id="work-input-natureOfWork"
          name="natureOfWork"
          required
        ></textarea>
        <label htmlFor="work-input-natureOfWork">Nature of Work</label>
        <div className="invalid-feedback">Please enter Nature of Work.</div>
      </div>
      <div
        className="btn-group w-100"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={exitInput}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

AddWork.propTypes = {
  setMode: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default AddWork;
