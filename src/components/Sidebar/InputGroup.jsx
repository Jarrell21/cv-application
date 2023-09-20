import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function InputGroup({ group, data, setData, action }) {
  return (
    <div className="input-group">
      {group.map((input) => {
        return (
          <Input
            key={input.name}
            type={input.type}
            label={input.label}
            name={input.name}
          />
        );
      })}
    </div>
  );
}

InputGroup.propTypes = {
  group: PropTypes.array,
  data: PropTypes.object,
  setData: PropTypes.func,
  action: PropTypes.any,
};

export default InputGroup;
