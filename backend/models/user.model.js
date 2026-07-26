const db = require("../configs/db");

// Get all users
async function getAllUsers() {
  const [rows] = await db.query(`
    SELECT
      user_id,
      name,
      email,
      role,
      created_at
    FROM users
    ORDER BY created_at DESC
  `);

  return rows;
}

// Get user by id
async function getUserById(id) {
  const [rows] = await db.query(`
    SELECT
      user_id,
      name,
      email,
      role,
      created_at
    FROM users
    WHERE user_id = ?
  `, [id]);

  return rows[0];
}

// Update role
async function updateUserRole(id, role) {
  const [result] = await db.query(`
    UPDATE users
    SET role = ?
    WHERE user_id = ?
  `, [role, id]);

  return result;
}

// Delete user
async function deleteUser(id) {
  const [result] = await db.query(
    "DELETE FROM users WHERE user_id = ?",
    [id]
  );

  return result;
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
};