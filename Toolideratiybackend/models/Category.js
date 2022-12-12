const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define Schema
const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: false,
    trim: true,
  },
  categoryColor: {
    type: String,
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
