// ========================================
// EZLearn — Admin Data Management
// ========================================

// ===== Copy your original data.js here =====
// (I'll include a sample structure)

const courseData = {
    courses: [
        {
            id: 1,
            title: 'React Complete Guide',
            description: 'Learn React from basics to advanced',
            icon: '⚛️',
            image: '',
            topics: [
                {
                    id: 1,
                    title: 'React Basics',
                    lessons: [
                        { id: 1, title: 'What is React?', content: 'React is a JavaScript library...', code: 'const App = () => <h1>Hello</h1>;' },
                        { id: 2, title: 'JSX Explained', content: 'JSX is a syntax extension...', code: '<div className="app">Hello</div>' }
                    ]
                },
                {
                    id: 2,
                    title: 'React Components',
                    lessons: [
                        { id: 3, title: 'Functional Components', content: 'Components are the building blocks...', code: 'function Welcome() { return <h1>Hello</h1>; }' }
                    ]
                }
            ]
        }
    ]
};

// ===== CRUD Operations =====
class AdminData {
    constructor() {
        this.data = this.loadData() || courseData;
        this.saveData();
    }

    loadData() {
        try {
            const saved = localStorage.getItem('ezlearn_admin_data');
            return saved ? JSON.parse(saved) : null;
        } catch {
            return null;
        }
    }

    saveData() {
        localStorage.setItem('ezlearn_admin_data', JSON.stringify(this.data));
    }

    // ===== Courses =====
    getCourses() {
        return this.data.courses || [];
    }

    getCourse(id) {
        return this.data.courses.find(c => c.id === id);
    }

    addCourse(course) {
        const newCourse = {
            id: Date.now(),
            ...course,
            topics: []
        };
        this.data.courses.push(newCourse);
        this.saveData();
        return newCourse;
    }

    updateCourse(id, updates) {
        const index = this.data.courses.findIndex(c => c.id === id);
        if (index === -1) return null;
        this.data.courses[index] = { ...this.data.courses[index], ...updates };
        this.saveData();
        return this.data.courses[index];
    }

    deleteCourse(id) {
        this.data.courses = this.data.courses.filter(c => c.id !== id);
        this.saveData();
        return true;
    }

    // ===== Topics =====
    getTopics(courseId) {
        const course = this.getCourse(courseId);
        return course ? course.topics : [];
    }

    getTopic(courseId, topicId) {
        const course = this.getCourse(courseId);
        return course ? course.topics.find(t => t.id === topicId) : null;
    }

    addTopic(courseId, topic) {
        const course = this.getCourse(courseId);
        if (!course) return null;
        const newTopic = {
            id: Date.now(),
            ...topic,
            lessons: []
        };
        course.topics.push(newTopic);
        this.saveData();
        return newTopic;
    }

    updateTopic(courseId, topicId, updates) {
        const course = this.getCourse(courseId);
        if (!course) return null;
        const index = course.topics.findIndex(t => t.id === topicId);
        if (index === -1) return null;
        course.topics[index] = { ...course.topics[index], ...updates };
        this.saveData();
        return course.topics[index];
    }

    deleteTopic(courseId, topicId) {
        const course = this.getCourse(courseId);
        if (!course) return false;
        course.topics = course.topics.filter(t => t.id !== topicId);
        this.saveData();
        return true;
    }

    // ===== Lessons =====
    getLessons(courseId, topicId) {
        const topic = this.getTopic(courseId, topicId);
        return topic ? topic.lessons : [];
    }

    getLesson(courseId, topicId, lessonId) {
        const topic = this.getTopic(courseId, topicId);
        return topic ? topic.lessons.find(l => l.id === lessonId) : null;
    }

    addLesson(courseId, topicId, lesson) {
        const topic = this.getTopic(courseId, topicId);
        if (!topic) return null;
        const newLesson = {
            id: Date.now(),
            ...lesson
        };
        topic.lessons.push(newLesson);
        this.saveData();
        return newLesson;
    }

    updateLesson(courseId, topicId, lessonId, updates) {
        const topic = this.getTopic(courseId, topicId);
        if (!topic) return null;
        const index = topic.lessons.findIndex(l => l.id === lessonId);
        if (index === -1) return null;
        topic.lessons[index] = { ...topic.lessons[index], ...updates };
        this.saveData();
        return topic.lessons[index];
    }

    deleteLesson(courseId, topicId, lessonId) {
        const topic = this.getTopic(courseId, topicId);
        if (!topic) return false;
        topic.lessons = topic.lessons.filter(l => l.id !== lessonId);
        this.saveData();
        return true;
    }

    // ===== Users =====
    getUsers() {
        return this.data.users || [];
    }

    addUser(user) {
        const newUser = {
            id: Date.now(),
            ...user,
            registeredAt: new Date().toISOString()
        };
        if (!this.data.users) this.data.users = [];
        this.data.users.push(newUser);
        this.saveData();
        return newUser;
    }

    deleteUser(id) {
        if (!this.data.users) return false;
        this.data.users = this.data.users.filter(u => u.id !== id);
        this.saveData();
        return true;
    }

    // ===== Feedbacks =====
    getFeedbacks() {
        return this.data.feedbacks || [];
    }

    addFeedback(feedback) {
        const newFeedback = {
            id: Date.now(),
            ...feedback,
            createdAt: new Date().toISOString()
        };
        if (!this.data.feedbacks) this.data.feedbacks = [];
        this.data.feedbacks.push(newFeedback);
        this.saveData();
        return newFeedback;
    }

    deleteFeedback(id) {
        if (!this.data.feedbacks) return false;
        this.data.feedbacks = this.data.feedbacks.filter(f => f.id !== id);
        this.saveData();
        return true;
    }

    // ===== Stats =====
    getStats() {
        const courses = this.getCourses();
        const users = this.getUsers();
        const feedbacks = this.getFeedbacks();

        let totalTopics = 0;
        let totalLessons = 0;
        courses.forEach(c => {
            c.topics.forEach(t => {
                totalTopics++;
                totalLessons += t.lessons.length;
            });
        });

        return {
            totalCourses: courses.length,
            totalTopics,
            totalLessons,
            totalUsers: users.length,
            totalFeedbacks: feedbacks.length
        };
    }
}

// ===== Initialize =====
const adminData = new AdminData();