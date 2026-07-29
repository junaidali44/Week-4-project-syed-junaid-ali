# 🎓 EZLearn - Modern E-Learning Platform

EZLearn is a modern full-stack E-Learning platform built using **HTML, CSS, JavaScript, Node.js, Express.js, MySQL, and REST APIs**. The platform allows students to browse courses, learn through structured lessons, track progress, submit feedback, and enables administrators to manage the entire learning system through a dedicated admin dashboard.

---

# ✨ Features

## 👨‍🎓 User Features

- User Registration & Login (JWT Authentication)
- Browse Available Courses
- Search Courses
- View Course Details
- Topics & Lessons Navigation
- Watch Learning Content
- Mark Lessons Complete
- Course Progress Tracking
- Dashboard Analytics
- Recent Learning Activity
- Submit Feedback
- Profile Management
- Secure Logout

---

## 👨‍💼 Admin Features

### Dashboard

- Platform Analytics
- Total Users
- Total Courses
- Total Topics
- Total Lessons
- Total Feedbacks
- Recent Activities

### Course Management

- Create Course
- Update Course
- Delete Course
- View All Courses

### Topic Management

- Create Topics
- Update Topics
- Delete Topics

### Lesson Management

- Create Lessons
- Update Lessons
- Delete Lessons

### User Management

- View Users
- Update User Role
- Delete Users

### Feedback Management

- View Feedback
- Delete Feedback

---

# 🛠 Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Font Awesome
- Google Fonts
- Fetch API

## Backend

- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcrypt
- REST API

---

# 📁 Project Structure

```
EZLearn
│
├── frontend
│   │
│   ├── admin
│   │   ├── index.html
│   │   ├── courses.html
│   │   ├── users.html
│   │   ├── feedbacks.html
│   │   ├── css
│   │   └── js
│   │
│   ├── services
│   ├── components
│   ├── utils
│   ├── pages
│   ├── assets
│   └── index.html
│
├── backend
│   │
│   ├── controllers
│   ├── routes
│   ├── middlewares
│   ├── models
│   ├── services
│   ├── database
│   ├── utils
│   ├── app.js
│   └── index.js
│
└── README.md
```

---

# 🔐 Authentication

Authentication is implemented using **JWT (JSON Web Tokens)**.

After successful login:

- Token is stored inside Session Storage
- Every authenticated request sends

```
Authorization: Bearer <token>
```

Protected routes require:

- Valid JWT Token
- Admin Middleware (for admin endpoints)

---

# 🌐 API Base URL

```
http://localhost:3000/api
```

---

# 📚 API Modules

## Authentication

```
POST /auth/register
POST /auth/login
GET  /auth/profile
```

---

## Courses

```
GET    /courses
GET    /courses/:slug/details
POST   /courses
PUT    /courses/:id
PATCH  /courses/:id
DELETE /courses/:id
```

---

## Topics

```
GET    /topics
GET    /topics/:id
POST   /topics
PUT    /topics/:id
PATCH  /topics/:id
DELETE /topics/:id
```

---

## Lessons

```
GET    /lessons
GET    /lessons/:id
POST   /lessons
PUT    /lessons/:id
PATCH  /lessons/:id
DELETE /lessons/:id
```

---

## Users

```
GET    /admin/users
GET    /admin/users/:id
PATCH  /admin/users/:id/role
DELETE /admin/users/:id
```

---

## Feedback

```
GET    /feedback
GET    /feedback/:id
POST   /feedback
DELETE /feedback/:id
```

---

## Dashboard

```
GET /dashboard
GET /dashboard/recent
```

---

# 💾 Local Storage

The frontend stores:

```
Session Storage

token
user
```

Used for

- Login Persistence
- Authorization
- Role Checking

---

# 📊 Dashboard Analytics

The admin dashboard displays

- Total Users
- Total Courses
- Total Topics
- Total Lessons
- Total Feedbacks
- Recent Platform Activities

---

# 🔍 Search

The application supports searching courses using

```
GET /courses/search
```

---

# 🧩 Services Layer

The frontend follows a modular service architecture.

```
services/

apiService.js
authService.js
courseService.js
dashboardService.js
topicService.js
lessonService.js
feedbackService.js
userService.js
```

Every service communicates with the backend through the common API service.

---

# 📱 Responsive Design

The project is fully responsive and optimized for

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

# 🔒 Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected Admin Routes
- Role-Based Authorization
- Input Validation
- Error Handling
- Secure API Requests

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/EZLearn.git
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Configure Environment

Create a `.env` file.

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=ezlearn

JWT_SECRET=your_secret_key
```

---

## 4. Start Backend

```bash
npm start
```

or

```bash
nodemon index.js
```

---

## 5. Launch Frontend

Open

```
frontend/index.html
```

using Live Server or any local web server.

---

# 📈 Future Improvements

- Course Enrollment
- Video Streaming
- Quiz System
- Certificates
- Instructor Dashboard
- Payment Integration
- Course Wishlist
- Notifications
- Dark Mode
- User Avatars
- File Uploads
- Email Verification
- Forgot Password
- Two-Factor Authentication
- Pagination
- Advanced Search
- Course Categories
- Bookmarks
- Discussion Forum

---

# 👨‍💻 Development Principles

The project follows:

- RESTful API Architecture
- Modular JavaScript
- MVC Backend Pattern
- Clean Folder Structure
- Reusable Components
- Separation of Concerns
- Service-Based API Layer

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is developed for educational and learning purposes.

---

# 👤 Author

**Syed Junaid Ali**

Frontend Developer | JavaScript Developer | Node.js Learner

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap
- REST APIs
- Node.js
- Express.js
- MySQL

---

# ⭐ Acknowledgements

Special thanks to everyone who contributed to the development of this project and to the open-source community for providing the tools and libraries that made EZLearn possible.