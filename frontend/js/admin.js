import {
    isLoggedIn,
    logout
} from "./utils/auth.js";

import {
    profile
} from "./services/authService.js";

if (!isLoggedIn()) {
    window.location.href = "login.html";
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
}

try {

    const response = await profile();

    document.getElementById("adminName").textContent =
        response.data.name;

    document.getElementById("adminEmail").textContent =
        response.data.email;

    document.getElementById("adminRole").textContent =
        response.data.role;

} catch (err) {
   console.log(err);
   
}