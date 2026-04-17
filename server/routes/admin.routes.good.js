const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// imagine this is your DB
const users = [
  { id: "1", name: "Nikhil", role: "user" },
  { id: "2", name: "Admin", role: "admin" },
];

const SECRET = "supersecretkey";

// ✅ middleware: authenticate user via token
function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, SECRET);

    // 🔒 trusted user data from server-signed token
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: "Invalid token",
    });
  }
}

// ✅ middleware: check admin role
function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Only admin can delete users",
    });
  }
  next();
}

// ✅ SECURE ROUTE (no role from frontend)
router.post("/delete-user", authenticate, requireAdmin, async (req, res) => {
  try {
    const { userId } = req.body; // 👈 role REMOVED

    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    users.splice(userIndex, 1);

    return res.json({
      success: true,
      message: `User ${userId} deleted securely`,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;