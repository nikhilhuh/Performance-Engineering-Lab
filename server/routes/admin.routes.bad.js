const express = require("express");
const router = express.Router();

// imagine this is your DB
const users = [
  { id: "1", name: "Nikhil", role: "user" },
  { id: "2", name: "Admin", role: "admin" },
];

// ❌ BAD: trusting frontend for authorization
router.post("/delete-user", async (req, res) => {
  try {
    const { userId, role } = req.body;

    // 🚨 CRITICAL FLAW: role is coming from client
    if (role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Only admin can delete users",
      });
    }

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
      message: `User ${userId} deleted`,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;