import { get, post, put, remove } from "./apiService.js";

export const getLessons = () =>
    get("/lessons");

export const getLesson = (id) =>
    get(`/lessons/${id}`);

export const createLesson = (lesson) =>
    post("/lessons", lesson);

export const updateLesson = (id, lesson) =>
    put(`/lessons/${id}`, lesson);

export const deleteLesson = (id) =>
    remove(`/lessons/${id}`);