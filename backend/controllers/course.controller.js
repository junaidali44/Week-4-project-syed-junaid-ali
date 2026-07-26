const CourseModel = require("../models/course.model");

// Get ALL courses
async function getCourses(req, res) {
  try {
    const courses = await CourseModel.getAllCourses();
    res.status(200).json({
      success: true,
      message: "EZLearn all courses",
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
// Get Single course
async function getCourse(req, res) {
  try {
    const { id } = req.params;
    const course = await CourseModel.getCourseById(id);
    if (!course) {
      res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message:"Course retrieved successfully.",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
}
// Add course
async function createCourse(req, res) {
  try {
    const { name, description, icon, color } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "name and description are required",
      });
    }
    const result = await CourseModel.createCourse({
      name,
      description,
      icon,
      color,
    });
    res.status(201).json({
      success: true,
      message: "Course created successfully.",
      courseId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// update course
async function updateCourse(req, res) {
  try {
    const { id } = req.params;
    const { name, description, icon, color } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "Name and description are required.",
      });
    }

    const result = await CourseModel.updateCourse(id, {
      name,
      description,
      icon,
      color,
    });

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Delete course
async function deleteCourse(req, res) {
  try {
    const { id } = req.params;
    const result = await CourseModel.deleteCourse(id);
    if (result.affectedRows === 0) {
      res.status(404).json({
        succes: false,
        messgae: "Course Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Course delete seuccessfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Get Course details 
async function getCourseDetails(req, res) {

    try {

        const { slug } = req.params;

        const course = await CourseModel.getCourseDetails(slug);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found."
            });
        }

        res.status(200).json({
            success: true,
            data: course
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

}
// Patch Courses
async function patchCourse(req, res) {
  try {
    const { id } = req.params;

    const updates = req.body;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided."
      });
    }

    const result = await CourseModel.patchCourse(id, updates);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Course not found."
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully."
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
}

async function searchCourses(req, res) {
  try {
    const { q } = req.query;

    if (!q || !q.trim()) {
      return res.status(400).json({
        success: false,
        message: "Search query is required."
      });
    }

    const courses = await CourseModel.searchCourses(q);

    if(courses.length === 0){
      return res.status(404).json({
        success:false,
        message:"Course not found"
      });
    }
    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseDetails,
  patchCourse,
  searchCourses
};
