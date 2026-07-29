
export function showLoading(container) {
  container.innerHTML = `
    <div class="loading-state">
      <h2>Loading...</h2>
      <p>Please wait while we fetch the data.</p>
    </div>
  `;
}

export function showError(container, message = "Something went wrong.") {
  container.innerHTML = `
    <div class="no-result">
      <h2>Oops!</h2>
      <p>${message}</p>

      <a href="courses.html" class="back-btn">
        Back to Courses
      </a>
    </div>
  `;
}

export function showEmpty(container, message = "No data found.") {
  container.innerHTML = `
    <div class="no-result">
      <h2>No Results</h2>
      <p>${message}</p>
    </div>
  `;
}
// ========================================
// EZLearn — UI Components
// Toast, Modal, Loading, Helpers
// ========================================

// ======================================== */
// TOAST SYSTEM                            */
// ======================================== */

/**
 * Show a toast notification
 * @param {string} type - 'success' | 'error' | 'warning' | 'info'
 * @param {string} title - Toast title
 * @param {string} message - Toast message
 * @param {number} duration - Auto-close duration in ms (default: 4000)
 */
export function showToast(type, title, message, duration = 4000) {
    let container = document.getElementById('toastContainer');

    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-triangle-exclamation',
        info: 'fa-circle-info'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
        <div class="toast__icon"><i class="fas ${icons[type] || icons.info}"></i></div>
        <div class="toast__content">
            <div class="toast__title">${title}</div>
            <div class="toast__message">${message}</div>
        </div>
        <button class="toast__close" onclick="this.closest('.toast').remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.add('toast--hiding');
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 300);
        }
    }, duration);
}

export function showSuccess(message, title = 'Success') {
    showToast('success', title, message);
}

// export function showError(message, title = 'Error') {
//     showToast('error', title, message);
// }

export function showWarning(message, title = 'Warning') {
    showToast('warning', title, message);
}

export function showInfo(message, title = 'Info') {
    showToast('info', title, message);
}

// ======================================== */
// MODAL SYSTEM                            */
// ======================================== */

/**
 * Open a modal by ID
 * @param {string} modalId - The ID of the modal overlay
 */
export function openModal(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
        overlay.classList.add('modal-overlay--open');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close a modal by ID
 * @param {string} modalId - The ID of the modal overlay
 */
export function closeModal(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
        overlay.classList.remove('modal-overlay--open');
        document.body.style.overflow = '';
    }
}

/**
 * Close all open modals
 */
export function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(el => {
        el.classList.remove('modal-overlay--open');
    });
    document.body.style.overflow = '';
}


/**
 * @param {string} buttonId - The ID of the button
 * @param {string} text - Loading text (default: 'Loading...')
 */

/**
 * @param {string} buttonId - The ID of the button
 */
export function hideLoading(buttonId) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;
    btn.disabled = false;
    if (btn._originalText) {
        btn.innerHTML = btn._originalText;
        delete btn._originalText;
    }
}
/**
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date (e.g., "Jan 15, 2026")
 */
export function formatDate(dateString) {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch {
        return 'N/A';
    }
}

/**
 * @param {string} text - The text to truncate
 * @param {number} length - Maximum length (default: 50)
 * @returns {string} Truncated text with '...' if longer
 */
export function truncateText(text, length = 50) {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
}

/**
 * @param {number} rating - Rating from 1-5
 * @returns {string} HTML string of stars
 */
export function renderStars(rating) {
    const full = '⭐'.repeat(Math.min(rating, 5));
    const empty = '☆'.repeat(Math.max(0, 5 - rating));
    return full + empty;
}

/**
 * Get color class for a role badge
 * @param {string} role - 'admin' or 'user'
 * @returns {string} CSS class name
 */
export function getRoleBadgeClass(role) {
    return role === 'admin' ? 'badge--primary' : 'badge--info';
}

/**
 * Capitalize first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} Capitalized string
 */
export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('modal-overlay--open');
        document.body.style.overflow = '';
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

export default {
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    openModal,
    closeModal,
    closeAllModals,
    showLoading,
    hideLoading,
    formatDate,
    truncateText,
    renderStars,
    getRoleBadgeClass,
    capitalize
};