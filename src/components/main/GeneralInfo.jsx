import React from 'react'
import PropTypes from 'prop-types'

function GeneralInfo({ info, setInfo }) {

  return (
    <div>
      <div className="img-section">
        <p>Image here</p>
        <p className='applicant-name'>{info.fullName}</p>
      </div>
      <div className="objective-section">
        <h3>OBJECTIVE</h3>
        <p>{info.objective}</p>
      </div>
      <div className="personal-info-section">
        <h3>PERSONAL INFORMATION</h3>
        <p>Birthdate: {info.birthDate}</p>
        <p>Nationality: {info.nationality}</p>
        <p>Address: {info.address}</p>
      </div>
      <div className="contact-info-section">
        <h3>CONTACT INFORMATION</h3>
        <p>Mobile: {info.mobile}</p>
        <p>Email: {info.email}</p>
      </div>
      <div className="skills-section">
        <h3>SKILLS</h3>
        {info.skills.map((skill) => {
          return <p key={skill}>{skill}</p>
        })}
      </div>
      <div className="languages-section">
        <h3>LANGUAGES</h3>
        {info.languages.map((language) => {
          return <p key={language}>{language}</p>
        })}
      </div>
    </div>
  )
}

GeneralInfo.propTypes = {
  info: PropTypes.any,
  setInfo: PropTypes.any,
}

export default GeneralInfo;
