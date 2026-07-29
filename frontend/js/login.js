import { login } from "./services/authService.js";
import {
    saveAuth,
    isLoggedIn,
    getUser
} from "./utils/auth.js";

if (isLoggedIn()) {

    const user = getUser();

    if (user.role === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "index.html";
    }

}

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    message.textContent = "";

    try {

        const response = await login({
            email: form.email.value.trim(),
            password: form.password.value.trim()
        });

        saveAuth(response.token, response.user);

        message.style.color = "green";
        message.textContent = response.message;

        setTimeout(() => {

            if (response.user.role === "admin") {
                window.location.href = "admin/index.html";
            } else {
                window.location.href = "index.html";
            }

        }, 800);

    } catch (err) {

        message.style.color = "red";
        message.textContent = err.message;

    }

});