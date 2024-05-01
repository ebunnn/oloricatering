import React from "react";
import "../css/PlaceAnOrder.css";
import {NavLink} from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import Banner from "./Banner";


export default function PlaceAnOrder() {
    return (
        <div className="placeanorder--container">
            <Banner page="Place an Order" />

            <h3>How to place an order</h3>
            <p>To place an order you have a few options:</p>
            <ul className="placeanorder--order-options">
                <li>Call our <a href="tel:+14436758105">phone number</a> </li>
                <li>Send us a message on the contact form located on the <NavLink to="/contact-us">Contact Us</NavLink> page</li>
                <li>Send us an email</li>
            </ul>
        </div>
    )
}