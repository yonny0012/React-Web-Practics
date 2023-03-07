import React, { useEffect, useState } from "react";
import * as CompanyServer from "./CompanyServer";
import "../../bootstrap/css/bootstrap.min.css";
//  Components:
import CompanyItem from "./CompanyItem";

const CompanyList = ()=>{

  const [companies, setCompanies] = useState([]);
  const listCompanies = async ()=>{
    try {
      const res = await CompanyServer.listCompanies();
    
      setCompanies(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect (()=>{
    listCompanies();
  },[]);

  return (
    <div className="row">
      {
        companies.map(
          (company)=>
            // <h2>{company.id}</h2>
            <CompanyItem  key={company.id} company={company}/>
        )
      } 
        
    </div>
  );
 
}
export default CompanyList;