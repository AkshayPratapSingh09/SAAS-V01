const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const readline = require('readline');
const {sendEmail} = require("./mail_gmail.js")
const {connectDB} = require("./connect.js")



const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  otp: { type: String, required: true },
  otpExpiration: { type: Date, required: true },
  token: String,
});

const User = mongoose.model('User', userSchema, "users");

// Function to generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send OTP via email
async function sendOTP(email) {
  const otp = generateOTP();
  const otpExpiration = new Date();
  otpExpiration.setMinutes(otpExpiration.getMinutes() + 5);

  await User.findOneAndUpdate(
    { email },
    { $set: { otp, otpExpiration } },
    { upsert: true, new: true }
  );
  
  await sendEmail(email,otp).then(()=>{
      promptUserForOTP(email);
  })
  }
   

// Function to prompt user for OTP in the terminal
function promptUserForOTP(email) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the OTP sent to your email: ', async (otp) => {
    rl.close();

    const user = await User.findOne({ email, otp, otpExpiration: { $gt: new Date() } });

    if (user) {
      console.log('OTP verified successfully');
      const token = generateToken();
      await User.findOneAndUpdate({ email }, { $set: { token } });
      console.log('Token:', token);
      process.exit(0);
    } else {
      console.log('Invalid OTP or expired');
      process.exit(1);
    }
  });
}

// Function to generate a simple token (you may want to use a more secure method)
function generateToken() {
  return Math.random().toString(36).substr(2);
}


const userEmail = 'musicloverap01@gmail.com';
connectDB().then(() => {
    sendOTP(userEmail);
  });
