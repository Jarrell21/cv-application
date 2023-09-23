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
      <div className="input-group">
        <label htmlFor="schoolName">School name</label>
        <input
          className="educ-input"
          id="educ-input-schoolName"
          name="schoolName"
          type="text"
          defaultValue={mode.modeData.schoolName}
        />
      </div>
      <div className="input-group">
        <label htmlFor="attainment">Attainment</label>
        <input
          className="educ-input"
          id="educ-input-attainment"
          name="attainment"
          type="text"
          defaultValue={mode.modeData.attainment}
        />
      </div>
      <div className="input-group">
        <label htmlFor="course">Course/Track</label>
        <input
          className="educ-input"
          id="educ-input-course"
          name="course"
          type="text"
          defaultValue={mode.modeData.course}
        />
      </div>
      <div className="input-group">
        <label htmlFor="graduationDate">Graduation date</label>
        <input
          className="educ-input"
          id="educ-input-graduationDate"
          name="graduationDate"
          type="date"
          defaultValue={mode.modeData.graduationDate}
        />
      </div>
      <button onClick={() => saveEditedEducation(mode.modeData.id)}>
        Save
      </button>
      <button onClick={() => deleteEducation(mode.modeData.id)}>Delete</button>
      <button onClick={exitInput}>Cancel</button>
    </>
  );
}

EditEducation.propTypes = {
  mode: PropTypes.any,
  setMode: PropTypes.any,
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default EditEducation;
