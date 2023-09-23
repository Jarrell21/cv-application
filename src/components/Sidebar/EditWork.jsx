import PropTypes from "prop-types";

function EditWork({ mode, setMode, data, setData }) {
  const saveEditedWork = (workId) => {
    const allWorkInput = document.querySelectorAll(".work-input");

    // ADD INPUT VALIDATION
    // allWorkInput.forEach((input) => {
    //   if (input.value == "") return;
    // });

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
    <>
      <div className="input-group">
        <label htmlFor="companyName">Company name</label>
        <input
          className="work-input"
          id="work-input-companyName"
          name="companyName"
          type="text"
          defaultValue={mode.modeData.companyName}
        />
      </div>
      <div className="input-group">
        <label htmlFor="startDate">Start date</label>
        <input
          className="work-input"
          id="work-input-startDate"
          name="startDate"
          type="date"
          defaultValue={mode.modeData.startDate}
        />
      </div>
      <div className="input-group">
        <label htmlFor="endDate">End date</label>
        <input
          className="work-input"
          id="work-input-endDate"
          name="endDate"
          type="date"
          defaultValue={mode.modeData.endDate}
        />
      </div>
      <div className="input-group">
        <label htmlFor="position">Position</label>
        <input
          className="work-input"
          id="work-input-position"
          name="position"
          type="text"
          defaultValue={mode.modeData.position}
        />
      </div>
      <div className="input-group">
        <label htmlFor="specialization">Specialization</label>
        <input
          className="work-input"
          id="work-input-specialization"
          name="specialization"
          type="text"
          defaultValue={mode.modeData.specialization}
        />
      </div>
      <div className="input-group">
        <label htmlFor="industry">Industry</label>
        <input
          className="work-input"
          id="work-input-industry"
          name="industry"
          type="text"
          defaultValue={mode.modeData.industry}
        />
      </div>
      <div className="input-group">
        <label htmlFor="natureOfWork">Nature of Work</label>
        <textarea
          className="work-input"
          id="work-input-natureOfWork"
          name="natureOfWork"
          rows="4"
          defaultValue={mode.modeData.natureOfWork}
        />
      </div>
      <button onClick={() => saveEditedWork(mode.modeData.id)}>Save</button>
      <button onClick={() => deleteWork(mode.modeData.id)}>Delete</button>
      <button onClick={exitInput}>Cancel</button>
    </>
  );
}

EditWork.propTypes = {
  mode: PropTypes.any,
  setMode: PropTypes.any,
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default EditWork;
