import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import isFormValid from "../../../helpers/FormValidation";

function AddLanguage({ data, setData, exitInput }) {
  const saveNewLanguage = (event) => {
    if (!isFormValid(event)) {
      return;
    }

    const languageName = document.getElementById("language-input").value;
    const languageId = uuidv4();

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        languages: [
          ...data.personalInfo.languages,
          { id: languageId, languageName: languageName },
        ],
      },
    });

    exitInput();
  };

  return (
    <form
      onSubmit={saveNewLanguage}
      className="add-language needs-validation"
      noValidate
    >
      <div className="form-floating mb-3">
        <input
          className="input form-control"
          id="language-input"
          name="language"
          type="text"
          placeholder="Language name"
          required
        />
        <label htmlFor="floatingInput">Language name</label>
        <div className="invalid-feedback">Please enter a language.</div>
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

AddLanguage.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  exitInput: PropTypes.func,
};

export default AddLanguage;
