const db = require("../configs/db");

async function getStatistics() {
  const [[course]] = await db.query(
    "SELECT COUNT(*) AS totalCourses FROM courses"
  );

  const [[topic]] = await db.query(
    "SELECT COUNT(*) AS totalTopics FROM topics"
  );

  const [[lesson]] = await db.query(
    "SELECT COUNT(*) AS totalLessons FROM lessons"
  );

  const [[user]] = await db.query(
    "SELECT COUNT(*) AS totalUsers FROM users"
  );

  const [[feedback]] = await db.query(
    "SELECT COUNT(*) AS totalFeedback FROM feedback"
  );

  return {
    courses: course.totalCourses,
    topics: topic.totalTopics,
    lessons: lesson.totalLessons,
    users: user.totalUsers,
    feedback: feedback.totalFeedback,
  };
}
async function getRecentActivity() {
  const [users] = await db.query(`
    SELECT user_id, name, email, role, created_at
    FROM users
    ORDER BY created_at DESC
    LIMIT 5
  `);

  const [feedback] = await db.query(`
    SELECT feedback_id, name,subject, created_at
    FROM feedback
    ORDER BY created_at DESC
    LIMIT 5
  `);

  const [courses] = await db.query(`
    SELECT course_id, name, slug, created_at
    FROM courses
    ORDER BY created_at DESC
    LIMIT 5
  `);

  return {
    users,
    feedback,
    courses
  };
}
module.exports = {
  getStatistics,
  getRecentActivity,
};