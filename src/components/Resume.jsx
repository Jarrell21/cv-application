import React from 'react'
import PropTypes from 'prop-types'
import GeneralInfo from './GeneralInfo';
import Work from './Work';
import Education from './Education';

function Resume({ data }) {
    return (
    <main className='resume'>
        <div className="resume-row">
            <div className='resume-left-col'>
                <GeneralInfo data={data} />
            </div>
            <div className="resume-right-col">
            <div className='work-experience'>
                <h3>WORK EXPERIENCE</h3>
                {data.workExperience && data.workExperience.map((work) => {
                    return <Work key={work} companyName={work.companyName} duration={work.duration} position={work.position} specialization={work.specialization} industry={work.industry} natureOfWork={work.natureOfWork} />
                })}
            </div>
            <div className='education'>
                <h3>EDUCATION</h3>
                {data.education && data.education.map((educ) => {
                    return <Education key={educ} dateGraduated={educ.dateGraduated} attainment={educ.attainment} schoolName={educ.schoolName} course={educ.course} />
                })}
            </div>
            </div>
        </div>
    </main>
    )
}

Resume.propTypes = {
    data: PropTypes.any,
    setData: PropTypes.any
}

export default Resume