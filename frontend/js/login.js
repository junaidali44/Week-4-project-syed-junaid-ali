// ========================================
// AUTH — LOGIN (FIXED)
// ========================================

import { login } from "./services/authService.js";
import { saveAuth, isLoggedIn, getUser } from "./utils/auth.js";

// Redirect if already logged in
if (isLoggedIn()) {
    const user = getUser();
    window.location.href = user.role === "admin" ? "admin/index.html" : "index.html";
}

// DOM Elements
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginBtn = document.getElementById("loginBtn");
const loginBtnText = document.getElementById("loginBtnText");
const loginBtnIcon = document.getElementById("loginBtnIcon");
const loginLoading = document.getElementById("loginLoading");
const loginMessage = document.getElementById("loginMessage");
const formMessage = document.getElementById("loginFormMessage");
const rememberMe = document.getElementById("rememberMe");

// ========================================
// PASSWORD TOGGLE
// ========================================
const toggleBtn = document.getElementById("passwordToggle");
const passwordIcon = document.getElementById("passwordIcon");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        passwordIcon.className = isPassword ? "fas fa-eye-slash" : "fas fa-eye";
    });
}

// ========================================
// VALIDATION
// ========================================
function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        emailInput.classList.remove("auth-input--error", "auth-input--success");
        emailError.classList.remove("auth-error--visible");
        return false;
    }

    if (!emailRegex.test(email)) {
        emailInput.classList.add("auth-input--error");
        emailInput.classList.remove("auth-input--success");
        emailError.classList.add("auth-error--visible");
        return false;
    }

    emailInput.classList.remove("auth-input--error");
    emailInput.classList.add("auth-input--success");
    emailError.classList.remove("auth-error--visible");
    return true;
}

function validatePassword() {
    const password = passwordInput.value;

    if (!password) {
        passwordInput.classList.remove("auth-input--error", "auth-input--success");
        passwordError.classList.remove("auth-error--visible");
        return false;
    }

    if (password.length < 6) {
        passwordInput.classList.add("auth-input--error");
        passwordInput.classList.remove("auth-input--success");
        passwordError.classList.add("auth-error--visible");
        return false;
    }

    passwordInput.classList.remove("auth-input--error");
    passwordInput.classList.add("auth-input--success");
    passwordError.classList.remove("auth-error--visible");
    return true;
}

// Real-time validation
emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", function() { if (this.value.length > 0) validateEmail(); });
passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("input", function() { if (this.value.length > 0) validatePassword(); });

// ========================================
// SET LOADING STATE
// ========================================
function setLoading(isLoading) {
    loginBtn.disabled = isLoading;
    loginBtnText.textContent = isLoading ? "Signing In..." : "Sign In";
    loginBtnIcon.className = isLoading ? "fas fa-spinner fa-spin" : "fas fa-arrow-right";
    loginLoading.style.display = isLoading ? "flex" : "none";
    if (loginMessage) {
        loginMessage.textContent = isLoading ? "Signing in..." : "";
    }
}

// ========================================
// SHOW MESSAGE — FIXED
// ========================================
function showMessage(text, isError = false) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.style.color = isError ? "#EF4444" : "#34D399";
    formMessage.style.display = "block";
    formMessage.style.marginTop = "12px";
    formMessage.style.padding = "10px 16px";
    formMessage.style.borderRadius = "8px";
    formMessage.style.background = isError ? "rgba(239, 68, 68, 0.08)" : "rgba(52, 211, 153, 0.08)";
    formMessage.style.border = isError ? "1px solid rgba(239, 68, 68, 0.15)" : "1px solid rgba(52, 211, 153, 0.15)";
}

// ========================================
// CLEAR MESSAGE
// ========================================
function clearMessage() {
    if (!formMessage) return;
    formMessage.style.display = "none";
    formMessage.textContent = "";
}

// ========================================
// FORM SUBMIT — FIXED ERROR HANDLING
// ========================================
form.addEventListener("submit", async function(e) {
    e.preventDefault();

    // Validate
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
        if (!isEmailValid) emailInput.focus();
        else if (!isPasswordValid) passwordInput.focus();
        return;
    }

    // Hide previous message
    clearMessage();

    // Show loading
    setLoading(true);

    try {
        const response = await login({
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        });

        // Check if login was successful
        if (response && response.token && response.user) {
            // Save auth data
            saveAuth(response.token, response.user);

            // Show success message
            showMessage(response.message || "Login successful! Redirecting...", false);

            // Redirect
            setTimeout(() => {
                window.location.href = response.user.role === "admin" ? "admin/index.html" : "index.html";
            }, 800);
        } else {
            // Handle case where response doesn't have expected data
            showMessage("Invalid credentials. Please try again.", true);
            setLoading(false);
        }

    } catch (error) {
        // ===== FIXED: Proper error handling =====
        let errorMessage = "Invalid email or password. Please try again.";
        
        // Check if error has a message
        if (error) {
            // If error is a string
            if (typeof error === 'string') {
                errorMessage = error;
            }
            // If error has a message property
            else if (error.message) {
                // Check for common API error messages
                if (error.message.toLowerCase().includes('unauthorized') || 
                    error.message.toLowerCase().includes('invalid') ||
                    error.message.toLowerCase().includes('credentials')) {
                    errorMessage = "Invalid email or password. Please try again.";
                } else {
                    errorMessage = error.message;
                }
            }
            // If error has a response with data
            else if (error.response && error.response.data) {
                const data = error.response.data;
                if (data.message) {
                    // Check for invalid credentials message
                    if (data.message.toLowerCase().includes('unauthorized') || 
                        data.message.toLowerCase().includes('invalid') ||
                        data.message.toLowerCase().includes('credentials')) {
                        errorMessage = "Invalid email or password. Please try again.";
                    } else {
                        errorMessage = data.message;
                    }
                } else if (data.error) {
                    errorMessage = data.error;
                }
            }
        }

        // Show user-friendly error message
        showMessage(errorMessage, true);
        setLoading(false);
        
        // Clear password field for security
        passwordInput.value = '';
        passwordInput.focus();
    }
});

// ========================================
// CLEAR MESSAGE ON INPUT
// ========================================
emailInput.addEventListener('input', clearMessage);
passwordInput.addEventListener('input', clearMessage);

console.log('🔐 Login page loaded successfully');