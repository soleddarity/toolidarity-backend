const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define Schema
const userSchema = new mongoose.Schema({
  publicKey: {
    type: String,
    required: false,
    trim: true,
  },
  pfp: {
    type: String,
    required: false,
    trim: true,
  },
  nickname: {
    type: String,
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
