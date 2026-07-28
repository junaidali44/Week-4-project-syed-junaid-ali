const TOKEN_KEY = "token";
const USER_KEY = "user";

// Save authentication
export function saveAuth(token, user) {
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
}

// Token
export function getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
}

// Logged in user
export function getUser() {
    const user = sessionStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
}

// Login status
export function isLoggedIn() {
    return !!getToken();
}

// Admin check
export function isAdmin() {
    const user = getUser();
    return user && user.role === "admin";
}

// Require Login
export function requireLogin() {

    if (!isLoggedIn()) {
        window.location.href = "login.html";
    }

}

// Require Admin
export function requireAdmin() {

    if (!isLoggedIn()) {
        window.location.href = "login.html";
        return;
    }

    if (!isAdmin()) {
        window.location.href = "index.html";
    }

}

// Logout
export function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}