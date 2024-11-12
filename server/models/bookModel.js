const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  // Add any additional fields if necessary
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
