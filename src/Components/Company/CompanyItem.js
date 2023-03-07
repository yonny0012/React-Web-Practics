import { deleteCompany } from "./CompanyServer";
import { useNavigate } from "react-router";
import React from "react";

const CompanyItem = ({ company, listCompanies })=>{
  const history = useNavigate();
  const handleDelete = async (companyID) => {
    await deleteCompany(companyID);
    listCompanies();
  };

  return(
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card card-body card-dark">
        <h3 className="card-title text-center">
          {company.name}
          <button 
            className="btn btn-sm btn-info ms-2" 
            onClick={()=>history(`/updateCompany/${company.id}`)}>
              Update
          </button>
        </h3>
        <p className="card-text">Company Id: <strong>{company.id}</strong></p>
        <p className="card-text">Website: <strong>{company.website}</strong></p>
        <a  target="_blank" href={company.website} className="btn btn-primary" rel="noreferrer noopener">Go to site</a>
        <button onClick = {()=>company.id && handleDelete(company.id)} className="btn btn-danger my-2">Delete Company</button>
      </div>
    </div>
  );
};
export default CompanyItem;