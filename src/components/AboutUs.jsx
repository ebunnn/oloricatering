import {React, useEffect} from "react";
import "../css/AboutUs.css";
import {NavLink} from "react-router-dom";
import people from "../Images/about me compressed.png";
import Banner from "./Banner";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function AboutUs() {

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div className="aboutus--container">
            <Banner page="About Us"/>
            <div className="aboutus--weAreImage">
                <div className="aboutus--text">
                    <h1 data-aos="fade-up">We Are</h1>
                    <h3 data-aos="fade-up"style={{lineHeight: "0" }} className="aboutus--olori">Olori Catering Services</h3>
                    <p data-aos="fade-up" className="aboutus--description">Your go-to destination for authentic Nigerian cuisine in the DMV & Pennsylvania area.
                    At Olori Catering Services, we pride ourselves on offering a diverse menu of delicious
                    Nigerian dishes, prepared with love and care to satisfy your cravings and elevate your 
                    dining experience. Our culinary journey began in the heart of
                    Nigeria, where we honed our skills and passion for authentic Nigerian cuisine. Now, we're
                    thrilled to share our love for Nigerian food with you, offering a delicious array of dishes
                    that celebrate the rich culture and heritage of Nigeria.<br></br><br></br>

                    At Olori Catering Services, we specialize in preparing a variety of traditional Nigerian dishes,
                    each crafted with care and using the finest ingredients. Our menu features a diverse selection 
                    of flavors, from the bold and spicy to the comforting and hearty. Whether you're craving our 
                    signature Amala on Spot, a bowl of rich and flavorful stew, or a selection of savory sides, 
                    we have something to satisfy every palate. <br></br><br></br>

                    Our catering services are perfect for any occasion, from intimate gatherings to large events. 
                    Let us bring the taste of Nigeria to your next event and impress your guests with our authentic 
                    flavors and impeccable service. We also offer delivery services, so you can enjoy our delicious 
                    dishes in the comfort of your own home. Join us on a culinary journey through Nigeria and discover 
                    the true taste of Africa with Olori Catering Services.
                    </p>
                </div>
                <img data-aos="fade-up" src={people} alt="Yoruba people cartoon" />
            </div>
            <br/>
            <br/>

            <div className="aboutus--buttons">
                <NavLink to="/our-services"><button class="button-74" role="button">Our Services</button></NavLink>
                <NavLink to="/contact-us"><button class="button-74" role="button">Contact Us</button></NavLink>
            </div>
            <br/>
        </div>
    )
}