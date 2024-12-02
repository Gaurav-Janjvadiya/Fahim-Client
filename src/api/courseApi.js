import instance from "./";
import Cookies from "js-cookie";

export const createCourse = async ({ courseDetails }) => {
  // courseDetails = name,number,pre,type,major,credit
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post("/api/course", courseDetails, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.error(`Error creating course ${e.message}`);
  }
};

export const getAllCourses = async () => {
  try {
    const { data } = await instance.get("/api/courses");
    return data;
  } catch (e) {
    console.error(`Error getting all courses ${e.message}`);
  }
};

export const getCourseById = async ({ id }) => {
  try {
    const { data } = await instance.get(`/api/courses/${id}`);
    return data;
  } catch (e) {
    console.error(`Error getting course by id ${e.message}`);
  }
};

export const updateCourse = async ({ id, courseDetails }) => {
  // courseDetails = name,number,pre,type,major,credit
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.put(`/api/courses/${id}`, courseDetails, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.error("Error updating course", e.message);
  }
};

export const deleteCourse = async ({ id }) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.delete(`/api/courses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.error("Error deleting Course", e.message);
  }
};
