import React from "react";

const CompanyItem = ({ company })=>{
  return(
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card card-body card-dark">
        <h3 className="card-title">{company.name}</h3>
        <p className="card-text">Company Id: <strong>{company.id}</strong></p>
        <p className="card-text">Website: <strong>{company.website}</strong></p>
        <a  target="_blank" href={company.website} className="btn btn-primary" rel="noreferrer noopener">Go to site</a>
      </div>
    </div>
  );
};
export default CompanyItem;