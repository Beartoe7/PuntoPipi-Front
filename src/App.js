import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Navbar/footer';

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewToilet from "./pages/NewToilet"
import ToiletsListPage from "./pages/ToiletsListPage"
// import ToiletIndividual from "./pages/ToiletIndividual"
import LogIn from "./pages/access/LogIn"
// import LogOut from "./pages/access/LogOut"
import SignUp from "./pages/access/SignUp"
import About from "./pages/About"
import { Routes, Route } from "react-router-dom";
import MapContainer from './components/MapContainer ';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/toilets" element={<ToiletsListPage />} />
        <Route path="/toilets/new" element={<NewToilet />} />
        {/* <Route path="/toilets/:toiletId" element={<ToiletIndividual />} /> */}
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/users" element={<LogOut />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<MapContainer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>  
      <Footer />    
    </div>
  );
}

export default App;
