require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5001;
const routes = require("./routes/server.js");

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/send-email", routes);

function sendEmail({ senderName, email, phoneNumber, subject, message }) {
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

app.get("/send-email", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailer is listening at http://localhost:${port}`);
});