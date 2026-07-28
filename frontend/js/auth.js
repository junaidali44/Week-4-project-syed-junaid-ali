// ========================================
// EZLearn — Shared Auth Logic (Login + Register)
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // ===== Detect which page we're on =====
    const isLogin = document.getElementById('loginForm') !== null;
    const isRegister = document.getElementById('registerForm') !== null;

    // ===== Password Toggle (Shared) =====
    const toggleBtn = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');

    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', function() {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            passwordIcon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
        });
    }

    // ======================================== */
    // LOGIN LOGIC                             */
    // ======================================== */
    if (isLogin) {
        const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInputLogin = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const loginBtn = document.getElementById('loginBtn');
        const loginBtnText = document.getElementById('loginBtnText');
        const loginBtnIcon = document.getElementById('loginBtnIcon');
        const loginLoading = document.getElementById('loginLoading');
        const rememberMe = document.getElementById('rememberMe');

        // Real-time validation
        emailInput.addEventListener('blur', function() { validateLoginEmail(); });
        emailInput.addEventListener('input', function() { if (this.value.length > 0) validateLoginEmail(); });
        passwordInputLogin.addEventListener('blur', function() { validateLoginPassword(); });
        passwordInputLogin.addEventListener('input', function() { if (this.value.length > 0) validateLoginPassword(); });

        function validateLoginEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === '') {
                emailInput.classList.remove('auth-input--error', 'auth-input--success');
                emailError.classList.remove('auth-error--visible');
                return false;
            }

            if (!emailRegex.test(email)) {
                emailInput.classList.add('auth-input--error');
                emailInput.classList.remove('auth-input--success');
                emailError.classList.add('auth-error--visible');
                return false;
            }

            emailInput.classList.remove('auth-input--error');
            emailInput.classList.add('auth-input--success');
            emailError.classList.remove('auth-error--visible');
            return true;
        }

        function validateLoginPassword() {
            const password = passwordInputLogin.value;

            if (password === '') {
                passwordInputLogin.classList.remove('auth-input--error', 'auth-input--success');
                passwordError.classList.remove('auth-error--visible');
                return false;
            }

            if (password.length < 6) {
                passwordInputLogin.classList.add('auth-input--error');
                passwordInputLogin.classList.remove('auth-input--success');
                passwordError.classList.add('auth-error--visible');
                return false;
            }

            passwordInputLogin.classList.remove('auth-input--error');
            passwordInputLogin.classList.add('auth-input--success');
            passwordError.classList.remove('auth-error--visible');
            return true;
        }

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const isEmailValid = validateLoginEmail();
            const isPasswordValid = validateLoginPassword();

            if (!isEmailValid || !isPasswordValid) {
                if (!isEmailValid) emailInput.focus();
                else if (!isPasswordValid) passwordInputLogin.focus();
                return;
            }

            // Show loading state
            loginBtn.disabled = true;
            loginBtnText.textContent = 'Signing In...';
            loginBtnIcon.className = 'fas fa-spinner fa-spin';
            loginLoading.style.display = 'flex';

            // Simulate API call
            // setTimeout(function() {
            //     sessionStorage.setItem('isLoggedIn', 'true');
            //     window.location.href = 'dashboard.html';
            // }, 1500);
        });
    }

    // ======================================== */
    // REGISTER LOGIC                          */
    // ======================================== */
    if (isRegister) {
        const registerForm = document.getElementById('registerForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInputRegister = document.getElementById('password');
        const confirmInput = document.getElementById('confirmPassword');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmError = document.getElementById('confirmError');
        const registerBtn = document.getElementById('registerBtn');
        const registerBtnText = document.getElementById('registerBtnText');
        const registerBtnIcon = document.getElementById('registerBtnIcon');
        const registerLoading = document.getElementById('registerLoading');
        const termsCheck = document.getElementById('termsCheck');

        // Real-time validation
        nameInput.addEventListener('blur', function() { validateName(); });
        nameInput.addEventListener('input', function() { if (this.value.length > 0) validateName(); });
        emailInput.addEventListener('blur', function() { validateRegisterEmail(); });
        emailInput.addEventListener('input', function() { if (this.value.length > 0) validateRegisterEmail(); });
        passwordInputRegister.addEventListener('blur', function() { validateRegisterPassword(); });
        passwordInputRegister.addEventListener('input', function() { if (this.value.length > 0) validateRegisterPassword(); });
        confirmInput.addEventListener('blur', function() { validateConfirm(); });
        confirmInput.addEventListener('input', function() { if (this.value.length > 0) validateConfirm(); });

        function validateName() {
            const name = nameInput.value.trim();

            if (name === '') {
                nameInput.classList.add('auth-input--error');
                nameInput.classList.remove('auth-input--success');
                nameError.classList.add('auth-error--visible');
                return false;
            }

            nameInput.classList.remove('auth-input--error');
            nameInput.classList.add('auth-input--success');
            nameError.classList.remove('auth-error--visible');
            return true;
        }

        function validateRegisterEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === '') {
                emailInput.classList.remove('auth-input--error', 'auth-input--success');
                emailError.classList.remove('auth-error--visible');
                return false;
            }

            if (!emailRegex.test(email)) {
                emailInput.classList.add('auth-input--error');
                emailInput.classList.remove('auth-input--success');
                emailError.classList.add('auth-error--visible');
                return false;
            }

            emailInput.classList.remove('auth-input--error');
            emailInput.classList.add('auth-input--success');
            emailError.classList.remove('auth-error--visible');
            return true;
        }

        function validateRegisterPassword() {
            const password = passwordInputRegister.value;

            if (password === '') {
                passwordInputRegister.classList.remove('auth-input--error', 'auth-input--success');
                passwordError.classList.remove('auth-error--visible');
                return false;
            }

            if (password.length < 6) {
                passwordInputRegister.classList.add('auth-input--error');
                passwordInputRegister.classList.remove('auth-input--success');
                passwordError.classList.add('auth-error--visible');
                return false;
            }

            passwordInputRegister.classList.remove('auth-input--error');
            passwordInputRegister.classList.add('auth-input--success');
            passwordError.classList.remove('auth-error--visible');
            return true;
        }

        function validateConfirm() {
            const password = passwordInputRegister.value;
            const confirm = confirmInput.value;

            if (confirm === '') {
                confirmInput.classList.remove('auth-input--error', 'auth-input--success');
                confirmError.classList.remove('auth-error--visible');
                return false;
            }

            if (password !== confirm) {
                confirmInput.classList.add('auth-input--error');
                confirmInput.classList.remove('auth-input--success');
                confirmError.classList.add('auth-error--visible');
                return false;
            }

            confirmInput.classList.remove('auth-input--error');
            confirmInput.classList.add('auth-input--success');
            confirmError.classList.remove('auth-error--visible');
            return true;
        }

        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const isNameValid = validateName();
            const isEmailValid = validateRegisterEmail();
            const isPasswordValid = validateRegisterPassword();
            const isConfirmValid = validateConfirm();

            if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmValid) {
                if (!isNameValid) nameInput.focus();
                else if (!isEmailValid) emailInput.focus();
                else if (!isPasswordValid) passwordInputRegister.focus();
                else if (!isConfirmValid) confirmInput.focus();
                return;
            }

            if (!termsCheck.checked) {
                termsCheck.focus();
                alert('Please agree to the Terms of Service and Privacy Policy.');
                return;
            }

            // Show loading state
            registerBtn.disabled = true;
            registerBtnText.textContent = 'Creating Account...';
            registerBtnIcon.className = 'fas fa-spinner fa-spin';
            registerLoading.style.display = 'flex';

            // Simulate API call
            // setTimeout(function() {
            //     sessionStorage.setItem('isLoggedIn', 'true');
            //     window.location.href = 'dashboard.html';
            // }, 1500);
        });
    }

    console.log('🔐 Auth initialized');
});