import "./HomePage.css";
// import ToiletsListPage from "../ToiletsListPage";
import homeBackground from '../../images/pexels-photo-2949748.jpeg';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Navbar/footer";



function HomePage() {
  return (
    <>
    <div style={{ 
      backgroundImage: `url(${homeBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }} className="m-3">
      {/* Your component content */}
    </div>
        
    </>
  );
}

export default HomePage;