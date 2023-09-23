import PropTypes from "prop-types";

function PersonalInfoInput({ data, setData }) {
  const handleOnChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [e.target.name]: value,
      },
    });
  };

  return (
    <div className="side-personal-info">
      <h3>Personal Information</h3>
      <>
        <div className="input-group">
          <label htmlFor="fullName">Full name</label>
          <input
            className="personal-info-input"
            name="fullName"
            type="text"
            defaultValue={data.personalInfo.fullName}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="birthDate">Birth date</label>
          <input
            className="personal-info-input"
            name="birthDate"
            type="date"
            defaultValue={data.personalInfo.birthDate}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="nationality">Nationality</label>
          <input
            className="personal-info-input"
            name="nationality"
            type="text"
            defaultValue={data.personalInfo.nationality}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input
            className="personal-info-input"
            name="address"
            type="text"
            defaultValue={data.personalInfo.address}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            className="personal-info-input"
            name="mobile"
            type="text"
            defaultValue={data.personalInfo.mobile}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            className="personal-info-input"
            name="email"
            type="text"
            defaultValue={data.personalInfo.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="objective">Objective</label>
          <textarea
            className="personal-info-input"
            name="objective"
            rows="4"
            defaultValue={data.personalInfo.objective}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </>
    </div>
  );
}

PersonalInfoInput.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default PersonalInfoInput;
