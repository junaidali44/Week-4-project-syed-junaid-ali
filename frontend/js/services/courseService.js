import { get, post, put, remove } from "./apiService.js";

export const getCourses = () => get("/courses");

export const getCourse = (slug) => get(`/courses/${slug}/details`);

export const createCourse = (course) => post("/courses", course);

export const updateCourse = (id, course) =>
  put(`/courses/${id}`, course);

export const deleteCourse = (id) => remove(`/courses/${id}`);