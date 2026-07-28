import { get, post, put, remove } from "./apiService.js";

export const getTopics = () =>
    get("/topics");

export const getTopic = (id) =>
    get(`/topics/${id}`);

export const createTopic = (topic) =>
    post("/topics", topic);

export const updateTopic = (id, topic) =>
    put(`/topics/${id}`, topic);

export const deleteTopic = (id) =>
    remove(`/topics/${id}`);