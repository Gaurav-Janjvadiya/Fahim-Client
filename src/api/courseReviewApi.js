import instance from ".";
import Cookies from "js-cookie";

export const createCourseReview = async ({ course, professor }) => {
  try {
    const token = Cookies.get("jwt");
    const { data } = await instance.post(
      "/api/courseReview",
      { course, professor },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (e) {
    console.error("Error creating CourseReveiw", e.message);
  }
};

export const getAllCourseReviews = async () => {
  try {
    const { data } = await instance.get("/api/courseReview");
    return data;
  } catch (e) {
    console.error("Error getting all courseReviews CourseReveiw", e.message);
  }
};

export const getCourseReviewById = async ({ id }) => {
  try {
    const { data } = await instance.get(`/api/courseReview/${id}`);
    return data;
  } catch (e) {
    console.error("Error getting courseReview by id ", e.message);
  }
};

export const updateCourseReview = async ({
  id,
  course,
  professor,
  ratings,
}) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.put(
      `/api/courseReview/${id}`,
      {
        course,
        professor,
        ratings,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (e) {
    console.error(`Error updating course review ${e.message}`);
  }
};

export const deleteCourseReview = async ({ id }) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.delete(`/api/courseReview/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.error(`Error deleting course review ${e.message}`);
  }
};

export const rateCourseReview = async ({ courseReviewId, rating }) => {
  try {
    const token = Cookies.get("jwt");
    const { data } = await instance.post(
      `/api/courseReview/${courseReviewId}`,
      { rating },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (e) {
    console.error(`Error rating course review ${e.message} `);
  }
};
