const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require("nodemailer");

async function sendEmail(to, otp) {
    try {
const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: process.env.mail_email,
      pass: process.env.mail_pass
   }
});

const mailOptions = {
   from: "alibaba@chor.com",
   to: to,
   subject: "OTP Verification For SAAS",
   html: `Your OTP is ${otp}`
};

const info = await transporter.sendMail(mailOptions);
console.log('Email sent:', info.response);
} catch (error) {
console.error('Error sending email:', error);
}
}
to = ''
otp = "4567"
module.exports = {sendEmail};