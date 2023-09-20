import PropTypes from "prop-types";

function Languages({ data, setData }) {
  const handleAddLanguage = () => {};

  return (
    <div className="side-languages">
      <h3>Languages</h3>
      {data.personalInfo.languages.map((language) => (
        <p key={language.id} className="language">
          {language.languageName}
        </p>
      ))}
      <button onClick={handleAddLanguage}>Add language</button>
    </div>
  );
}

Languages.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default Languages;
