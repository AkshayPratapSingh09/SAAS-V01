const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserModel = require('./schema.js');
const { connectDB } = require('./connect.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

connectDB();

app.post('/register', async (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;
console.log(req.body)

  try {
    const userToAdd = new UserModel({
      username,
      password,
      email,
      dateOfBirth,
      verified: false,
      subscribed: true,
    });

    const savedUser = await userToAdd.save();
    console.log('User added successfully:', savedUser);

    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});