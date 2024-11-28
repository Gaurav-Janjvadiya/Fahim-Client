import instance from ".";
import Cookies from "js-cookie";

export const createProfessor = async (professorData) => {
  try {
    const { data } = await instance.post("/api/professors", professorData);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProfessors = async () => {
  try {
    const { data } = await instance.get("/api/professors");
    return data;
  } catch (e) {
    console.error("Error fetching professors:", e);
    throw new Error("Error fetching professors"); // Throw an error to allow React Query to handle it
  }
};

export const getProfessorById = async (professorId) => {
  try {
    const { data } = await instance.get(`/api/professors/${professorId}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateProfessor = async (professorId, professorData) => {
  try {
    const { data } = await instance.put(
      `/api/professors/${professorId}`,
      professorData
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteProfessor = async (professorId) => {
  try {
    const { data } = await instance.delete(`/api/professors/${professorId}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const rateProfessor = async (professorId, ratings) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post(
      `/api/professors/${professorId}/rate`,
      ratings,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
