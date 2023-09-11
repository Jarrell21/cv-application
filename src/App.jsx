import { useState } from "react";
import Resume from './components/Resume';
import Sidebar from './components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const [data, setData] = useState({
    generalInfo: {
      fullName: 'Juan Dela Cruz',
      birthDate: date,
      objective: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus deserunt est expedita explicabo iste placeat debitis dolorem? Commodi, natus?',
      nationality: 'Filipino',
      address: 'Mabalacat City',
      mobile: '12345678910',
      email: 'abc@email.com',
      skills: ['Skill1', 'Skill2'],
      languages: ['Language1'],
    },
    workExperience: [
      {
        companyName: 'FILAM Software Technology',
        duration: '2022 Feb to 2022 May',
        position: 'Web Developer Trainee',
        specialization: 'Software Development',
        industry: 'Information Technology (Software)',
        natureOfWork: [
          'On-the-job training',
          'Collaborates with a team in developing a web application'
        ],
      }
    ],
    education: [
      {
        attainment: "Bachelor's/College Degree",
        schoolName: 'Senior high school diploma',
        course: 'BS in Computer Engineering',
        dateGraduated: '2022 Jun',
      }
    ]
  })

  return (
    <>
      <header>Resume creator</header>
      <div className="main">
        <Resume data={data} />
        <Sidebar data={data} setData={setData} />
      </div>
      <footer>
        Created by Jarrell21
        <a href="https://github.com/Jarrell21" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
        </a>
    </footer>
    </>
  )
}

export default App
