const express = require("express");
const router = express.Router();

const FeedbackController = require("../controllers/feedback.controller");

router.get("/",FeedbackController.getAllfeedbacks);
router.get("/:id",FeedbackController.getFeedback);
router.post("/",FeedbackController.craeteFeedback)
router.delete("/:id",FeedbackController.deletefeedback);

module.exports = router ;