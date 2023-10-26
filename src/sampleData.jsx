import { v4 as uuidv4 } from "uuid";

const sampleData = {
  personalInfo: {
    fullName: "Juan Dela Cruz",
    birthDate: "1999-05-23",
    objective:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus deserunt est expedita explicabo iste placeat debitis dolorem? Commodi, natus?",
    nationality: "Filipino",
    address: "Taguig City",
    mobile: "+63 975 456 789",
    email: "juan@email.com",
    skills: [
      { id: uuidv4(), skillName: "HTML" },
      { id: uuidv4(), skillName: "CSS" },
      { id: uuidv4(), skillName: "JavaScript" },
    ],
    languages: [
      { id: uuidv4(), languageName: "Filipino" },
      { id: uuidv4(), languageName: "English" },
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
      schoolName: "Philippine University",
      course: "BS in Computer Science",
      graduationDate: "2015-06-10",
    },
    {
      id: uuidv4(),
      attainment: "High school diploma",
      schoolName: "Cambridge University",
      course: "STEM",
      graduationDate: "2010-04-10",
    },
  ],
};

export default sampleData;