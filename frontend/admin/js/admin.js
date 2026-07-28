// ========================================
// EZLearn — Admin Core Functions
// ========================================

// ===== Check Authentication =====
export function checkAuth() {
    const token = sessionStorage.getItem('token');
    if (!token) {
        window.location.href = '../login.html';
        return false;
    }
    return true;
}

// ===== Get Current User =====
export function getCurrentUser() {
    try {
        const user = sessionStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch {
        return null;
    }
}

// ===== Logout =====
export function logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    window.location.href = '../login.html';
}

// ===== Sidebar Active Link =====
export function setActiveLink() {
    const current = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar__link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === current) {
            link.classList.add('sidebar__link--active');
        }
    });
}

// ===== Render Stats =====
export function renderStats(data) {
    const statsMap = {
        totalCourses: { icon: 'fa-book', label: 'Courses' },
        totalTopics: { icon: 'fa-list', label: 'Topics' },
        totalLessons: { icon: 'fa-file-alt', label: 'Lessons' },
        totalUsers: { icon: 'fa-users', label: 'Users' },
        totalFeedbacks: { icon: 'fa-comment', label: 'Feedbacks' }
    };

    const container = document.getElementById('statsGrid');
    if (!container) return;

    container.innerHTML = Object.entries(statsMap).map(([key, value]) => `
        <div class="stat">
            <span class="stat__icon"><i class="fas ${value.icon}"></i></span>
            <div class="stat__value">${data[key] || 0}</div>
            <div class="stat__label">${value.label}</div>
        </div>
    `).join('');
}

// ======================================== */
// EXPORTS                                  */
// ======================================== */
export default {
    checkAuth,
    getCurrentUser,
    logout,
    setActiveLink,
    renderStats
};