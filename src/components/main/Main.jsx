import React from 'react'
import PropTypes from 'prop-types'
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';
import '../../styles/Main.css'

function Main({ info, setInfo }) {
  return (
    <div className='main'>
      <div className="main-row">
        <div className='main-left-row'>
          <GeneralInfo info={info} setInfo={setInfo}/>
        </div>
        <div className="main-right-row">
          <PracticalExp />
          <EducationalExp />
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {
  info: PropTypes.any,
  setInfo: PropTypes.any,
}

export default Main
