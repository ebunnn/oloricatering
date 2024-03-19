import React from "react";
import "../css/AboutUs.css"
import banner from "../Images/olori cover page.png"


export default function AboutUs() {
    return (
        <div className="aboutus--container">
            <img className="aboutus--banner" src={banner} alt="Our Services banner" />
            <h2 className="aboutus--bannerText">About Us</h2>

        </div>
    )
}