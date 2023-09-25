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
        <select
          name="attainment"
          id="educ-input-attainment"
          className="educ-input"
          defaultValue={mode.modeData.attainment}
        >
          <option disabled>Select attainment</option>
          <option value="Master's Degree">Master&#39;s Degree</option>
          <option value="Bachelor's Degree">Bachelor&#39;s Degree</option>
          <option value="High school diploma">High school diploma</option>
          <option value="Elementary diploma">Elementary diploma</option>
        </select>
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
  mode: PropTypes.object,
  setMode: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default EditEducation;
