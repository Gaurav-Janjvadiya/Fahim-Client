import instance from "./";
import Cookies from "js-cookie";

// Create a comment for a professor
export const createProfessorComment = async ({ id: professorId, comment }) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post(
      `/api/comments/professor/${professorId}`,
      { content: comment }, // Request body with comment content
      {
        headers: {
          Authorization: `Bearer ${token}`, // Authentication token
        },
      }
    );
    return data;
  } catch (error) {
    console.error(
      "Error creating professor comment:",
      error.response?.data || error
    );
    throw error;
  }
};

// Get comments for a specific professor
export const getProfessorComments = async ({ id: professorId }) => {
  try {
    const { data } = await instance.get(
      `/api/comments/professor/${professorId}`
    );
    return data;
  } catch (error) {
    console.error(
      "Error geting professor comments:",
      error.response?.data || error
    );
    throw error;
  }
};

// Delete a specific comment by its ID
export const deleteProfessorComment = async (commentId) => {
  try {
    const { data } = await instance.delete(`/api/comments/${commentId}`);
    return data;
  } catch (error) {
    console.error(
      "Error deleting professor comment:",
      error.response?.data || error
    );
    throw error;
  }
};

// Reply to a professor's comment
export const replyToProfessorComment = async ({ commentId, reply }) => {
  try {
    const { data } = await instance.post(`/api/comments/${commentId}`, {
      content: reply,
    });
    return data;
  } catch (error) {
    console.error(
      "Error replying professor comment:",
      error.response?.data || error
    );
    throw error;
  }
};
