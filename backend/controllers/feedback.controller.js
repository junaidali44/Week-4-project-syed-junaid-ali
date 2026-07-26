const FeedbackModel = require("../models/feedback.model");

// Get All feedbacks
async function getAllfeedbacks(req, res) {
  try {
    const feedbacks = await FeedbackModel.getAllFeedbacks();
    res.status(200).json({
      success: true,
      message: "All Feedbacks",
      count: feedbacks.length,
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
// Get Feedback by id
async function getFeedback(req, res) {
  try {
    const { id } = req.params;
    const feedback = await FeedbackModel.getFeedback(id);
    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "FeedBack retrieved successfully.",
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: erroe.message,
    });
  }
}
// POST Feedback
async function craeteFeedback(req, res) {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name Email and Message is required",
      });
    }
    const result = FeedbackModel.createFeedback({ name, email, message });
    if (!result.affectedrows === 0) {
      return res.status(404).json({
        success: false,
        message: "Submit failed",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Feedback submited",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
// Delete Feedback
async function deletefeedback(req, res) {
  try {
    const { id } = req.params;
    const result = await FeedbackModel.deleteFeedback(id);
    if (result.affectedrows === 0) {
      res.status(404).json({
        success: false,
        message: "Feedback resource not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Feedback Deleted Successfully .",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
module.exports = {
  getAllfeedbacks,
  getFeedback,
  craeteFeedback,
  deletefeedback,
};
