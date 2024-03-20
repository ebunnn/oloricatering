import React from "react";
import "../css/Home.css";
import amala from "../Images/amalaHome.png";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="home--container">
            <img className="home--amalaImg" src={amala} alt="Image of amala" />
            <div className="home--imageTextContainer">
                <div className="home--text">
                    <h3 style={{fontSize:"3.5rem"}} className="home--olori">Olori Catering Services</h3>
                    <h1>Welcome to the<br></br> world of authentic<br></br> Nigerian tastes!</h1>
                    <Link to="/our-services"><button class="button-74" role="button">Our Services</button></Link>
                </div>
            </div>
        </div>
    )
}