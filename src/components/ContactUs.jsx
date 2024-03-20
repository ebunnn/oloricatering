import React, { useState } from "react";
import "../css/ContactUs.css";
import banner from "../Images/olori cover page.png";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
    const [senderName, setSenderName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendMail = () => {
        if (!senderName || !email || !message) {
            alert("Please fill out all required fields");
            return;
          }

        axios
          .get("http://localhost:5001/send-email", {
            params: {
              senderName,
              email,
              subject,
              message,
            },
          })
          .then(() => {
            //success
            console.log("success");
            alert("Message Sent! Thank you for your inquiry, we will get back to you as soon as possible.")
          })
          .catch(() => {
            console.log("failure");
          });
      };

  return (
    <div className="contactus--container">
      <img className="contactus--banner" src={banner} alt="Our Services banner" />
      <h2 className="contactus--bannerText">Contact Us</h2>
      <div className="contactus--formAndText">
        <div className="contactus--contactInfo">
            <h2>Contact Information</h2>
            <p>Contact us to make an order, ask any questions, or receive more information.</p>
            <p><FontAwesomeIcon icon={faPhone} />  +1{"("}443{")"}-675-8105</p>
            <p><FontAwesomeIcon icon={faMailBulk} /> oloricatering@gmail.com</p>
        </div>


        <div className="contactus--formContainer">
                <form style={{textAlign:"left"}}>
                    <label className="contactus--label">First and Last Name <span style={{color:"red"}}>*</span></label><br />
                    <input
                            type="text"
                            className="contactus--textLabel"
                            placeholder="First and Last Name"
                            onChange={(e) => setSenderName(e.target.value)}
                            required
                        />
                        <br />
                        <label className="contactus--label">Your Email <span style={{color:"red"}}>*</span></label><br />
                        <input
                            type="text"
                            className="contactus--textLabel"
                            placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <label className="contactus--label">Subject</label><br />
                        <input
                            type='text'
                            className="contactus--textLabel"
                            placeholder="Subject of your message"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <br />
                        <label className="contactus--label">Message <span style={{color:"red"}}>*</span></label><br />
                        <textarea
                            type="text"
                            className="contactus--textLabel"
                            placeholder="Type your message here..."
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <br />
                        <button type="button" class="button-74" role="button" onClick={sendMail}>Send Message</button>
                </form>
            </div>
      </div>
        
      <p></p>
      <p></p>
    </div>
  );
}
