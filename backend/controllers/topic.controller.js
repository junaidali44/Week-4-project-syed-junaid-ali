const TopicsModel = require("../models/topic.model");

// Get Topics
async function getTopics(req, res) {
  try {
    const topics = await TopicsModel.getAllTopics();
    res.status(200).json({
      success: true,
      message: "All Topics",
      count: topics.length,
      data: topics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
async function getTopic(req, res) {
  try {
    const { id } = req.params;
    const topic = await TopicsModel.getTopicById(id);
    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Topic not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "topic retrieved successfully.",
      data: topic,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
// Create Topic
async function createTopic(req, res) {
  try {
    const { course_id, title, content, code_example } = req.body;
    if (!title || !content) {
      res.status(400).json({
        success: false,
        message: "Title and Content required.",
      });
    }
    const result = await TopicsModel.createTopic({
      course_id,
      title,
      content,
      code_example,
    });

    res.status(201).json({
      success: true,
      message: "Topic Added Successfully",
      topic_id: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
// Update Topic
async function updateTopic(req, res) {
  try {
    const { id } = req.params;
    const { course_id, title, content, code_example } = req.body;
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and Content required",
      });
    }
    const result = await TopicsModel.updateTopic(id, {
      course_id,
      title,
      content,
      code_example,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "topic not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Topic Update Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
// Delete Topic
async function deleteTopic(req, res) {
  try {
    const { id } = req.params;
    const result = TopicsModel.deleteTopic(id);
    if (result.affectedRows === 0) {
      res.status(404).json({
        success: false,
        message: "course not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Topic Deleted Sucessfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
// Patch topic
async function patchTopic(req, res) {

  try {

    const { id } = req.params;

    const updates = req.body;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided."
      });
    }

    const result = await TopicsModel.patchTopic(id, updates);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Topic not found."
      });
    }

    res.status(200).json({
      success: true,
      message: "Topic updated successfully."
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

}

module.exports = {
  getTopics,
  getTopic,
  createTopic,
  updateTopic,
  deleteTopic,
  patchTopic
};
