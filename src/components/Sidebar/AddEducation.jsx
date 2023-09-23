import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function AddEducation({ data, setData, setMode }) {
  const saveNewEducation = () => {
    const allEducInput = document.querySelectorAll(".educ-input");

    var newEducData = Object.fromEntries(
      [...allEducInput].map((input) => [input.name, input.value])
    );
    newEducData = { ...newEducData, id: uuidv4() };

    setData({
      ...data,
      education: [...data.education, newEducData],
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
        />
      </div>
      <div className="input-group">
        <label htmlFor="attainment">Attainment</label>
        <input
          className="educ-input"
          id="educ-input-attainment"
          name="attainment"
          type="text"
        />
      </div>
      <div className="input-group">
        <label htmlFor="course">Course/Track</label>
        <input
          className="educ-input"
          id="educ-input-course"
          name="course"
          type="text"
        />
      </div>
      <div className="input-group">
        <label htmlFor="graduationDate">Graduation date</label>
        <input
          className="educ-input"
          id="educ-input-graduationDate"
          name="graduationDate"
          type="date"
        />
      </div>
      <button onClick={saveNewEducation}>Save</button>
      <button onClick={exitInput}>Cancel</button>
    </>
  );
}

AddEducation.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
  setMode: PropTypes.any,
};

export default AddEducation;
