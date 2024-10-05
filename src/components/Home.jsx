import {React, useEffect} from "react";
import "../css/Home.css";
// import amala from "../Images/amalaHome.png";
import amala from "../Images/amala.jpg";
import {NavLink} from "react-router-dom";
// import AOS from "aos";
// import 'aos/dist/aos.css';

export default function Home({showDropdown}) {

    // useEffect(()=> {
    //     AOS.init({duration: 2000});
    // }, []);

    return (
        <div className={`home--container ${showDropdown ? 'home--container-overlay' : ''}`}>
            <img className="home--amalaImg" src="https://oloricateringhero.s3.amazonaws.com/amala2.png" alt="Image of amala" />
            <div className="home--imageTextContainer">
                <div className="home--text">
                    <h3 className="home--olori">Olori Catering Services</h3>
                    <h1 style={{textShadow:"2px 2px 4px #000000"}}>Welcome to the<br></br> world of authentic<br></br> Nigerian tastes!</h1>
                    <NavLink to="/our-services"><button class="button-74" role="button">Our Services</button></NavLink>
                </div>
            </div>
        </div>
    )
}