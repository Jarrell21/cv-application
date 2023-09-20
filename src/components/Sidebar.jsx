import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "./Sidebar/InputGroup";
import PersonalInfoInput from "./Sidebar/PersonalInfoInput";
import WorkInput from "./Sidebar/WorkInput";
import EducationInput from "./Sidebar/EducationInput";
import "../styles/Sidebar.css";

function Sidebar({ data, setData }) {
  const [visible, setVisible] = useState(false);

  const handleAddButton = (group) => {
    setVisible((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  return (
    <aside className="side">
      <PersonalInfoInput data={data} setData={setData} />
      <WorkInput
        data={data}
        setData={setData}
        visible={visible}
        handleAddButton={handleAddButton}
      />
      <EducationInput
        data={data}
        setData={setData}
        visible={visible}
        handleAddButton={handleAddButton}
      />
    </aside>
  );
}

Sidebar.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.any,
};

export default Sidebar;
