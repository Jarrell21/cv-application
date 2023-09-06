import React from 'react'
import PropTypes from 'prop-types'
import GeneralInfo from './GeneralInfo';
import Work from './Work';
import Education from './Education';

function Resume({ info, setInfo }) {
    return (
    <main className='resume'>
        <div className="resume-row">
            <div className='resume-left-col'>
                <GeneralInfo info={info} setInfo={setInfo}/>
            </div>
            <div className="resume-right-col">
            <div className='work-experience'>
                <h3>WORK EXPERIENCE</h3>
                <Work companyName={info.companyName} duration={info.duration} position={info.position} specialization={info.specialization} industry={info.industry} natureOfWork={info.natureOfWork} />
                <Work companyName={info.companyName} duration={info.duration} position={info.position} specialization={info.specialization} industry={info.industry} natureOfWork={info.natureOfWork} />
                <Work companyName={info.companyName} duration={info.duration} position={info.position} specialization={info.specialization} industry={info.industry} natureOfWork={info.natureOfWork} />
            </div>
            <div className='education'>
                <h3>EDUCATION</h3>
                <Education dateGraduated={info.dateGraduated} attainment={info.attainment} schoolName={info.schoolName} course={info.course} />
                <Education dateGraduated={info.dateGraduated} attainment={info.attainment} schoolName={info.schoolName} course={info.course} />
                <Education dateGraduated={info.dateGraduated} attainment={info.attainment} schoolName={info.schoolName} course={info.course} />
            </div>
            </div>
        </div>
    </main>
    )
}

Resume.propTypes = {
    info: PropTypes.any,
    setInfo: PropTypes.any
}

export default Resume