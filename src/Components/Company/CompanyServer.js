// aqui va la direccion URL de la api rest
// const API_URL = "https://jsonplaceholder.typicode.com/users";
 const API_URL = "http://localhost:3001/company/";

export const listCompanies= async ()=>{
  return await fetch(API_URL)
    .then((response) => response.json());
};

export const registerCompany = async (newCompany)=>{
  return await fetch(API_URL,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      "name": String(newCompany.name).trim(),
      "fundation": parseInt(newCompany.fundation),
      "website": String(newCompany.website).trim()
    })
  });
};
export const deleteCompany = async (companyID)=>{
  return await fetch(`${API_URL}/${companyID}`,{
    method:'DELETE'
  });
}
export const getCompany = async (companyID)=>{
  return await fetch(`${API_URL}${companyID}`);
};