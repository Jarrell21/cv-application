import { useState } from "react";
import Main from './components/main/Main';
import Side from './components/side/Side';
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
      <Main info={info} setInfo={setInfo}/>
      <Side info={info} setInfo={setInfo} />
    </div>
  )
}

export default App
