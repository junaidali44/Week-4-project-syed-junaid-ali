import { showError } from "../components/ui.mjs";

const API_URL = "http://localhost:3000/api";

function getHeaders() {
    const token = sessionStorage.getItem("token");

    const headers = {
        "Content-Type": "application/json"
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
}

async function request(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers: {
                ...getHeaders(),
                ...(options.headers || {})
            }
        });

        const contentType = response.headers.get("content-type") || "";

        const data = contentType.includes("application/json")
            ? await response.json()
            : null;

        if (!response.ok) {
            const message =
                data?.message ||
                `Request failed with status ${response.status}`;

            throw new Error(message);
        }

        return data;
    } catch (error) {
        console.error(`API request failed: ${endpoint}`, error);

        if (typeof showError === "function") {
            showError(error.message);
        }

        throw error;
    }
}

export const get = (url) => request(url);

export const post = (url, body) =>
    request(url, {
        method: "POST",
        body: JSON.stringify(body)
    });

export const put = (url, body) =>
    request(url, {
        method: "PUT",
        body: JSON.stringify(body)
    });

export const patch = (url, body) =>
    request(url, {
        method: "PATCH",
        body: JSON.stringify(body)
    });

export const remove = (url) =>
    request(url, {
        method: "DELETE"
    });