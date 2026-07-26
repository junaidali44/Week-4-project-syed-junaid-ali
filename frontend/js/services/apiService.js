const API_BASE_URL = "http://localhost:3000/api";

// Get
async function get(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Request failed");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// Post
async function post(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
throw new Error(errorData.message || "Request failed");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Put
async function put(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();

throw new Error(errorData.message || "Request failed");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// Patch

async function patch(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();

throw new Error(errorData.message || "Request failed");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete

async function remove(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorData = await response.json();

throw new Error(errorData.message || "Request failed");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { get, post, put, patch, remove };
