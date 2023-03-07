import './App.css';
import { BrowserRouter, Route, Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import CompanyList from "./Components/Company/CompanyList";
import CompanyForm from "./Components/Company/CompanyForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container my-4">
        <Router>
          <Route exact path="/" component={CompanyList} />
          <Route path="/companyForm" component={CompanyForm} />
        </Router>  
      </div>
    </BrowserRouter>
  );
}

export default App;
