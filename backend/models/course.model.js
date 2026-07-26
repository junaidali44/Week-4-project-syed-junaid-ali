const db = require("../configs/db");
const TopicModel = require("./topic.model");

// Get all courses
async function getAllCourses() {
  const [rows] = await db.query(`
    SELECT
      c.course_id,
      c.name,
      c.slug,
      c.description,
      c.icon,
      c.color,
      COUNT(DISTINCT t.topic_id) AS totalTopics,
      COUNT(l.lesson_id) AS totalLessons
    FROM courses c
    LEFT JOIN topics t
      ON c.course_id = t.course_id
    LEFT JOIN lessons l
      ON t.topic_id = l.topic_id
    GROUP BY
      c.course_id,
      c.name,
      c.slug,
      c.description,
      c.icon,
      c.color
    ORDER BY c.course_id
  `);
  return rows;
}

// Get course by ID
async function getCourseById(id) {
  const [rows] = await db.query(
    "SELECT * FROM courses WHERE course_id=?",
    [id]
  );

  return rows[0];
}

// Get course by slug
async function getCourseBySlug(slug) {
  const [rows] = await db.query(
    "SELECT * FROM courses WHERE slug=?",
    [slug]
  );

  return rows[0];
}

// Complete course details
async function getCourseDetails(slug) {

  const course = await getCourseBySlug(slug);

  if (!course) {
    return null;
  }

  const topics = await TopicModel.getTopicsByCourseId(course.course_id);

  let totalLessons = 0;

  topics.forEach(topic => {
    totalLessons += topic.lessons.length;
  });

  course.totalTopics = topics.length;
  course.totalLessons = totalLessons;
  course.topics = topics;

  return course;
}

// Create course
async function createCourse(course) {
  const { name, slug, description, icon, color } = course;

  const [result] = await db.query(
    `INSERT INTO courses
    (name,slug,description,icon,color)
    VALUES(?,?,?,?,?)`,
    [name, slug, description, icon, color]
  );

  return result;
}

// Update course
async function updateCourse(id, course) {
  const { name, slug, description, icon, color } = course;

  const [result] = await db.query(
    `UPDATE courses
    SET name=?,slug=?,description=?,icon=?,color=?
    WHERE course_id=?`,
    [name, slug, description, icon, color, id]
  );

  return result;
}

// Delete course
async function deleteCourse(id) {
  const [result] = await db.query(
    "DELETE FROM courses WHERE course_id=?",
    [id]
  );

  return result;
}
// PAtch courses
async function patchCourse(id, data) {
  const fields = [];
  const values = [];

  for (const key in data) {
    fields.push(`${key} = ?`);
    values.push(data[key]);
  }

  values.push(id);

  const [result] = await db.query(
    `UPDATE courses
     SET ${fields.join(", ")}
     WHERE course_id = ?`,
    values
  );

  return result;
}

async function searchCourses(keyword) {
  const search = `%${keyword}%`;

  const [rows] = await db.query(
    `
    SELECT
      c.course_id,
      c.name,
      c.slug,
      c.description,
      c.icon,
      c.color,
      COUNT(DISTINCT t.topic_id) AS totalTopics,
      COUNT(DISTINCT l.lesson_id) AS totalLessons
    FROM courses c
    LEFT JOIN topics t ON c.course_id = t.course_id
    LEFT JOIN lessons l ON t.topic_id = l.topic_id
    WHERE c.name LIKE ?
       OR c.description LIKE ?
    GROUP BY c.course_id
    ORDER BY c.name
    `,
    [search, search]
  );

  return rows;
}
module.exports = {
  getAllCourses,
  getCourseById,
  getCourseBySlug,
  getCourseDetails,
  createCourse,
  updateCourse,
  deleteCourse,
  patchCourse,
  searchCourses
};