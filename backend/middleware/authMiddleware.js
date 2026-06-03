const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.token;

    // token missing
    if (!token) {
      return res.status(401).json({
        message: "Token Missing",
      });
    }

    // verify token
    const decoded = jwt.verify(token, "secretkey");

    // user data save in req
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;
