import React from "react";
import "../css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <div className="footer--container">
            <p className="footer--copyright">© Olori Catering Services</p>
            <div className="footer--icons">
            <a href="https://www.instagram.com/oloricateringservices/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="footer--icon"/>
            </a>
            <a href="tel:+14436758105">
                <FontAwesomeIcon className="footer--icon" style={{fontSize:"1.3rem"}} icon={faPhone} />
            </a>
            </div>
        </div>
    )
}