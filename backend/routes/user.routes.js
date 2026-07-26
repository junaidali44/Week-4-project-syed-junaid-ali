const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

const authenticateToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");

router.use(authenticateToken);
router.use(isAdmin);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.patch("/:id/role", userController.updateUserRole);
router.delete("/:id", userController.deleteUser);

module.exports = router;