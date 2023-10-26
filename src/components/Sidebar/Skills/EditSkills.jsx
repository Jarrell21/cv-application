import PropTypes from "prop-types";
import isFormValid from "../../../helpers/FormValidation";

function EditSkills({ data, setData, mode, exitInput }) {
  const saveEditedSkill = (event, skillId) => {
    if (!isFormValid(event)) {
      return;
    }

    const skillName = document.getElementById("skill-input").value;
    const newSkills = [...data.personalInfo.skills].map((skill) => {
      if (skill.id == skillId) {
        skill.skillName = skillName;
      }

      return { id: skill.id, skillName: skill.skillName };
    });

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        skills: newSkills,
      },
    });

    exitInput();
  };

  const deleteSkill = (skillId) => {
    const newSkills = [...data.personalInfo.skills].filter(
      (skill) => skill.id != skillId
    );

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        skills: newSkills,
      },
    });

    exitInput();
  };
  return (
    <form
      onSubmit={(event) => saveEditedSkill(event, mode.skillId)}
      className="edit-skill needs-validation"
      noValidate
    >
      <div className="form-floating mb-3">
        <input
          className="input form-control"
          id="skill-input"
          name="skill"
          type="text"
          placeholder="name@example.com"
          defaultValue={mode.skillName}
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
        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteSkill(mode.skillId)}
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

EditSkills.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  mode: PropTypes.object,
  exitInput: PropTypes.func,
};

export default EditSkills;
