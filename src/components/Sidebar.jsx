import React, { useState } from 'react';
import PropTypes from 'prop-types'
import '../styles/Sidebar.css'

function Sidebar({ info, setInfo }) {
  const personalInfoinputList = [
    {label: 'Full name', type: 'text', name: 'fullName'},
    {label: 'Birthdate', type: 'date', name: 'birthDate'},
    {label: 'Address', type: 'text', name: 'address'},
    {label: 'Mobile number', type: 'text', name: 'mobile'},
    {label: 'Email', type: 'email', name: 'email'},
    {label: 'Skills', type: 'text', name: 'skills', isArray: true},
    {label: 'Languages', type: 'text', name: 'languages', isArray: true},
  ];

  const workInputList = [
    {label: 'Company name', type: 'text', name: 'companyName'},
    {label: 'Start date', type: 'date', name: 'startDate'},
    {label: 'End date', type: 'date', name: 'endDate'},
    {label: 'Position', type: 'text', name: 'position'},
    {label: 'Specialization', type: 'text', name: 'specialization'},
    {label: 'Industry', type: 'email', name: 'industry'},
    {label: 'Nature of work', type: 'text', name: 'natureOfWork', isArray: true},
  ];

  const educationInputList = [
    {label: 'School name', type: 'text', name: 'schoolName'},
    {label: 'Attainment', type: 'text', name: 'attainment'},
    {label: 'Course', type: 'text', name: 'course'},
    {label: 'Date graduated', type: 'date', name: 'dateGraduated'},
  ];

  return (
    <aside className='side'>
      <div className='side-personal-info'>
        <h3>Personal Information</h3>
        <InputGroup group={personalInfoinputList} info={info} setInfo={setInfo}/>
      </div>
      <div className='side-work-exp'>
        <h3>Work Experience</h3>
        <button>Add work experience</button>
        {/* <InputGroup group={workInputList} info={info} setInfo={setInfo}/> */}
      </div>
      <div className='side-education'>
        <h3>Education</h3>
        <button>Add education</button>
        {/* <InputGroup group={educationInputList} info={info} setInfo={setInfo}/> */}
      </div>
    </aside>
  )
}

function Input({ input, info, setInfo }){
  return (
      <input title={input.name} type={input.type} name={input.name} />
  )
}

function InputGroup({ group, info, setInfo }){
  return <div className='input-group'>
    {group.map((input) => {
      return <div key={input.label} className='input'>
        <label htmlFor={input.name}>{input.label}</label>
        <Input input={input} info={info} setInfo={setInfo}/>
      </div>
    })}
  </div>
}

Sidebar.propTypes = {
  info: PropTypes.any,
  setInfo: PropTypes.any,
}

Input.propTypes = { 
  input: PropTypes.any,
  info: PropTypes.any,
  setInfo: PropTypes.any,
}

InputGroup.propTypes = {
  group: PropTypes.any,
  info: PropTypes.any,
  setInfo: PropTypes.any,
}

export default Sidebar
