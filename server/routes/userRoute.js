const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

// Public routes
router.post("/login", userController.loginUser);
router.post("/signup", userController.createUser);

// Protected routes
router.get("/", auth, userController.getAllUsers);
router.get("/:id", auth, userController.getUser);
router.put("/:id", auth, userController.updateUser);
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;
