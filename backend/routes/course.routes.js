const express = require("express");
const router = express.Router();

const courseController = require("../controllers/course.controller");
const authenticateToken = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");

router.get("/", courseController.getCourses);
router.get("/search", courseController.searchCourses);
router.get("/:slug/details", courseController.getCourseDetails);
router.get("/:id", courseController.getCourse);

router.post("/", authenticateToken, isAdmin, courseController.createCourse);
router.put("/:id", authenticateToken, isAdmin, courseController.updateCourse);
router.delete("/:id",authenticateToken,isAdmin,courseController.deleteCourse,);
router.patch("/:id", authenticateToken, isAdmin, courseController.patchCourse);
module.exports = router;
