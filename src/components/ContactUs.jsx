import React, { useState } from "react";
import "../css/ContactUs.css";
import banner from "../Images/olori cover page.png";
import axios from "axios";

export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send form data to backend for processing
//     fetch("http://localhost:4000/send-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.message);
//         // Optionally, display a success message to the user
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Optionally, display an error message to the user
//       });
//   };

    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const sendMail = () => {
        axios
          .get("http://localhost:5001/send-email", {
            params: {
              subject,
              message,
            },
          })
          .then(() => {
            //success
            console.log("success");
          })
          .catch(() => {
            console.log("failure");
          });
      };

  return (
    <div className="contactus--container">
      <img className="contactus--banner" src={banner} alt="Our Services banner" />
      <h2 className="contactus--bannerText">Contact Us</h2>
      <div className="contactus--formContainer">
            {/* <input
                type="text"
                placeholder="Recipient Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /> */}
            <input
                type='text'
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
            />
            <br />
            <textarea
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <button onClick={sendMail}>Send Email</button>
      </div>
    </div>
  );
}
