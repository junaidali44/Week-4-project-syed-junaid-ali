const db = require("../configs/db");

// Find user by email
async function findUserByEmail(email) {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return rows[0];
}

// Find user by id
async function findUserById(id) {
  const [rows] = await db.query(
    `SELECT user_id,name,email,role,created_at
     FROM users
     WHERE user_id=?`,
    [id]
  );

  return rows[0];
}

// Register user
async function createUser(user) {
  const { name, email, password, role } = user;

  const [result] = await db.query(
    `INSERT INTO users(name,email,password,role)
     VALUES(?,?,?,?)`,
    [name, email, password, role]
  );

  return result;
}

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
};