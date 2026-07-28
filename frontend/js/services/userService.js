import { get, patch, remove } from "./apiService.js";

export const getUsers = () =>
    get("/users");

export const getUser = (id) =>
    get(`/users/${id}`);

export const updateUserRole = (id, role) =>
    patch(`/users/${id}/role`, { role });

export const deleteUser = (id) =>
    remove(`/users/${id}`);