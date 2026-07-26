const express = require("express");
const router = express.Router();

const topicsController = require("../controllers/topic.controller");
const authenticateToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");

router.get("/", topicsController.getTopics);
router.get("/:id", topicsController.getTopic);
router.post("/", authenticateToken, isAdmin, topicsController.createTopic);
router.put("/:id", authenticateToken, isAdmin, topicsController.updateTopic);
router.delete("/:id", authenticateToken, isAdmin, topicsController.deleteTopic);
router.patch("/:id", authenticateToken, isAdmin, topicsController.patchTopic);

module.exports = router;
