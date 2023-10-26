import { useState } from "react";
import Resume from "./components/Resume/Resume";
import Sidebar from "./components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import sampleData from "./sampleData";

function App() {
  const [data, setData] = useState(sampleData);

  return (
    <div className="d-flex flex-column justify-content-between">
      <header className="p-3 fs-2">CV Application</header>
      <div className="main container-lg mt-4">
        <div className="row column-gap-4">
          <Resume data={data} />
          <Sidebar data={data} setData={setData} />
        </div>
      </div>
      <footer className="text-center p-3 pt-5 fs-5 bg-white">
        Created by Jarrell21
        <a href="https://github.com/Jarrell21" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </footer>
    </div>
  );
}

export default App;
