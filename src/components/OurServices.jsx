import {React, useState, useEffect} from "react";
import "../css/OurServices.css"
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import 'aos/dist/aos.css';
import Banner from "./Banner";


export default function OurServices() {
    const [modalText, setModalText] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [openPanels, setOpenPanels] = useState({});


    const handlePanelClick = (panel) => {
        setOpenPanels((prevOpenPanels) => ({
          ...prevOpenPanels,
          [panel]: !prevOpenPanels[panel],
        }));
      };

    const handleOutsideClick = (e) => {
        if (e.target.className === "modal--container") {
            closeModal();
        }
    };

    useEffect(() => {
        if (showModal) {
            document.body.classList.add('modal-open');
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.body.classList.remove('modal-open');
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [showModal]);

    useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

    const openModal = (text) => {
        setModalText(text);
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    return (
        <div className="ourservices--container">
            <Banner page="Our Services" />
            <br/>
            <br/>
            <br/>
            <div data-aos="fade-up" className="ourservices--gridContainer">
                <div className="image-container" onClick={() => openModal(
                    "Experience the ultimate comfort food delight with our Amala on Spot! \
                    Indulge in a hearty bowl of freshly prepared Amala paired with our \
                    signature Gbẹ̀gìrì and Ewédú soups, topped with a flavorful stew and \
                    a mouthwatering assortment of meats. Each bite is a burst of authentic \
                    Nigerian flavors that will transport you to the streets of Lagos. \
                    Don't miss out on this culinary adventure – request our Amala on Spot today!")}>
                    <img className="ourservices--gridImg" src="https://oloricateringhero.s3.amazonaws.com/olori-amala.jpg" alt="Amala image"/>
                    <span className="ourservices--imageText">Àmàlà on Spot</span>
                </div>
                <div className="image-container" onClick={() => openModal(
                    "Elevate your special occasions with our exceptional catering services! \
                    Whether it's a grand wedding, a joyful birthday celebration, a memorable\
                    graduation party, or any other event, we're here to make it extraordinary. Our expert\
                    team crafts exquisite menus tailored to your preferences, ensuring a culinary\
                    experience that delights every palate. Let us turn your event into an unforgettable\
                    feast – book our catering services today!"
                    )}>
                    <img className="ourservices--gridImg" src="https://oloricateringhero.s3.amazonaws.com/olori-catering.jpg" alt="Catering image"/>
                    <span className="ourservices--imageText">Catering</span>
                 </div>
                 <div className="image-container" onClick={() => openModal("Experience the vibrant \
                    flavors of Nigeria with our exquisite cuisine! Our menu features a tantalizing array \
                    of dishes, from rich stews to flavorful grills, all crafted to perfection. Each bite \
                    is a journey through the diverse tastes and traditions of the continent. Whether you're\
                    a seasoned explorer of Nigerian cuisine or new to its delights, our dishes are sure to \
                    delight your palate and leave you craving for more. Treat yourself to a taste of Africa\
                    – it's a culinary adventure like no other!")}>
                    <img className="ourservices--gridImg" src="https://oloricateringhero.s3.amazonaws.com/olori-cuisine.jpg" alt="Nigerian cuisine image"/>
                    <span className="ourservices--imageText">Nigerian Cuisine</span>
                </div>
                <div className="image-container" onClick={() => openModal(
                    "Enjoy the convenience of our delivery services, serving the DC, Maryland, Virginia, and\
                    Pennsylvania regions. Experience the flavors of our cuisine from the comfort of your home!")}>
                    <img className="ourservices--gridImg" src="https://oloricateringhero.s3.amazonaws.com/olori-delivery.jpg" alt="Delivery image"/>
                    <span className="ourservices--imageText">Delivery</span>
                </div>
            </div>
            {showModal && <Modal text={modalText} onClose={closeModal} />}

            <h3 data-aos="fade-up" style={{color:"#404b1f"}}>Foods we offer</h3>
            <div data-aos="fade-up" className="ourservices--accordionContainer">
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Popular Meals")}>Popular Meals      <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Popular Meals"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <p>Jollof Rice</p>
                            <p>Fried Rice</p>
                            <p>Rice and Stew</p>
                            <p>Yam Porridge</p>
                            <p>Ẹ̀wà Àgọ̀yìn</p>
                        </div>
                    </div>
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Swallow")}>Swallow {"("}Òkèlè{")"}    <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Swallow"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <p>Àmàlà</p>
                            <p>Iyán {"("}Pounded Yam{")"}</p>
                            <p>Ẹ̀bà</p>
                        </div>
                    </div>
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Soups")}>Soups {"("}Ọbẹ̀{")"}     <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Soups"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <p>Buka Stew</p>
                            <p>Ẹ̀fọ́ Rírò {"("}Vegetable Soup{")"}</p>
                            <p>Egusi</p>
                            <p>Okra {"("}Ilá{")"}</p>
                            <p>Ewédú</p>
                            <p>Ọ̀gbọ̀nọ̀</p>
                            <p>Bitter Leaf Stew</p>
                            <p>Afang Stew</p>
                            <p>Gbẹ̀gìrì</p>
                            <p>Ayamase {"("}Designer Stew{")"}</p>
                            <p>Goat Meat Pepper Soup</p>
                            <p>Fish Pepper Soup</p>
                        </div>
                    </div>
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Sides")}>Sides      <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Sides"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <p>Plantain {"("}Dòdò{")"}</p>
                            <p>Gizdòdò {"("}Stewed Gizzard and Plantain{")"}</p>
                        </div>
                    </div>
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Meats & Fish")}>Meats & Fish      <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Meats & Fish"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <p>Assorted Meats</p>
                            <p>Stewed Chicken</p>
                            <p>Beef</p>
                            <p>Shaki</p>
                            <p>Goat Meat</p>
                            <p>Fried Fish</p>
                            <p>Stewed Fish</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}