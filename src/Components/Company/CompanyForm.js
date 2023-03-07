import { useEffect, useState } from "react";
import * as CompanyServer from "./CompanyServer";
import { useNavigate, useParams } from "react-router"

const CompanyForm = ()=>{
  
  const history = useNavigate();
  const params = useParams();
  const initialState = {id:0,name:"",fundation:1980,website:""};
  const [company, setCompany] = useState(initialState);

  console.log(params);

  const handleInpuChange = (e)=>{
    setCompany({...company, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      let res;
      if(!params.id){
        res = await CompanyServer.registerCompany(company);
        const data = res.json();
        if(data.ok){
          setCompany(initialState);
        }
      }else{
        await CompanyServer.updateCompany(params.id, company);
      }
      history("/");
    } catch (error) {
      alert(error);      
    }
  };
  const getCompany = async (companyID)=>{
    try {
      const res = await CompanyServer.getCompany(companyID);
      const data = await res.json();
      const {name, fundation, website} = data;
      setCompany({name, fundation, website});
      
    } catch (error) {
      alert(error)
    }
  };
  useEffect(()=>{
    if(params.id){
      getCompany(params.id);
    }
    // eslint-disable-next-line
  },[]);
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
          {
            params.id?(
              <button type="submit" className="btn btn-block btn-primary">
                Update
              </button>
            ):(
              <button type="submit" className="btn btn-block btn-success">
                Register
              </button>
            )
          }
        
      </form>
    </div>
  );
};
export default CompanyForm; 