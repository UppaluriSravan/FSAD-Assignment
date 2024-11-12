const express = require("express");
const bookController = require("../controllers/bookController");
const auth = require("../middleware/auth");

const router = express.Router();

// Route to get all books
router.get("/", auth, bookController.getAllBooks);

// Route to get a single book by ID
router.get("/:id", auth, bookController.getBookById);

// Route to create a new book
router.post("/", auth, bookController.createBook);

// Route to update a book by ID
router.put("/:id", auth, bookController.updateBook);

// Route to delete a book by ID
router.delete("/:id", auth, bookController.deleteBook);

module.exports = router;
