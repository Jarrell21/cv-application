import React, { useState } from 'react';
import PropTypes from 'prop-types'
import '../../styles/Side.css'

function Side({ info, setInfo }) {
  const inputList = [
    {label: 'Full name', type: 'text', name: 'fullName'},
    {label: 'Birthdate', type: 'date', name: 'birthDate'},
    {label: 'Address', type: 'text', name: 'address'},
    {label: 'Mobile number', type: 'text', name: 'mobile'},
    {label: 'Email', type: 'email', name: 'email'},
    {label: 'Skills', type: 'text', name: 'skills', isArray: true},
    {label: 'Languages', type: 'text', name: 'languages', isArray: true},
  ];
  //make dynamic
  const [children, setChildren] = useState(
    [
      {target:'skills', data: []},
      {target:'languages', data: []}
  ]);

  const handleAddInput = (input) => {
    children.forEach((child) => {
      if(child.target == input.name){
        child.data.push(<Input key={child.data.length} input={input} info={info} setInfo={setInfo} />)
      }
    })

    const first = children.find((element) => element.target == input.name)
    const newChildren = children.filter((element) => element.target != first)

    setChildren(newChildren);
    console.log(newChildren);
  }

  return (
    <div className='side'>
      {inputList.map((input) => {
        if(input.isArray){
          return (
            <div key={input.label} className='input'>
              <div className={input.name + ' input'}>
                <label htmlFor={input.name}>{input.label}</label>
                {children.map((child) => {
                  if(child.target == input.name){
                    return child.data.map((input) => input)
                  }
                })}
              </div>
              <button className={input.name + '-btn'}
                onClick={() => handleAddInput(input)}
              >
                Add {input.name}
              </button>
            </div>
          )
        }
          return (
            <div key={input.label} className='input'>
              <label htmlFor={input.name}>{input.label}</label>
              <Input input={input} info={info} setInfo={setInfo}/>
            </div>
          )
      })}
    </div>
  )
}

function Input({ input, info, setInfo }){
  const handleInputChange = (e) => {
    for(let key in info){
      if(key == input.name){
        if(key != 'skills' && key != 'languages'){
          if(e.target.value == ''){
            setInfo({...info, [key]: input.label})
            break;
          }
        
          setInfo({...info, [key]: e.target.value})
        }
        else {
          if(e.target.value == ''){
            setInfo({...info, [key]: []})
            break;
          }

          setInfo({...info, [key]: [...info[key], e.target.value]})
        }
      }
    }
  }

  return (
      <input title={input.name} type={input.type} name={input.name} onChange={(e) => handleInputChange(e)} />
  )
}

Side.propTypes = {
  info: PropTypes.any,
  setInfo: PropTypes.any,
}
Input.propTypes = { 
  input: PropTypes.any,
  info: PropTypes.any,
  setInfo: PropTypes.any,
}

export default Side
