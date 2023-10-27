import PropTypes from "prop-types";
import isFormValid from "../../../helpers/FormValidation";

function EditLanguage({ data, setData, mode, exitInput }) {
  const saveEditedLanguage = (event, languageId) => {
    if (!isFormValid(event)) {
      return;
    }

    const languageName = document.getElementById("language-input").value;
    const newLanguage = [...data.personalInfo.languages].map((language) => {
      if (language.id == languageId) {
        language.languageName = languageName;
      }

      return { id: language.id, languageName: language.languageName };
    });

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        languages: newLanguage,
      },
    });

    exitInput();
  };

  const deleteLanguage = (languageId) => {
    const newLanguage = [...data.personalInfo.languages].filter(
      (language) => language.id != languageId
    );

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        languages: newLanguage,
      },
    });

    exitInput();
  };
  return (
    <form
      onSubmit={(event) => saveEditedLanguage(event, mode.languageId)}
      className="edit-language needs-validation"
      noValidate
    >
      <div className="form-floating mb-3">
        <input
          className="input form-control"
          id="language-input"
          name="language"
          type="text"
          placeholder="name@example.com"
          defaultValue={mode.languageName}
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
        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteLanguage(mode.languageId)}
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

EditLanguage.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  mode: PropTypes.object,
  exitInput: PropTypes.func,
};

export default EditLanguage;
