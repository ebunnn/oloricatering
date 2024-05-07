import React from "react";
import "../css/Banner.css"
import banner from "../Images/olori cover page.png"

export default function Banner(props) {
    return (
        <div className="banner--content">
            <img className="banner-img" style={{width:"100%"}} src="https://github.com/ebunnn/oloricatering/blob/main/src/Images/olori%20banner%20compressed.png?raw=true" alt="Our Services banner" />
            <h2 className="banner--text">{props.page}</h2>
        </div>
    )
}