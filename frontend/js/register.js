// ========================================
// AUTH — REGISTER
// ========================================

import { register } from "./services/authService.js";

// DOM Elements
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const registerBtn = document.getElementById("registerBtn");
const registerBtnText = document.getElementById("registerBtnText");
const registerBtnIcon = document.getElementById("registerBtnIcon");
const registerLoading = document.getElementById("registerLoading");
const registerMessage = document.getElementById("registerMessage");
const formMessage = document.getElementById("registerFormMessage");
const termsCheck = document.getElementById("termsCheck");

// ========================================
// PASSWORD TOGGLE
// ========================================
const toggleBtn = document.getElementById("passwordToggle");
const passwordIcon = document.getElementById("passwordIcon");

toggleBtn.addEventListener("click", function() {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    passwordIcon.className = isPassword ? "fas fa-eye-slash" : "fas fa-eye";
});

// ========================================
// VALIDATION
// ========================================
function validateName() {
    const name = nameInput.value.trim();

    if (!name) {
        nameInput.classList.add("auth-input--error");
        nameInput.classList.remove("auth-input--success");
        nameError.classList.add("auth-error--visible");
        return false;
    }

    nameInput.classList.remove("auth-input--error");
    nameInput.classList.add("auth-input--success");
    nameError.classList.remove("auth-error--visible");
    return true;
}

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

function validateConfirm() {
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    if (!confirm) {
        confirmInput.classList.remove("auth-input--error", "auth-input--success");
        confirmError.classList.remove("auth-error--visible");
        return false;
    }

    if (password !== confirm) {
        confirmInput.classList.add("auth-input--error");
        confirmInput.classList.remove("auth-input--success");
        confirmError.classList.add("auth-error--visible");
        return false;
    }

    confirmInput.classList.remove("auth-input--error");
    confirmInput.classList.add("auth-input--success");
    confirmError.classList.remove("auth-error--visible");
    return true;
}

// Real-time validation
nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("input", function() { if (this.value.length > 0) validateName(); });
emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", function() { if (this.value.length > 0) validateEmail(); });
passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("input", function() { if (this.value.length > 0) validatePassword(); });
confirmInput.addEventListener("blur", validateConfirm);
confirmInput.addEventListener("input", function() { if (this.value.length > 0) validateConfirm(); });

// ========================================
// SET LOADING STATE
// ========================================
function setLoading(isLoading) {
    registerBtn.disabled = isLoading;
    registerBtnText.textContent = isLoading ? "Creating Account..." : "Create Account";
    registerBtnIcon.className = isLoading ? "fas fa-spinner fa-spin" : "fas fa-arrow-right";
    registerLoading.style.display = isLoading ? "flex" : "none";
    registerMessage.textContent = isLoading ? "Creating account..." : "";
}

// ========================================
// SHOW MESSAGE
// ========================================
function showMessage(text, isError = false) {
    formMessage.textContent = text;
    formMessage.style.color = isError ? "#EF4444" : "#34D399";
    formMessage.style.display = "block";
    formMessage.style.marginTop = "12px";
}

// ========================================
// FORM SUBMIT
// ========================================
form.addEventListener("submit", async function(e) {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirm();

    if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmValid) {
        if (!isNameValid) nameInput.focus();
        else if (!isEmailValid) emailInput.focus();
        else if (!isPasswordValid) passwordInput.focus();
        else if (!isConfirmValid) confirmInput.focus();
        return;
    }

    // Check terms
    if (!termsCheck.checked) {
        termsCheck.focus();
        showMessage("Please agree to the Terms of Service and Privacy Policy.", true);
        return;
    }

    // Hide previous message
    formMessage.style.display = "none";

    // Show loading
    setLoading(true);

    try {
        const response = await register({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        });

        // Show success message
        showMessage(response.message || "Account created successfully! Redirecting to login...", false);

        // Reset form
        form.reset();

        // Redirect to login
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);

    } catch (error) {
        // Show error message
        const errorMsg = error.message || "Registration failed. Please try again.";
        showMessage(errorMsg, true);
        setLoading(false);
    }
});