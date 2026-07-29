import { showToast, showError } from '../../js/components/ui.mjs';
import { getDashboardStats, getRecentActivity } from '../../js/services/dashboardService.js';

const state = {
    stats: {
        courses: 0,
        topics: 0,
        lessons: 0,
        users: 0,
        feedback: 0
    },
    recentUsers: [],
    recentCourses: [],
    isLoading: false,
    refreshInterval: null
};

// ========================================
// DOM REFERENCES
// ========================================
const elements = {
    statCourses: document.getElementById('statCourses'),
    statTopics: document.getElementById('statTopics'),
    statLessons: document.getElementById('statLessons'),
    statUsers: document.getElementById('statUsers'),
    statFeedbacks: document.getElementById('statFeedbacks'),
    totalCoursesRow: document.getElementById('totalCoursesRow'),
    totalTopicsRow: document.getElementById('totalTopicsRow'),
    totalLessonsRow: document.getElementById('totalLessonsRow'),
    totalUsersRow: document.getElementById('totalUsersRow'),
    totalFeedbacksRow: document.getElementById('totalFeedbacksRow'),
    recentUsersTable: document.getElementById('recentUsersTable'),
    recentCoursesTable: document.getElementById('recentCoursesTable'),
    refreshBtn: document.getElementById('refreshBtn'),
    logoutBtn: document.getElementById('logoutBtn')
};
 const toggleBtn = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        function toggleSidebar() {
            sidebar.classList.toggle('sidebar--open');
            overlay.classList.toggle('sidebar-overlay--active');
            document.body.style.overflow = sidebar.classList.contains('sidebar--open') ? 'hidden' : '';
        }

        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleSidebar);
        }

        if (overlay) {
            overlay.addEventListener('click', toggleSidebar);
        }

        // Close sidebar on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('sidebar--open')) {
                toggleSidebar();
            }
        });

        // Auto-close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && sidebar.classList.contains('sidebar--open')) {
                toggleSidebar();
            }
        });

        // ========================================
        // LOGOUT
        // ========================================
        document.getElementById('logoutBtn').addEventListener('click', function(e) {
            if (confirm('Are you sure you want to logout?')) {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');
                window.location.href = '../login.html';
            }
        });

        // ========================================
        // REFRESH
        // ========================================
        document.getElementById('refreshBtn').addEventListener('click', function(e) {
            const btn = this;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            setTimeout(() => {
                location.reload();
            }, 500);
        });
// ========================================
// AUTH CHECK
// ========================================
const token = sessionStorage.getItem('token');
const user = JSON.parse(sessionStorage.getItem('user') || 'null');

if (!token || !user) {
    showToast('Please login to access the dashboard', 'warning', 'Authentication Required');
    setTimeout(() => {
        window.location.href = '../login.html';
    }, 1500);
} else {
    const userName = user.name || user.email || 'Admin';
    showToast(`Welcome back, ${userName}!`, 'success', 'Dashboard Loaded');
}
// Logout
    logoutBtn.addEventListener("click",() => {
      setTimeout(() => {
        logout();
      }, 1000);
    });
