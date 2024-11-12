const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({message: "No token provided"}); // No token provided
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({message: "JWT secret is not defined"}); // JWT secret not defined
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({message: "Token verification failed"}); // Invalid token
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
