import React from "react";
import PropTypes from "prop-types";

function Input({ type, label, name }) {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input type={type} />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
