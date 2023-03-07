import { Link } from "react-router-dom";
import "./Navbar.css"



function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" classNameName="navbar-brand m-2"><h1 classNameName="m-3 navbar-brand ml-100 text-center"> .pipi </h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/toilets" classNameName="nav-link">Toilets </Link>
              </li>
              <li className="nav-item">
                <Link to="/toilets" classNameName="nav-link">Add New Toilet </Link>
              </li>
              <li className="nav-item">
                <Link to="/toilets" classNameName="nav-link">Access </Link>
              </li>
              <li className="nav-item">
                <Link to="/toilets" classNameName="nav-link">My Profile </Link>
              </li>
              <li className="nav-item">
                <Link to="/toilets" classNameName="nav-link">About </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}






export default Navbar;