import React from "react";
import "../css/Navbar.css"
import {Link} from "react-router-dom";
import OloriCateringLogo from "../Images/olori catering 1.png"


export default function Navbar() {
      
    return (
        <div className="navbar--container">
            <Link to="/"><img className="navbar--logo" src={OloriCateringLogo} alt="Website logo" /></Link>
            <ul className="navbar--links">
                    <li><a href="javascript:void(0);"><Link to="/">Home</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/about-us">About Us</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/our-services">Our Services</Link></a></li>
                    <li><a href="javascript:void(0);"><Link to="/contact-us">Contact Us</Link></a></li>
            </ul>
        </div>
    )
}