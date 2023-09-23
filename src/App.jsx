import { useState } from "react";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState({
    personalInfo: {
      fullName: "Juan Dela Cruz",
      birthDate: "2000-06-21",
      objective:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus deserunt est expedita explicabo iste placeat debitis dolorem? Commodi, natus?",
      nationality: "Filipino",
      address: "Taguig City",
      mobile: "+63 975 456 789",
      email: "juan@email.com",
      skills: [
        { id: uuidv4(), skillName: "Skill1" },
        { id: uuidv4(), skillName: "Skill2" },
      ],
      languages: [
        { id: uuidv4(), languageName: "Language1" },
        { id: uuidv4(), languageName: "Language2" },
      ],
    },
    workExperience: [
      {
        id: uuidv4(),
        companyName: "Hooli Software",
        startDate: "2016-02-01",
        endDate: "2022-05-01",
        position: "Web Developer Trainee",
        specialization: "Software Development",
        industry: "Information Technology (Software)",
        natureOfWork:
          "On-the-job training, Collaborates with a team in developing a web application",
      },
      {
        id: uuidv4(),
        companyName: "FILAM Software Technology",
        startDate: "2012-12-01",
        endDate: "2016-08-01",
        position: "Software Engineer",
        specialization: "Software Development",
        industry: "Information Technology (Software)",
        natureOfWork:
          "On-the-job training, Collaborates with a team in developing a web application",
      },
    ],
    education: [
      {
        id: uuidv4(),
        attainment: "Bachelor's Degree",
        schoolName: "Holy Angel University",
        course: "BS in Computer Engineering",
        dateGraduated: "2015-06-10",
      },
      {
        id: uuidv4(),
        attainment: "High school diploma",
        schoolName: "Cambridge University",
        course: "STEM",
        dateGraduated: "2010-04-10",
      },
    ],
  });

  return (
    <>
      <header>CV Application</header>
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
  );
}

export default App;
