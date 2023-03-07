import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import CompanyList from "./Components/Company/CompanyList";
import { BrowserRouter  } from "recat-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container my-4">
        <CompanyList />    
      </div>
    </BrowserRouter>
  );
}

export default App;
