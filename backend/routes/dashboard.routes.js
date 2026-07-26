const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboard.controller");
const authenticateToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");

router.get("/", authenticateToken, isAdmin, dashboardController.getStatistics);
router.get(
  "/recent",
  authenticateToken,
  isAdmin,
  dashboardController.getRecentActivity,
);

module.exports = router;
