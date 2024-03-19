import React from "react";
import "../css/Home.css";
import amala from "../Images/amalaHome.png";

export default function Home() {
    return (
        <div className="home--container">
            <img className="home--amalaImg" src={amala} alt="Image of amala" />
            <div className="home--imageTextContainer">
                <div className="home--text">
                    <h3 style={{fontSize:"3.5rem"}} className="home--olori">Olori Catering Services</h3>
                    <h1 className>Welcome to the<br></br> world of authentic<br></br> African tastes!</h1>
                    <button class="button-74" role="button">Contact Us</button>
                </div>
            </div>
        </div>
    )
}