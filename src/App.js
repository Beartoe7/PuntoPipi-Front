import './App.css';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


import { Routes, Route } from "react-router-dom";
import ToiletsListPage from './pages/ToiletsListPage';
import Footer from './components/Navbar/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/toilets" element={<ToiletsListPage />} />
        {/* <Route path="/users" element={<ToiletsListPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>  
      <Footer />    
    </div>
  );
}

export default App;
