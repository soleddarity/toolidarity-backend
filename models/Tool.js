const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define Schema
const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  icon: {
    type: String,
    required: false,
    trim: true,
  },
  twitter: {
    type: String,
    required: false,
    trim: true,
  },
  discord: {
    type: String,
    required: false,
    trim: true,
  },
  website: {
    type: String,
    required: false,
    trim: true,
  },
  category: {
    type: String,
    required: false,
    trim: true,
  },
  from: {
    type: String,
    required: false,
    trim: true,
  },
  to: {
    type: String,
    required: false,
    trim: true,
  },
  type: {
    type: String,
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model("Tool", toolSchema);
