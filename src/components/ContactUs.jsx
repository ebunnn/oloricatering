import {React, useState, useEffect } from "react";
import "../css/ContactUs.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import Banner from "./Banner";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function ContactUs() {
    const [senderName, setSenderName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendMail = () => {
        if (!senderName || !message || !phoneNumber) {
            alert("Please fill out all required fields");
            return;
          }
        axios.defaults.withCredentials = true;
        axios
          .get("https://oloricatering-api.vercel.app", { //http://localhost:5001 https://oloricatering-api.vercel.app"
            params: {
              senderName,
              email,
              phoneNumber,
              subject,
              message,
            },
            withCredentials: true,
          })
          .then(() => {
            //success
            console.log("success");
            alert("Message Sent! Thank you for your inquiry, we will get back to you as soon as possible.")
            window.location.reload();
          })
          .catch((error) => {
            console.log("failure");
            console.error("An error occurred:", error);
            alert("Failed to send message. Please try again later.");
          });
      };

      useEffect(()=> {
        AOS.init({duration: 2000});
    }, []);

  return (
    <div className="contactus--container">
      <Banner page="Contact Us" />
      <br/>
      <br/>
      <div data-aos="fade-up" className="contactus--formAndText">
        <div  className="contactus--contactInfo">
            <h2>Contact Information</h2>
            <p>Contact us to make an order, ask any questions, or receive more information.</p>
            <p><FontAwesomeIcon icon={faPhone} />  <a href="tel:+14436758105">+1{"("}443{")"}-675-8105</a></p>
            <p><FontAwesomeIcon icon={faMailBulk} /> <a href="mailto:oloricateringservices@gmail.com">oloricateringservices@gmail.com</a></p>
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
                        <label className="contactus--label">Your Email</label><br />
                        <input
                            type="text"
                            className="contactus--textLabel"
                            placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br/>
                        <label className="contactus--label">Your Phone Number <span style={{color:"red"}}>*</span></label><br />
                        <input
                            type="text"
                            className="contactus--textLabel"
                            placeholder="Your phone number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
