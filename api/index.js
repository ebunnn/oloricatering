require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors(
  {
    origin: ["https://oloricateringservices.com"],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
  }
));


app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });


async function sendEmail({ senderName, email, phoneNumber, subject, message }) {
  try {
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

    const info = await transporter.sendMail(mail_configs);
    console.log("Email sent: " + info.response);
    return { message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw { message: "An error has occurred" };
  }
}

app.options("/", cors());

app.get("/", async (req, res) => {
  try {
    const response = await sendEmail(req.query);
    res.send(response.message);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`nodemailer is listening at http://localhost:${port}`);
});
