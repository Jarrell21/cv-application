import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function Languages({ data, setData }) {
  const [mode, setMode] = useState({
    action: "",
    languageId: "",
    languageName: "",
  });

  const addLanguage = () => {
    setMode({ action: "add", languageId: "", languageName: "" });
  };

  const editLanguage = (languageId, languageName) => {
    setMode({
      action: "edit",
      languageId: languageId,
      languageName: languageName,
    });
  };

  const exitInput = () => {
    setMode("");
  };

  const saveNewLanguage = () => {
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

  const saveEditedLanguage = (languageId) => {
    const languageName = document.getElementById("language-input").value;
    const newlanguages = [...data.personalInfo.languages].map((language) => {
      if (language.id == languageId) {
        language.languageName = languageName;
      }

      return { id: language.id, languageName: language.languageName };
    });

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        languages: newlanguages,
      },
    });

    exitInput();
  };

  const deleteLanguage = (languageId) => {
    const newlanguages = [...data.personalInfo.languages].filter(
      (language) => language.id != languageId
    );

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        languages: newlanguages,
      },
    });

    exitInput();
  };

  return (
    <>
      <h2 className="accordion-header">
        <button
          className="accordion-button fw-bold collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree"
        >
          Languages
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionPanelsStayOpenExample"
      >
        <div className="accordion-body">
          {mode.action == "add" ? (
            <div className="add-language">
              <div className="form-floating mb-3">
                <input
                  className="input form-control"
                  id="language-input"
                  name="language"
                  type="text"
                  placeholder="Language name"
                />
                <label htmlFor="floatingInput">Language name</label>
              </div>
              <div
                className="btn-group w-100"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  onClick={saveNewLanguage}
                  className="btn btn-outline-primary"
                  type="button"
                >
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
            </div>
          ) : mode.action == "edit" ? (
            <div className="edit-language">
              <div className="form-floating mb-3">
                <input
                  className="input form-control"
                  id="language-input"
                  name="language"
                  type="text"
                  placeholder="name@example.com"
                  defaultValue={mode.languageName}
                />
                <label htmlFor="floatingInput">Language name</label>
              </div>
              <div
                className="btn-group w-100"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => saveEditedLanguage(mode.languageId)}
                >
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
            </div>
          ) : (
            <>
              <div className="list-group">
                {data.personalInfo.languages.map((language) => (
                  <button
                    key={language.id}
                    type="button"
                    className="list-group-item list-group-item-action mb-2 language"
                    aria-current="true"
                    onClick={() =>
                      editLanguage(language.id, language.languageName)
                    }
                  >
                    {language.languageName}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={addLanguage}
              >
                Add language
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

Languages.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Languages;
