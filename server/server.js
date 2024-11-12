const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/userRoute");
const bookRouter = require("./routes/bookRoute");

require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.json());
app.use(express.json());

app.use("/api/books", bookRouter);
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
