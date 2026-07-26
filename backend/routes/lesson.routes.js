const express = require("express");
const router = express.Router();

const LessonController = require("../controllers/lesson.controller");
const authenticateToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");


router.get("/", LessonController.getAllLessons);
router.get("/:id", LessonController.getLessonById);
router.post("/",authenticateToken, isAdmin, LessonController.createLesson);
router.put("/:id",authenticateToken, isAdmin, LessonController.updateLesson);
router.patch("/:id",authenticateToken, isAdmin, LessonController.patchLesson);
router.delete("/:id",authenticateToken, isAdmin, LessonController.deleteLesson);

module.exports = router;