import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import isFormValid from "../../../helpers/FormValidation";

function AddEducation({ data, setData, setMode }) {
  const saveNewEducation = (event) => {
    if (!isFormValid(event)) return;

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
    <form
      onSubmit={saveNewEducation}
      className="add-education needs-validation"
      noValidate
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          className="educ-input form-control"
          id="educ-input-schoolName"
          placeholder="School name"
          name="schoolName"
          required
        />
        <label htmlFor="educ-input-schoolName">School name</label>
        <div className="invalid-feedback">Please enter School name.</div>
      </div>
      <div className="form-floating mb-3">
        <select
          className="educ-input form-select"
          id="educ-input-attainment"
          aria-label="Floating label select example"
          name="attainment"
          required
        >
          <option selected value="">
            Select attainment
          </option>
          <option value="Master's Degree">Master&#39;s Degree</option>
          <option value="Bachelor's Degree">Bachelor&#39;s Degree</option>
          <option value="High school diploma">High school diploma</option>
          <option value="Elementary diploma">Elementary diploma</option>
        </select>
        <label htmlFor="educ-input-attainment">Attainment</label>
        <div className="invalid-feedback">Please select Attainment.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="educ-input form-control"
          id="educ-input-course"
          placeholder="Course/Track"
          name="course"
          required
        />
        <label htmlFor="educ-input-course">Course/Track</label>
        <div className="invalid-feedback">Please enter Course/Track.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="date"
          className="educ-input form-control"
          id="educ-input-graduationDate"
          placeholder="Graduation date"
          name="graduationDate"
          required
        />
        <label htmlFor="educ-input-graduationDate">Graduation date</label>
        <div className="invalid-feedback">Please enter a valid date.</div>
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

AddEducation.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  setMode: PropTypes.func,
};

export default AddEducation;
