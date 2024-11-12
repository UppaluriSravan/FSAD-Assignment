const Book = require("../models/bookModel");

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({_id: req.params.id});
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const book = new Book({
      ...req.body,
      user: req.user.id, // Ensure the user field is set correctly
    });
    await book.save();
    res.status(201).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    console.log(req.params.id, req.user._id, "update request");
    const book = await Book.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({
      _id: req.params.id,
    });
    if (!book) {
      return res.status(404).send();
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
