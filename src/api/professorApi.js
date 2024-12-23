import instance from ".";
import Cookies from "js-cookie";

export const createProfessor = async (professorData) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post("/api/professors", professorData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.error("Error creating professor:", e.response?.data || e);
    throw e;
  }
};

export const getAllProfessors = async () => {
  try {
    const { data } = await instance.get("/api/professors");
    return data;
  } catch (e) {
    console.error("Error fetching professors:", e.response?.data || e);
    throw new Error("Error fetching professors"); // Throw an error for React Query or other handling
  }
};

export const getProfessorById = async (professorId) => {
  try {
    const { data } = await instance.get(`/api/professors/${professorId}`);
    return data;
  } catch (e) {
    console.error("Error fetching professor by ID:", e.response?.data || e);
    throw e;
  }
};

export const updateProfessor = async (professorId, professorData) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.put(
      `/api/professors/${professorId}`,
      professorData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (e) {
    console.error("Error updating professor:", e.response?.data || e);
    throw e;
  }
};

export const deleteProfessor = async (professorId) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.delete(`/api/professors/${professorId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (e) {
    console.error("Error deleting professor:", e.response?.data || e);
    throw e;
  }
};

export const rateProfessor = async ({ id: professorId, rating }) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post(
      `/api/professors/${professorId}/rate`,
      rating,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    console.error("Error rating professor:", error.response?.data || error);
    throw error;
  }
};
