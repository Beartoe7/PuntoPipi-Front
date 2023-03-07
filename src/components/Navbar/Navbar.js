import { Link } from "react-router-dom";
import "./Navbar.css"



function Navbar() {
  return (
    <>
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand m-2"><h1 className="m-3"> .pipi </h1></Link> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/toilets" className="nav-link">Toilets </Link>
          </li>
          <li className="nav-item">
            <Link to="/access" className="nav-link"> Access</Link> 
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About the project</Link> 
          </li>
        </ul>
      </div>
    </nav>

    
    </>
  );
}


     



export default Navbar;