import { useState } from "react";
import Sidebar from './components/Sidebar';
import GeneralInfo from './components/GeneralInfo';
import EducationalExp from './components/EducationalExp';
import PracticalExp from './components/PracticalExp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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
    skills: ['Skill1', 'Skill2'],
    languages: ['Language1']
  })

  return (
    <>
      <header>Resume creator</header>
      <div className="main">
        <main className='resume'>
          <div className="resume-row">
            <div className='resume-left-col'>
              <GeneralInfo info={info} setInfo={setInfo}/>
            </div>
            <div className="resume-right-col">
              <PracticalExp />
              <EducationalExp />
            </div>
          </div>
        </main>
        <Sidebar info={info} setInfo={setInfo} />
      </div>
      <footer>
        Created by Jarrell21
        <a href="https://github.com/Jarrell21" target="_blank" rel="noreferrer">
            {/* <i className="fa-brands fa-github"></i> */}
            <FontAwesomeIcon icon={faGithub} />
        </a>
    </footer>
    </>
  )
}

export default App
