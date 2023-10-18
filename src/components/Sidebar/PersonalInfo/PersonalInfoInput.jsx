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
      <h3 className="section-header">Personal Information</h3>
      <>
        <div className="form-floating mb-2">
          <input
            name="fullName"
            type="text"
            className="form-control personal-info-input"
            id="floatingInput"
            placeholder="Full name"
            defaultValue={data.personalInfo.fullName}
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Full name</label>
        </div>
        <div className="form-floating mb-2">
          <input
            name="birthDate"
            type="date"
            className="form-control personal-info-input"
            id="floatingInput"
            placeholder="Birth date"
            defaultValue={data.personalInfo.birthDate}
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Birth date</label>
        </div>
        <div className="form-floating mb-2">
          <input
            name="nationality"
            type="text"
            className="form-control personal-info-input"
            id="floatingInput"
            placeholder="Nationality"
            defaultValue={data.personalInfo.nationality}
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Nationality</label>
        </div>
        <div className="form-floating mb-2">
          <input
            name="address"
            type="text"
            className="form-control personal-info-input"
            id="floatingInput"
            placeholder="Address"
            defaultValue={data.personalInfo.address}
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Address</label>
        </div>
        <div className="form-floating mb-2">
          <input
            name="mobile"
            type="text"
            className="form-control personal-info-input"
            id="floatingInput"
            placeholder="Mobile"
            defaultValue={data.personalInfo.mobile}
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Mobile</label>
        </div>
        <div className="form-floating mb-2">
          <input
            name="email"
            type="text"
            className="form-control personal-info-input"
            id="floatingInput"
            placeholder="Email address"
            defaultValue={data.personalInfo.email}
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control personal-info-input"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            name="objective"
            defaultValue={data.personalInfo.objective}
            onChange={handleOnChange}
            style={{ height: "8rem" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Objective</label>
        </div>
      </>
    </div>
  );
}

PersonalInfoInput.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default PersonalInfoInput;
