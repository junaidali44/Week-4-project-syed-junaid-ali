import { getCourses } from "./services/courseService.js";
import { heroTechData } from "./data.js";
import { showLoading, showError } from "./componets/ui.js";

const container = document.getElementById("courseContent");
showLoading(container);
let courses;
try {
  const response = await getCourses();
  courses = response.data;
  renderAllCourses();
} catch (error) {
  showError(container, error.message);
}

function renderAllCourses() {
  const container = document.getElementById("courseContent");
  container.innerHTML = `
                        <div class="course-grid">
                            ${courses
                              .map(
                                (course) => `
                                <a href="course.html?course=${course.slug}" class="course-card">
                                    <div class="course-card-header">
                                        <div class="course-card-icon">
                                            <i class="${course.icon}" style="color: ${course.color}"></i>
                                        </div>
                                        <h3>${course.name}</h3>
                                    </div>
                                    <p>${course.description}</p>
                                    <div class="course-card-meta">
                                        <span>📚 ${course.totalLessons} lessons</span>
                                        <span>📖 ${course.totalTopics} topics</span>
                                    </div>
                                </a>
                            `,
                              )
                              .join("")}
                        </div>
                    `;
}
renderAllCourses();
