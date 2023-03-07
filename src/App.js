import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import CompanyList from "./Components/Company/CompanyList";
import CompanyForm from "./Components/Company/CompanyForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container my-4">
        <Routes>
          <Route exact path="/" element={ <CompanyList /> } />
          <Route path="/companyForm" element={ <CompanyForm /> } />
          <Route path="/updateCompany/:id" element={ <CompanyForm /> } />

        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
