import { getCourse } from "./services/courseService.js";
import { showLoading, showError } from "./components/ui.mjs";

const container = document.getElementById("courseContent");
showLoading(container);

// Ge Id Value from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const slugId = urlParams.get("course");
let course;


try {
    const response = await getCourse(slugId);
    course = response.data;
    renderCourse();
}
catch(error){
    showError(container,error.message);
}

//  Render single course detail
        function renderCourse() {
            const container = document.getElementById('courseContent');


            let html = `
                        <div class="course-detail">
                            <div class="course-detail-header">
                                <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-2);">
                                    <i class="${course.icon}" style="font-size:2rem;color:${course.color}"></i>
                                    <h2>${course.name}</h2>
                                </div>
                                <p>${course.description}</p>
                                <div style="display:flex;gap:var(--space-4);margin-top:var(--space-2);color:var(--color-text-muted);font-size:0.875rem;">
                                    <span>${course.totalLessons} lessons</span>
                                    <span>${course.totalTopics} topics</span>
                                </div>
                            </div>
                        `;

            // Render topics and lessons
            course.topics.forEach(topic => {
                html += `
                            <div class="topic-section">
                                <h3>${topic.title}</h3>
                                ${topic.lessons.map(lesson => `
                                    <div class="lesson-card">
                                        <h4>${lesson.title}</h4>
                                        <p>${lesson.description}</p>
                                        <div class="code-block">
                                            <pre>${lesson.code}</pre>
                                        </div>
                                        <div class="explanation">
                                            <p>💡 ${lesson.explanation}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `;
            });

            html += `
                            <div style="margin-top:var(--space-8);padding:var(--space-6);background:var(--color-primary-soft);border-radius:var(--radius-lg);text-align:center;">
                                <h3 style="font-size:1.25rem;margin-bottom:var(--space-2);">Ready to master ${course.name}?</h3>
                                <p style="color:var(--color-text-secondary);margin-bottom:var(--space-4);">Start learning today and build real-world skills</p>
                                 </div>
                        </div>
                    `;

            container.innerHTML = html;
        }