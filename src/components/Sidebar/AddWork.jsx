import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function AddWork({ setMode, data, setData }) {
  const saveNewWork = () => {
    const workInputs = document.querySelectorAll(".work-input");

    // ADD INPUT VALIDATION
    // workInputs.forEach((input) => {
    //   if (input.value == "") return;
    // });

    var newWorkData = Object.fromEntries(
      [...workInputs].map((input) => [input.name, input.value])
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
      <div className="input-group">
        <label htmlFor="companyName">Company name</label>
        <input
          className="work-input"
          id="work-input-companyName"
          name="companyName"
          type="text"
        />
      </div>
      <div className="input-group">
        <label htmlFor="startDate">Start date</label>
        <input
          className="work-input"
          id="work-input-startDate"
          name="startDate"
          type="date"
        />
      </div>
      <div className="input-group">
        <label htmlFor="endDate">End date</label>
        <input
          className="work-input"
          id="work-input-endDate"
          name="endDate"
          type="date"
        />
      </div>
      <div className="input-group">
        <label htmlFor="position">Position</label>
        <input
          className="work-input"
          id="work-input-position"
          name="position"
          type="text"
        />
      </div>
      <div className="input-group">
        <label htmlFor="specialization">Specialization</label>
        <input
          className="work-input"
          id="work-input-specialization"
          name="specialization"
          type="text"
        />
      </div>
      <div className="input-group">
        <label htmlFor="industry">Industry</label>
        <input
          className="work-input"
          id="work-input-industry"
          name="industry"
          type="text"
        />
      </div>
      <div className="input-group">
        <label htmlFor="natureOfWork">Nature of Work</label>
        <textarea
          className="work-input"
          id="work-input-natureOfWork"
          name="natureOfWork"
          rows="4"
        />
      </div>
      <button onClick={saveNewWork}>Save</button>
      <button onClick={exitInput}>Cancel</button>
    </>
  );
}

AddWork.propTypes = {
  setMode: PropTypes.any,
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default AddWork;
