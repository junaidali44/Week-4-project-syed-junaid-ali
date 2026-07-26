const db = require("../configs/db");
const LessonModel = require("./lesson.model");

// Get all topics
async function getAllTopics() {
  const [rows] = await db.query("SELECT * FROM topics");
  return rows;
}

// Get topic by ID
async function getTopicById(id) {
  const [rows] = await db.query(
    "SELECT * FROM topics WHERE topic_id=?",
    [id]
  );

  return rows[0];
}

// Get all topics of one course
async function getTopicsByCourseId(courseId) {
  const [topics] = await db.query(
    "SELECT * FROM topics WHERE course_id=?",
    [courseId]
  );

  for (const topic of topics) {
    topic.lessons = await LessonModel.getLessonsByTopicId(topic.topic_id);
  }

  return topics;
}

// Create topic
async function createTopic(topic) {
  const { course_id, title, content } = topic;

  const [result] = await db.query(
    `INSERT INTO topics
    (course_id,title,content)
    VALUES(?,?,?)`,
    [course_id, title, content]
  );

  return result;
}

// Update topic
async function updateTopic(id, topic) {
  const { title, content } = topic;

  const [result] = await db.query(
    `UPDATE topics
    SET title=?,content=?
    WHERE topic_id=?`,
    [title, content, id]
  );

  return result;
}

// Delete topic
async function deleteTopic(id) {
  const [result] = await db.query(
    "DELETE FROM topics WHERE topic_id=?",
    [id]
  );

  return result;
}
// Patch Topic 
async function patchTopic(id, data) {

  const fields = [];
  const values = [];

  for (const key in data) {
    fields.push(`${key} = ?`);
    values.push(data[key]);
  }

  values.push(id);

  const [result] = await db.query(
    `UPDATE topics
     SET ${fields.join(", ")}
     WHERE topic_id = ?`,
    values
  );

  return result;
}

module.exports = {
  getAllTopics,
  getTopicById,
  getTopicsByCourseId,
  createTopic,
  updateTopic,
  deleteTopic,
  patchTopic
};