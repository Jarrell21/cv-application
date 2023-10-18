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
    <div className="side-languages">
      <h3 className="section-header">Languages</h3>
      {mode.action == "add" ? (
        <div className="add-language">
          <input
            className="input"
            id="language-input"
            name="language"
            type="text"
          />
          <button onClick={saveNewLanguage}>Save</button>
          <button onClick={exitInput}>Cancel</button>
        </div>
      ) : mode.action == "edit" ? (
        <div className="edit-language">
          <input
            className="input"
            id="language-input"
            name="language"
            type="text"
            defaultValue={mode.languageName}
          />
          <button onClick={() => saveEditedLanguage(mode.languageId)}>
            Save
          </button>
          <button onClick={() => deleteLanguage(mode.languageId)}>
            Delete
          </button>
          <button onClick={exitInput}>Cancel</button>
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
                onClick={() => editLanguage(language.id, language.languageName)}
              >
                {language.languageName}
              </button>
            ))}
          </div>
          <button onClick={addLanguage}>Add language</button>
        </>
      )}
    </div>
  );
}

Languages.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default Languages;
