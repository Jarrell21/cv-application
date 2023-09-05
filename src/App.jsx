import { useState } from "react";
import Sidebar from './components/Sidebar';
import GeneralInfo from './components/GeneralInfo';
import EducationalExp from './components/EducationalExp';
import PracticalExp from './components/PracticalExp';
import './App.css'

function App() {
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const [info, setInfo] = useState({
    fullName: 'Juan Dela Cruz',
    birthDate: date,
    objective: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus deserunt est expedita explicabo iste placeat debitis dolorem? Commodi, natus?',
    nationality: 'Filipino',
    address: 'Mabalacat City',
    mobile: '12345678910',
    email: 'abc@email.com',
    skills: [],
    languages: []
  })

  return (
    <div className='row'>
      <div className='main'>
        <div className="main-row">
          <div className='main-left-col'>
            <GeneralInfo info={info} setInfo={setInfo}/>
          </div>
          <div className="main-right-col">
            <PracticalExp />
            <EducationalExp />
          </div>
        </div>
      </div>
      <Sidebar info={info} setInfo={setInfo} />
    </div>
  )
}

export default App
