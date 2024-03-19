import './css/App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from "./components/Home"
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";

function App() {
  return (
    <div className="App">
      <Router> 
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about-us" element={<AboutUs />} />    
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path='/our-services' element={<OurServices />} />                   
          </Routes>
          <Footer /> 
        </header>
      </Router>
    </div>
  );
}

export default App;
