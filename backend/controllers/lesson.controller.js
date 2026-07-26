const LessonModel = require("../models/lesson.model");

// Get all lessons
async function getAllLessons(req, res) {
  try {
    const lessons = await LessonModel.getAllLessons();

    res.status(200).json({
      success: true,
      count: lessons.length,
      data: lessons,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

// Get lesson by ID
async function getLessonById(req, res) {
  try {
    const { id } = req.params;

    const lesson = await LessonModel.getLessonById(id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: lesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

// Create lesson
async function createLesson(req, res) {
  try {
    const { topic_id, title, description, code, explanation } = req.body;

    if (!topic_id || !title || !description || !explanation) {
      return res.status(400).json({
        success: false,
        message: "topic_id, title, description and explanation are required.",
      });
    }

    const result = await LessonModel.createLesson({
      topic_id,
      title,
      description,
      code,
      explanation,
    });

    res.status(201).json({
      success: true,
      message: "Lesson created successfully.",
      lessonId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

// Update lesson (PUT)
async function updateLesson(req, res) {
  try {
    const { id } = req.params;

    const { topic_id, title, description, code, explanation } = req.body;

    if (!topic_id || !title || !description || !explanation) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const result = await LessonModel.updateLesson(id, {
      topic_id,
      title,
      description,
      code,
      explanation,
    });

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lesson updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

// Patch lesson
async function patchLesson(req, res) {
  try {
    const { id } = req.params;

    const updates = req.body;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided.",
      });
    }

    const result = await LessonModel.patchLesson(id, updates);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lesson updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

// Delete lesson
async function deleteLesson(req, res) {
  try {
    const { id } = req.params;

    const result = await LessonModel.deleteLesson(id);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Lesson not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lesson deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = {
  getAllLessons,
  getLessonById,
  createLesson,
  updateLesson,
  patchLesson,
  deleteLesson,
};