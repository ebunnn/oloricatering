require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ senderName, email, subject, message }) {
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
      <h4>Sender Name: ${senderName}</h4>
      <p>Sender Email: ${email}</p>
      <p>${message}</p>
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

app.get("/send-email", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailer is listening at http://localhost:${port}`);
  console.log(process.env.EMAIL);
});