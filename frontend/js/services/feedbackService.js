import { get, post, remove } from "./apiService.js";

export const getFeedbacks = () =>
    get("/feedbacks");

export const getFeedback = (id) =>
    get(`/feedbacks/${id}`);

export const createFeedback = (feedback) =>
    post("/feedbacks", feedback);

export const deleteFeedback = (id) =>
    remove(`/feedbacks/${id}`);