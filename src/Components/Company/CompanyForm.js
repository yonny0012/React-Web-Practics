import { useState } from "react";
import * as CompanyServer from "./CompanyServer";
import { useNavigate } from "react-router"

const CompanyForm = ()=>{
  
  const history = useNavigate();
  const initialState = {id:0,name:"",fundation:1980,website:""};
  const [company, setCompany] = useState(initialState);

  const handleInpuChange = (e)=>{
    setCompany({...company, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      let res;
      res = await CompanyServer.registerCompany(company);
      const data = res.json();
      console.log(data);

      history("/");
    } catch (error) {
      alert(error);      
    }
  };

  return(
    <div id="forms-container" className="container text-bg-dark">
      <h2 className="mb-3 text-center">Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" value={company.name} onChange={handleInpuChange} className="form-control"  minLength="2" maxLength="50" autoFocus="active" placeholder="Name of the company..."/>
        </div>
        <div className="mb-3">
          <label className="form-label">Fundation</label>
          <input type="number" name="fundation" value={company.fundation} onChange={handleInpuChange} className="form-control" min="1970" max="2023" placeholder="Date of the fundation company" required  />
        </div>
        <div className="mb-3">
          <label className="form-label">Website</label>
          <input type="url" name="website" value={company.website} onChange={handleInpuChange} className="form-control"  maxLength="100" placeholder="https://www.example.com/"/>
        </div>
        <button type="submit" className="btn btn-block btn-success text-center">Registrer</button>
      </form>
    </div>
  );
};
export default CompanyForm; 