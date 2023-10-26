import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import isFormValid from "../../../helpers/FormValidation";

function AddSkills({ data, setData, exitInput }) {
  const saveNewSkill = (event) => {
    if (!isFormValid(event)) {
      return;
    }

    const skillName = document.getElementById("skill-input").value;
    const skillId = uuidv4();

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        skills: [
          ...data.personalInfo.skills,
          { id: skillId, skillName: skillName },
        ],
      },
    });

    exitInput();
  };

  return (
    <form
      onSubmit={saveNewSkill}
      className="add-skill needs-validation"
      noValidate
    >
      <div className="form-floating mb-3">
        <input
          className="input form-control"
          id="skill-input"
          name="skill"
          type="text"
          placeholder="Skill name"
          required
        />
        <label htmlFor="floatingInput">Skill name</label>
        <div className="invalid-feedback">Please enter a skill.</div>
      </div>
      <div
        className="btn-group w-100"
        role="group"
        aria-label="Basic outlined example"
      >
        <button className="btn btn-outline-primary" type="submit">
          Save
        </button>
        <button
          onClick={exitInput}
          className="btn btn-outline-secondary"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

AddSkills.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  exitInput: PropTypes.func,
};

export default AddSkills;
