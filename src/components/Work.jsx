import React from 'react'
import PropTypes from 'prop-types'

function Work({ companyName, duration, position, specialization, industry, natureOfWork }) {
    return (
    <div className="work">
        <div className='work-header'>
        <h3>{companyName}</h3>
        <p>({duration})</p>
        </div>
        <div className='work-row'>
            <div className='work-left-col'>
            <p>Position: </p>
            <p>Specialization: </p>
            <p>Industry: </p>
            <p>Nature of Work: </p>
            </div>
            <div className='work-right-col'>
            <p>{position}</p>
            <p>{specialization}</p>
            <p>{industry}</p>
            {natureOfWork.map((desc) => (<p key={desc}>- {desc}</p>))}
            </div>
        </div>
    </div>
    )
}

Work.propTypes = {
    companyName: PropTypes.any,
    duration: PropTypes.any,
    position: PropTypes.any,
    specialization: PropTypes.any,
    industry: PropTypes.any,
    natureOfWork: PropTypes.any
}

export default Work