import PropTypes from "prop-types";

function EditEducation({ data, setData, mode, setMode }) {
  const saveEditedEducation = (educationId) => {
    const allEducationInput = document.querySelectorAll(".educ-input");

    // ADD INPUT VALIDATION
    // allEducationInput.forEach((input) => {
    //   if (input.value == "") return;
    // });

    var newEducation = Object.fromEntries(
      [...allEducationInput].map((input) => [input.name, input.value])
    );
    newEducation = { ...newEducation, id: educationId };

    const newEducationData = [...data.education].map((education) => {
      if (education.id == educationId) {
        education = newEducation;
      }

      return education;
    });

    setData({
      ...data,
      education: newEducationData,
    });

    exitInput();
  };

  const deleteEducation = (educationId) => {
    const newEducationData = [...data.education].filter(
      (education) => education.id != educationId
    );

    setData({
      ...data,
      education: newEducationData,
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
          type="email"
          className="educ-input form-control"
          id="educ-input-schoolName"
          placeholder="School name"
          name="schoolName"
          defaultValue={mode.modeData.schoolName}
        />
        <label htmlFor="educ-input-schoolName">School name</label>
      </div>
      <div className="form-floating mb-3">
        <select
          className="educ-input form-select"
          id="educ-input-attainment"
          aria-label="Floating label select example"
          name="attainment"
          defaultValue={mode.modeData.attainment}
        >
          <option selected>Select attainment</option>
          <option value="Master's Degree">Master&#39;s Degree</option>
          <option value="Bachelor's Degree">Bachelor&#39;s Degree</option>
          <option value="High school diploma">High school diploma</option>
          <option value="Elementary diploma">Elementary diploma</option>
        </select>
        <label htmlFor="educ-input-attainment">Attainment</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="educ-input form-control"
          id="educ-input-course"
          placeholder="Course/Track"
          name="course"
          defaultValue={mode.modeData.course}
        />
        <label htmlFor="educ-input-course">Course/Track</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="date"
          className="educ-input form-control"
          id="educ-input-graduationDate"
          placeholder="Graduation date"
          name="graduationDate"
          defaultValue={mode.modeData.graduationDate}
        />
        <label htmlFor="educ-input-graduationDate">Graduation date</label>
      </div>
      <div
        className="btn-group w-100"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => saveEditedEducation(mode.modeData.id)}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteEducation(mode.modeData.id)}
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
    </>
  );
}

EditEducation.propTypes = {
  mode: PropTypes.object,
  setMode: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default EditEducation;
