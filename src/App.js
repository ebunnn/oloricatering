import {React, useState} from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";
import PlaceAnOrder from "./components/PlaceAnOrder";
import ScrollToTop from './components/ScrollToTop';
import NotFoundPage from './components/NotFoundPage';

function App() {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="App">
      <Router> 
        <ScrollToTop>
          <header className="App-header">
            <Navbar showDropdown={showDropdown} toggleDropdown={toggleDropdown} setShowDropdown={setShowDropdown}/>
            <Routes>
              <Route path="/" element={<Home showDropdown={showDropdown}/>} /> 
              <Route path="/about-us" element={<AboutUs />} />    
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path='/our-services' element={<OurServices />} /> 
              <Route path="/place-an-order" element={<PlaceAnOrder />}   />
              <Route path="*" element={<NotFoundPage/>} />                
            </Routes>
          </header>
           <Footer /> 
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
