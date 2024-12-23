import instance from "./";
import Cookies from "js-cookie";

export const createCourseComment = async ({ id, comment }) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post(
      `/api/comments/course/${id}`,
      { content: comment },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    console.error("Error creating comment:", error.message);
    // Check if the error response contains a message
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};

export const getCourseComments = async ({ id }) => {
  try {
    const { data } = await instance.get(`/api/comments/course/${id}`);
    return data;
  } catch (error) {
    console.error("Error getting comments:", error.message);
    // Check if the error response contains a message
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};

export const deleteCourseComment = async (commentId) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.delete(`/api/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.error("Error deleting comment:", error.message);
    // Check if the error response contains a message
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};

export const replyToCourseComment = async ({ commentId, reply }) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post(
      `/api/comments/${commentId}`,
      { content: reply },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    console.error("Error replying to comment:", error.message);
    // Check if the error response contains a message
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};
