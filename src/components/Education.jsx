import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Resume.css'

function Education({ dateGraduated, attainment, schoolName, course }){
    return (
        <div className='attainment'>
            <div className="attainment-row">
                <div className="attainment-left-row">
                    <p>{dateGraduated}</p>
                </div>
                <div className="attainment-right-row">
                    <p>{attainment}</p>
                    <p>{schoolName}</p>
                    <p>{course}</p>
                </div>
            </div>
        </div>
    )
}

Education.propTypes = {
    dateGraduated: PropTypes.any,
    attainment: PropTypes.any,
    schoolName: PropTypes.any,
    course: PropTypes.any,
}

export default Education
