import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function AddWork({ setMode, data, setData }) {
  const saveNewWork = () => {
    const allWorkInput = document.querySelectorAll(".work-input");

    // ADD INPUT VALIDATION
    // allWorkInput.forEach((input) => {
    //   if (input.value == "") return;
    // });

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
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-companyName"
          placeholder="Company name"
          name="companyName"
        />
        <label htmlFor="work-input-companyName">Company name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="date"
          className="work-input form-control"
          id="work-input-startDate"
          placeholder="Start date"
          name="startDate"
        />
        <label htmlFor="work-input-startDate">Start date</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="date"
          className="work-input form-control"
          id="work-input-endDate"
          placeholder="End date"
          name="endDate"
        />
        <label htmlFor="work-input-endDate">End date</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-position"
          placeholder="Position"
          name="position"
        />
        <label htmlFor="work-input-position">Position</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-specialization"
          placeholder="Specialization"
          name="specialization"
        />
        <label htmlFor="work-input-specialization">Specialization</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="work-input form-control"
          id="work-input-industry"
          placeholder="Industry"
          name="industry"
        />
        <label htmlFor="work-input-industry">Industry</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="work-input form-control"
          placeholder="Nature of Work"
          id="work-input-natureOfWork"
          name="natureOfWork"
        ></textarea>
        <label htmlFor="work-input-natureOfWork">Nature of Work</label>
      </div>
      <div
        className="btn-group w-100"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={saveNewWork}
        >
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
    </>
  );
}

AddWork.propTypes = {
  setMode: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default AddWork;
