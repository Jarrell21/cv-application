import PropTypes from "prop-types";
import isFormValid from "../../../helpers/FormValidation";

function EditWork({ mode, setMode, data, setData }) {
  const saveEditedWork = (event, workId) => {
    if (!isFormValid(event)) return;

    const allWorkInput = document.querySelectorAll(".work-input");

    var newWork = Object.fromEntries(
      [...allWorkInput].map((input) => [input.name, input.value])
    );
    newWork = { ...newWork, id: workId };

    const newWorkData = [...data.workExperience].map((work) => {
      if (work.id == workId) {
        work = newWork;
      }

      return work;
    });

    setData({
      ...data,
      workExperience: newWorkData,
    });

    exitInput();
  };

  const deleteWork = (workId) => {
    const newWorkData = [...data.workExperience].filter(
      (work) => work.id != workId
    );

    setData({
      ...data,
      workExperience: newWorkData,
    });

    exitInput();
  };

  const exitInput = () => {
    setMode({ action: "" });
  };

  return (
    <form
      onSubmit={(event) => saveEditedWork(event, mode.modeData.id)}
      className="edit-work needs-validation"
      noValidate
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-companyName"
          placeholder="Company name"
          name="companyName"
          defaultValue={mode.modeData.companyName}
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
          defaultValue={mode.modeData.startDate}
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
          defaultValue={mode.modeData.endDate}
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
          defaultValue={mode.modeData.position}
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
          defaultValue={mode.modeData.specialization}
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
          defaultValue={mode.modeData.industry}
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
          defaultValue={mode.modeData.natureOfWork}
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
          className="btn btn-outline-danger"
          onClick={() => deleteWork(mode.modeData.id)}
        >
          Delete
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

EditWork.propTypes = {
  mode: PropTypes.object,
  setMode: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default EditWork;
