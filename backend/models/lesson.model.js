const db = require("../configs/db");

// Get all lessons
async function getAllLessons() {
  const [rows] = await db.query("SELECT * FROM lessons");
  return rows;
}

// Get lesson by ID
async function getLessonById(id) {
  const [rows] = await db.query(
    "SELECT * FROM lessons WHERE lesson_id = ?",
    [id]
  );

  return rows[0];
}

// Get lessons by topic
async function getLessonsByTopicId(topicId) {
  const [rows] = await db.query(
    "SELECT * FROM lessons WHERE topic_id = ?",
    [topicId]
  );

  return rows;
}

// Create lesson
async function createLesson(lesson) {
  const { topic_id, title, description, code, explanation } = lesson;

  const [result] = await db.query(
    `INSERT INTO lessons
    (topic_id,title,description,code,explanation)
    VALUES (?,?,?,?,?)`,
    [topic_id, title, description, code, explanation]
  );

  return result;
}

// Update (PUT)
async function updateLesson(id, lesson) {
  const { topic_id, title, description, code, explanation } = lesson;

  const [result] = await db.query(
    `UPDATE lessons
     SET topic_id=?, title=?, description=?, code=?, explanation=?
     WHERE lesson_id=?`,
    [topic_id, title, description, code, explanation, id]
  );

  return result;
}

// Patch (Partial Update)
async function patchLesson(id, updates) {
  const fields = [];
  const values = [];

  for (const key in updates) {
    fields.push(`${key} = ?`);
    values.push(updates[key]);
  }

  values.push(id);

  const [result] = await db.query(
    `UPDATE lessons
     SET ${fields.join(", ")}
     WHERE lesson_id = ?`,
    values
  );

  return result;
}

// Delete lesson
async function deleteLesson(id) {
  const [result] = await db.query(
    "DELETE FROM lessons WHERE lesson_id = ?",
    [id]
  );

  return result;
}

module.exports = {
  getAllLessons,
  getLessonById,
  getLessonsByTopicId,
  createLesson,
  updateLesson,
  patchLesson,
  deleteLesson,
};