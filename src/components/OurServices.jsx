import React from "react";
import "../css/OurServices.css"
import banner from "../Images/olori cover page.png"
import catering from "../Images/catering.jpg"
import amala from "../Images/amala.jpg"
import cuisine from "../Images/africanCuisine.jpg"
import delivery from "../Images/Designer.jpg"

export default function OurServices() {
    return (
        <div className="ourservices--container">
            <img className="ourservices--banner" src={banner} alt="Our Services banner" />
            <h2 className="ourservices--bannerText">Our Services</h2>
            <div className="ourservices--gridContainer">
                <div className="image-container">
                    <img className="ourservices--gridImg" src={amala} alt="Amala image"/>
                    <span className="ourservices--imageText">Àmàlà on Spot</span>
                </div>
                <div className="image-container">
                    <img className="ourservices--gridImg" src={catering} alt="Catering image"/>
                    <span className="ourservices--imageText">Catering</span>
                 </div>
                 <div className="image-container">
                    <img className="ourservices--gridImg" src={cuisine} alt="African cuisine image"/>
                    <span className="ourservices--imageText">African Cuisine</span>
                </div>
                <div className="image-container">
                    <img className="ourservices--gridImg" src={delivery} alt="Delivery image"/>
                    <span className="ourservices--imageText">Delivery</span>
                </div>
            </div>
        </div>
    )
}