import { register } from "./services/authService.js";

const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    message.textContent = "";

    try {

        const response = await register({
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            password: form.password.value.trim()
        });

        message.style.color = "green";
        message.textContent = response.message;

        form.reset();

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);

    } catch (err) {

        message.style.color = "red";
        message.textContent = err.message;

    }

});