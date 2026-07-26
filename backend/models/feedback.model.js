const db = require("../configs/db");

// Get All Feebacks
async function getAllFeedbacks() {
  const [rows] = await db.query("SELECT * FROM feedback");
  return rows;
}
// Get Feedback By Id
async function getFeedback(id) {
  const [result] = await db.query(
    "SELECT * FROM feedback WHERE feedback_id=?",
    [id],
  );
  return result[0];
}
// Create Feedback
async function createFeedback(feedback) {
  const { name, email, message } = feedback;
  const result = db.query(
    `
        INSERT INTO feedback(name,email,message)
        VALUES(?,?,?);
        `,
    [name, email, message],
  );
  return result;
}
// Delete Feedback
async function deleteFeedback(id) {
    const [result] = await db.query("DELETE FROM feedback WHERE feedback_id = ?",[id]);
    return result;
}

module.exports = {
  getAllFeedbacks,
  getFeedback,
  createFeedback,
  deleteFeedback
};
