import PropTypes from "prop-types";

function InputGroup({ group, data, setData, action }) {
  return (
    <>
      {group.map((input) => {
        return (
          <div className="input-group" key={input.name}>
            <div>
              <label htmlFor={input.name}>{input.label}</label>
              <input type={input.type} />
            </div>
            {/* <div className="input-group">
              <label htmlFor="fullName">Full name</label>
              <input
                className="input"
                name="fullName"
                type="text"
                defaultValue={data.personalInfo.fullName}
              />
            </div> */}
          </div>
        );
      })}
    </>
  );
}

InputGroup.propTypes = {
  group: PropTypes.array,
  data: PropTypes.object,
  setData: PropTypes.func,
  action: PropTypes.any,
};

export default InputGroup;
