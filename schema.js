const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  subscribed: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model('User', userSchema, 'users');

module.exports = UserModel;