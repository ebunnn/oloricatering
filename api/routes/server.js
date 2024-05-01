const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");


function sendEmail({ senderName, email, phoneNumber, subject, message }) {
    console.log(senderName)
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
  
      const mail_configs = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: subject,
        html: `
        <div>
          <h4>From: <span><p style="display: inline; font-weight: normal;">${senderName}</p></span></h4>
          <h4>Email: <span><p style="display: inline; font-weight: normal;">${email}</p></span></h4>
          <h4>Phone Number: <span><p style="display: inline; font-weight: normal;">${phoneNumber}</p></span></h4>
          <p>${message}</p>
        </div>
        `,
      };
      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          console.log(error);
          return reject({ message: `An error has occurred` });
        }
        return resolve({ message: "Email sent successfully" });
      });
    }); 
  }

router.get('/send-email', (req, res) => {
    const { senderName, email, phoneNumber, subject, message } = req.query;

  // Call the sendEmail function with the extracted data
  sendEmail(senderName, email, phoneNumber, subject, message)
    .then(() => res.send('Email sent successfully'))
    .catch((error) => {
      console.error('Failed to send email:', error);
      res.status(500).send('Failed to send email');
    });
  });

  module.exports = router;