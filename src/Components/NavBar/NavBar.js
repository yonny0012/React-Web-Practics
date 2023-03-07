import { Link } from "react-router-dom";
const NavBar = ()=>{
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" path="/" to={"/" }>Company | IPHORD</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to={"/"} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/companyForm"} >Add Company</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;