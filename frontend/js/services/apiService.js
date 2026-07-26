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

    const response = await fetch(API_URL + endpoint, {
        headers: getHeaders(),
        ...options
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;

}

export const get = (url) =>
    request(url);

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