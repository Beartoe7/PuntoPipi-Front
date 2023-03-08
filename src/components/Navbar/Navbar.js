import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { authContext } from "../../contexts/auth.context";


function Navbar() {

  const {isLoggedIn, user, deleteToken, isAuthenticated} = useContext(authContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    deleteToken();
    isAuthenticated();
    navigate("/login");
  }



    let toiletPaperIcon = <i className="fa-solid fa-toilet fa-1x"></i>

  return (
    <>

      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <Link to="/" className="m-3 navbar-brand ml-100 text-center"> <h1> {toiletPaperIcon} .pipi</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/toilets" className="nav-link">Toilets </Link>
              </li>
              <li className="nav-item">
                <Link to="/toilets/new" className="nav-link">New Toilet </Link>
              </li>
              
             <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up </Link>
              </li>
             {/* if logged in send to my profile with my toilets, if not send to log in page */}
              <li className="nav-item">
                <Link to="/login" className="nav-link">My Profile </Link>
              </li>
              <li className="nav-item">
              <button className="nav-link" onClick={logoutHandler}>Logout</button>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}






export default Navbar;