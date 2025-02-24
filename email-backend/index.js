const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const mailGenerator = asyncHandler(async (req, res) => {
    const { email, first_name, last_name, textarea } = req.body;

    const Transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS, 
        },
    });

    const userOptions = {
        from: "gangamahesh809@gmail.com",
        to: email,
        subject: `Hello, ${first_name} ${last_name}!`,
        text: `Thanks for getting in touch via my portfolio website! I'm glad you're interested, and I will respond as quickly as possible.

I typically respond within 24 hours. Meanwhile, if you have a pressing question, don't hesitate to reply to this email.

Looking forward to connecting with you!`,
    };

    const adminOptions = {
        from: "gangamahesh809@gmail.com",
        to: "gangamahesh809@gmail.com",
        subject: `New Contact Form Submission from ${first_name} ${last_name}`,
        text: `You have received a new message from your portfolio contact form:

    Name: ${first_name} ${last_name}
    Email: ${email}
    Message: ${textarea}

    Please respond as soon as possible.`,
    };

    try {
        await Transporter.sendMail(userOptions);
        await Transporter.sendMail(adminOptions);

        res.status(200).json({ message: "Emails sent successfully!" });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ message: "Error sending emails" });
    }
});

app.post("/mail", mailGenerator);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

module.exports = app;
