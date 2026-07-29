import { get } from "./apiService.js";

export const getDashboardStats = () =>
    get("/dashboard");

export const getRecentActivity = () =>
    get("/dashboard/recent");