require("dotenv").config();

// Test database connection
// (To test connection uncomment the code in file configs/testConnection.js test connection import and call in index.js)
// const testConnection = require("./configs/testConnection");

const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const courseRoute = require("./routes/course.routes");
const topicsRoute = require("./routes/topic.routes");
const feedbacksRoute = require("./routes/feedback.routes");
const lessonsRoute = require("./routes/lesson.routes");
const authRoute = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(cors());
app.use(errorHandler);

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    project: "EZLearn Backend API",
    description:
      "RESTful API built with Node.js, Express.js, and MySQL using MVC Architecture.",
    version: "1.0.0",
    author: "Syed Junaid Ali",
    endpoints: {
      courses: {
        list: "GET /api/courses",
        single: "GET /api/courses/:id",
      },
      topics: {
        list: "GET /api/topics",
        single: "GET /api/topics/:id",
      },
      feedback: {
        list: "GET /api/feedback",
        create: "POST /api/feedback",
      },
    },
  });
});

// ALL Routes
app.use("/api/courses", courseRoute);
app.use("/api/topics", topicsRoute);
app.use("/api/feedbacks", feedbacksRoute);
app.use("/api/lessons", lessonsRoute);
app.use("/api/auth/", authRoute);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users",userRoutes);

// Test connection
// testConnection();

// error Handler
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port :${PORT}`);
});
