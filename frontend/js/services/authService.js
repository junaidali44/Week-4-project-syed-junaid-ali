import { get, post } from "./apiService.js";

export const register = (user) =>
    post("/auth/register", user);

export const login = (user) =>
    post("/auth/login", user);

export const profile = () =>
    get("/auth/profile");