// ========================================
// FORMAT HELPERS
// ========================================
function formatDate(dateString) {
    if (!dateString) return '—';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

function formatRole(role) {
    return role === 'admin' ? 'Admin' : 'User';
}

// ========================================
// LOAD DASHBOARD DATA
// ========================================
async function loadDashboardData() {
    if (state.isLoading) return;
    state.isLoading = true;

    showToast('Loading dashboard data...', 'info', 'Please Wait');

    try {
        // Fetch stats
        const statsResponse = await getDashboardStats();
        const stats = statsResponse.data || statsResponse;

        state.stats = {
            courses: stats.courses || 0,
            topics: stats.topics || 0,
            lessons: stats.lessons || 0,
            users: stats.users || 0,
            feedback: stats.feedback || 0
        };

        // Fetch recent activity
        const recentResponse = await getRecentActivity();
        const recent = recentResponse.data || recentResponse;

        state.recentUsers = recent.users || [];
        state.recentCourses = recent.courses || [];

        // Update DOM
        updateStats();
        updateOverview();
        renderRecentUsers();
        renderRecentCourses();

        showToast('Dashboard data loaded successfully!', 'success', 'Updated');

    } catch (error) {
        console.error('Error loading dashboard:', error);
        showToast('Failed to load dashboard data: ' + error.message, 'error', 'Error');

    } finally {
        state.isLoading = false;
    }
}

// ========================================
// UPDATE STATS
// ========================================
function updateStats() {
    const { courses, topics, lessons, users, feedback } = state.stats;

    animateNumber(elements.statCourses, courses);
    animateNumber(elements.statTopics, topics);
    animateNumber(elements.statLessons, lessons);
    animateNumber(elements.statUsers, users);
    animateNumber(elements.statFeedbacks, feedback);
}

function updateOverview() {
    const { courses, topics, lessons, users, feedback } = state.stats;

    if (elements.totalCoursesRow) {
        elements.totalCoursesRow.innerHTML = `<strong>${courses}</strong>`;
    }
    if (elements.totalTopicsRow) {
        elements.totalTopicsRow.innerHTML = `<strong>${topics}</strong>`;
    }
    if (elements.totalLessonsRow) {
        elements.totalLessonsRow.innerHTML = `<strong>${lessons}</strong>`;
    }
    if (elements.totalUsersRow) {
        elements.totalUsersRow.innerHTML = `<strong>${users}</strong>`;
    }
    if (elements.totalFeedbacksRow) {
        elements.totalFeedbacksRow.innerHTML = `<strong>${feedback}</strong>`;
    }
}

// ========================================
// RENDER RECENT USERS
// ========================================
function renderRecentUsers() {
    if (!elements.recentUsersTable) return;

    const users = state.recentUsers.slice(0, 5);

    if (users.length === 0) {
        elements.recentUsersTable.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-gray-500 py-4">
                    <i class="fas fa-users"></i> No users found
                </td>
            </tr>
        `;
        return;
    }

    elements.recentUsersTable.innerHTML = users.map(user => `
        <tr>
            <td><strong>${user.name || 'Unknown'}</strong></td>
            <td>${user.email || '—'}</td>
            <td><span class="badge badge--${user.role === 'admin' ? 'primary' : 'info'}">${formatRole(user.role)}</span></td>
            <td>${formatDate(user.created_at)}</td>
        </tr>
    `).join('');
}

// ========================================
// RENDER RECENT COURSES
// ========================================
function renderRecentCourses() {
    if (!elements.recentCoursesTable) return;

    const courses = state.recentCourses.slice(0, 5);

    if (courses.length === 0) {
        elements.recentCoursesTable.innerHTML = `
            <tr>
                <td colspan="3" class="text-center text-gray-500 py-4">
                    <i class="fas fa-book"></i> No courses found
                </td>
            </tr>
        `;
        return;
    }

    elements.recentCoursesTable.innerHTML = courses.map(course => `
        <tr>
            <td><strong>${course.name || 'Untitled'}</strong></td>
            <td><code class="text-gray-400 text-xs">${course.slug || '—'}</code></td>
            <td>${formatDate(course.created_at)}</td>
        </tr>
    `).join('');
}

// ========================================
// ANIMATE NUMBER
// ========================================
function animateNumber(element, target) {
    if (!element) return;

    const duration = 600;
    const start = parseInt(element.textContent) || 0;
    const difference = target - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + difference * eased);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// ========================================
// REFRESH
// ========================================
function handleRefresh(e) {
    e.preventDefault();

    const btn = e.currentTarget;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

    loadDashboardData().finally(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
    });
}

// ========================================
// LOGOUT
// ========================================
function handleLogout(e) {
    e.preventDefault();

    showToast('Logging out...', 'info', 'Goodbye');

    setTimeout(() => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        window.location.href = '../login.html';
    }, 800);
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        showToast('Refreshing dashboard...', 'info', 'Keyboard Shortcut');
        loadDashboardData();
    }

    if (e.key === 'Escape') {
        const toast = document.querySelector('.toast');
        if (toast) {
            toast.classList.add('toast--hiding');
            setTimeout(() => toast.remove(), 300);
        }
    }
});

// ========================================
// INIT
// ========================================
function init() {
    showToast('Initializing dashboard...', 'info', 'Loading');

    loadDashboardData();

    if (elements.logoutBtn) {
        elements.logoutBtn.addEventListener('click', handleLogout);
    }

    if (elements.refreshBtn) {
        elements.refreshBtn.addEventListener('click', handleRefresh);
    }

    // Auto-refresh every 5 minutes
    setInterval(() => {
        showToast('Auto-refreshing dashboard...', 'info', 'Syncing');
        loadDashboardData();
    }, 300000);

    // Tab visibility refresh
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            showToast('Tab resumed, refreshing data...', 'info', 'Syncing');
            loadDashboardData();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}