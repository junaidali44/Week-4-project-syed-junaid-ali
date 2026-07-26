const userModel = require("../models/user.model");

// GET all users
async function getAllUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// GET one user
async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// PATCH role
async function updateUserRole(req, res) {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!["admin", "user"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Role must be admin or user.",
      });
    }
if (Number(req.user.id) === Number(id)) {
  return res.status(400).json({
    success: false,
    message: "You cannot change your own role."
  });
}
    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    await userModel.updateUserRole(id, role);

    res.status(200).json({
      success: true,
      message: "User role updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// DELETE user
async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    await userModel.deleteUser(id);
    if (Number(req.user.id) === Number(id)) {
      return res.status(400).json({
        success: false,
        message: "You cannot delete your own account.",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
};
