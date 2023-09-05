import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Resume.css'

function EducationalExp(props) {
    return (
    <div className='education'>
        <h3>EDUCATION</h3>
        <Education />
        <Education />
        <Education />
    </div>
    )
}

function Education({dateGraduated, attainment, schoolName, course}){
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

Education.defaultProps = {
    dateGraduated: '2022 Jun',
    attainment: "Bachelor's/College Degree",
    schoolName: 'Senior high school diploma',
    course: 'BS in Computer Engineering',
}

EducationalExp.propTypes = {}
Education.propTypes = {
    dateGraduated: PropTypes.any,
    attainment: PropTypes.any,
    schoolName: PropTypes.any,
    course: PropTypes.any,
}

export default EducationalExp
