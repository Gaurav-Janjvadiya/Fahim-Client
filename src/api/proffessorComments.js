import instance from "./";
import Cookies from "js-cookie";

// Create a comment for a professor
export const createProfessorComment = async (professorId, comment) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post(
      `/api/comments/professor/${professorId}`,
      comment,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get comments for a specific professor
export const getProfessorComments = async (professorId) => {
  try {
    const { data } = await instance.get(
      `/api/comments/professor/${professorId}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Delete a specific comment by its ID
export const deleteProfessorComment = async (commentId) => {
  try {
    const { data } = await instance.delete(`/api/comments/${commentId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Reply to a professor's comment
export const replyToProfessorComment = async (commentId, reply) => {
  try {
    const { data } = await instance.post(`/api/comments/${commentId}`, reply);
    return data;
  } catch (error) {
    console.error(error);
  }
};
