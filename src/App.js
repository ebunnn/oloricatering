import './css/App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from "./components/Home"
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

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
          </Routes>
          {/* <Footer />  */}
        </header>
      </Router>
    </div>
  );
}

export default App;
