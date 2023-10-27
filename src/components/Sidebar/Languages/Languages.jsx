import { useState } from "react";
import PropTypes from "prop-types";
import AddLanguage from "./AddLanguage";
import EditLanguage from "./EditLanguage";

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
            <AddLanguage data={data} setData={setData} exitInput={exitInput} />
          ) : mode.action == "edit" ? (
            <EditLanguage
              data={data}
              setData={setData}
              mode={mode}
              exitInput={exitInput}
            />
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
