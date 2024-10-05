import React from "react";
import "../css/Banner.css"
import banner from "../Images/olori cover page.png"

export default function Banner(props) {
    return (
        <div className="banner--content">
            <img className="banner-img" style={{width:"100%"}} src="https://oloricateringhero.s3.amazonaws.com/olori+cover+page.jpg" alt="Our Services banner" />
            <h2 className="banner--text">{props.page}</h2>
        </div>
    )
}