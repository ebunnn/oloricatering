import {React, useState, useEffect} from "react";
import "../css/OurServices.css"
import banner from "../Images/olori cover page.png"
import catering from "../Images/catering.jpg"
import amala from "../Images/amala.jpg"
import cuisine from "../Images/africanCuisine.jpg"
import delivery from "../Images/Designer.jpg"
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


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

    const openModal = (text) => {
        setModalText(text);
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    return (
        <div className="ourservices--container">
            <img className="ourservices--banner" src={banner} alt="Our Services banner" />
            <h2 className="ourservices--bannerText">Our Services</h2>
            <div className="ourservices--gridContainer">
                <div className="image-container" onClick={() => openModal(
                    "Experience the ultimate comfort food delight with our Amala on Spot! \
                    Indulge in a hearty bowl of freshly prepared Amala paired with our \
                    signature Gbẹ̀gìrì and Ewédú soups, topped with a flavorful stew and \
                    a mouthwatering assortment of meats. Each bite is a burst of authentic \
                    Nigerian flavors that will transport you to the streets of Lagos. \
                    Don't miss out on this culinary adventure – request our Amala on Spot today!")}>
                    <img className="ourservices--gridImg" src={amala} alt="Amala image"/>
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
                    <img className="ourservices--gridImg" src={catering} alt="Catering image"/>
                    <span className="ourservices--imageText">Catering</span>
                 </div>
                 <div className="image-container" onClick={() => openModal("Experience the vibrant \
                    flavors of Nigeria with our exquisite cuisine! Our menu features a tantalizing array \
                    of dishes, from rich stews to flavorful grills, all crafted to perfection. Each bite \
                    is a journey through the diverse tastes and traditions of the continent. Whether you're\
                    a seasoned explorer of Nigerian cuisine or new to its delights, our dishes are sure to \
                    delight your palate and leave you craving for more. Treat yourself to a taste of Africa\
                    – it's a culinary adventure like no other!")}>
                    <img className="ourservices--gridImg" src={cuisine} alt="Nigerian cuisine image"/>
                    <span className="ourservices--imageText">Nigerian Cuisine</span>
                </div>
                <div className="image-container" onClick={() => openModal(
                    "Enjoy the convenience of our delivery services, serving the DC, Maryland, Virginia, and\
                    Pennsylvania regions. Experience the flavors of our cuisine from the comfort of your home!")}>
                    <img className="ourservices--gridImg" src={delivery} alt="Delivery image"/>
                    <span className="ourservices--imageText">Delivery</span>
                </div>
            </div>
            {showModal && <Modal text={modalText} onClose={closeModal} />}

            <h1>Foods we offer</h1>
            <div className="ourservices--accordionContainer">
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Popular Meals")}>Popular Meals      <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Popular Meals"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <h5>Jollof Rice</h5>
                        </div>
                    </div>
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Swallow")}>Swallow      <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Swallow"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <h5>Amala</h5>
                            <h5>Iyán {"("}Pounded Yam{")"}</h5>
                        </div>
                    </div>
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Soups")}>Soups     <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Soups"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <h5>Efo Riro</h5>
                            <h5>Egusi</h5>
                        </div>
                    </div>
                    <button className="ourservices--accordion" onClick={() => handlePanelClick("Sides")}>Sides      <FontAwesomeIcon icon={faChevronDown} /></button>
                    <div style={{ display: openPanels["Sides"] ? "block" : "none" }} className="ourservices--panel">
                        <div className="oursevices--panel-content">
                            <h5>Plantain</h5>
                        </div>
                    </div>
            </div>
        </div>
    )
}