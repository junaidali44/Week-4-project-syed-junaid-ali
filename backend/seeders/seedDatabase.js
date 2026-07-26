require("dotenv").config();

const db = require("../configs/db");
const courseData = require("../data/courseData");
async function seedDatabase() {

    try {

        console.log("🌱 Seeding Started...");

        const courses = Object.values(courseData);

        for (const course of courses) {

            // ==========================
            // Insert Course
            // ==========================

            const [courseResult] = await db.query(
                `
                INSERT INTO courses
                (name, slug, description, icon, color)
                VALUES (?, ?, ?, ?, ?)
                `,
                [
                    course.name,
                    course.id,
                    course.description,
                    course.icon,
                    course.color
                ]
            );

            const courseId = courseResult.insertId;

            console.log(`✅ Course: ${course.name}`);

            // ==========================
            // Insert Topics
            // ==========================

            for (const topic of course.topics) {

                const [topicResult] = await db.query(
                    `
                    INSERT INTO topics
                    (course_id,title,content)
                    VALUES(?,?,?)
                    `,
                    [
                        courseId,
                        topic.name,
                        ""
                    ]
                );

                const topicId = topicResult.insertId;

                console.log(`   📚 Topic: ${topic.name}`);

                // ==========================
                // Insert Lessons
                // ==========================

                for (const lesson of topic.lessons) {

                    await db.query(
                        `
                        INSERT INTO lessons
                        (topic_id,title,description,code,explanation)
                        VALUES(?,?,?,?,?)
                        `,
                        [
                            topicId,
                            lesson.title,
                            lesson.description,
                            lesson.code,
                            lesson.explanation
                        ]
                    );

                    console.log(`      📄 Lesson: ${lesson.title}`);
                }
            }
        }

        console.log("🎉 Database Seeded Successfully!");

        process.exit();

    } catch (error) {

        console.error(error);

        process.exit();
    }

}

seedDatabase();