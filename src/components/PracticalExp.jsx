import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Resume.css'

function PracticalExp(props) {
  return (
    <div className='work-experience'>
      <h3>WORK EXPERIENCE</h3>
      <Work />
    </div>
  )
}

function Work({companyName, duration, position, specialization, industry, natureOfWork }){
  return (
    <div className='work'>
      <div className='work-header'>
        <h3>{companyName}</h3>
        <p>({duration})</p>
      </div>
      <div className='work-row'>
        <div className='work-left-row'>
          <p>Position: </p>
          <p>Specialization: </p>
          <p>Industry: </p>
          <p>Nature of Work: </p>
        </div>
        <div className='work-right-row'>
          <p>{position}</p>
          <p>{specialization}</p>
          <p>{industry}</p>
          {natureOfWork.map((desc) => (<p key={desc}>- {desc}</p>))}
        </div>
      </div>
    </div>
  )
}

Work.defaultProps = {
  companyName: 'FILAM Software Technology',
  duration: '2022 Feb to 2022 May',
  position: 'Web Developer Trainee',
  specialization: 'Software Development',
  industry: 'Information Technology (Software)',
  natureOfWork: [
    'On-the-job training',
    'Collaborates with a team in developing a web application'
  ],
}

PracticalExp.propTypes = {}
Work.propTypes = {
  companyName: PropTypes.any,
  duration: PropTypes.any,
  position: PropTypes.any,
  specialization: PropTypes.any,
  industry: PropTypes.any,
  natureOfWork: PropTypes.array,
}

export default PracticalExp
