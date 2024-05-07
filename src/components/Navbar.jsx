import {React, useState} from "react";
import "../css/Navbar.css"
import {NavLink} from "react-router-dom";
import OloriCateringLogo from "../Images/olori catering 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Navbar( {showDropdown, setShowDropdown}) {
    
    const [isBarsShowing, setIsBarsShowing] = useState(true);
    
    const handleBars = () => {
        setIsBarsShowing((prev) => !prev);
        setShowDropdown((prev) => !prev);
    }
    
    //When bars is true, showDropdown should be false
    //When bars is false, showDropdown should be true

    return (
        <div className="navbar--container">
            <div className="navbar--contents">
                    <NavLink to="/"><img className="navbar--logo" style={{width: "180px",top:"0.5vh",height: "auto",position: "relative"}} src="https://github.com/ebunnn/oloricatering/blob/main/src/Images/olori%20catering%20logo%20compressed.png?raw=true" alt="Website logo" /></NavLink>
                    <FontAwesomeIcon className="navbar--bars" icon={isBarsShowing ? faBars : faTimes} onClick={handleBars} />
                    <ul className="navbar--links">
                            <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
                            <li><NavLink to="/about-us" activeClassName="active-link">About Us</NavLink></li>
                            <li><NavLink to="/our-services" activeClassName="active-link">Our Services</NavLink></li>
                            <li><NavLink to="/contact-us" activeClassName="active-link">Contact Us</NavLink></li>
                            <li><NavLink to="/place-an-order" activeClassName="active-link">Place an Order</NavLink></li>
                    </ul>  
            </div>
            {/* Using the && operator returns what is on its right if what is on its left is true */}
            {showDropdown && 
                <div className="navbar--bars-dropdown">
                    <ul className="navbar--bars-dropdown-links">
                            <li><NavLink to="/" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Home</NavLink></li>
                            <li><NavLink to="/about-us" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>About Us</NavLink></li>
                            <li><NavLink to="/our-services" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Our Services</NavLink></li>
                            <li><NavLink to="/contact-us" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Contact Us</NavLink></li>
                            <li><NavLink to="/place-an-order" activeClassName="active-link" onClick={() => {setShowDropdown(false); setIsBarsShowing(true)}}>Place an Order</NavLink></li>
                    </ul>
                </div>
                } 
        </div>
        
    )
}