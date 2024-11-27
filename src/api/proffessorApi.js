import instance from "./";
import Cookies from "js-cookie";

export const createProffessor = async (proffessorData) => {
  try {
    const { data } = await instance.post("/api/proffessors", proffessorData);
    const { proffesors } = data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProffessors = async () => {
  try {
    const { data } = await instance.get("/api/proffessors");
    const { proffesors } = data;
  } catch (e) {
    console.log(e);
  }
};

export const getProffessorById = async (proffessorId) => {
  try {
    const { data } = await instance.get(`/api/proffessors/${proffessorId}`);
    const { proffesors } = data;
  } catch (e) {
    console.log(e);
  }
};

export const updateProffessor = async (proffessorId, proffessorData) => {
  try {
    const { data } = await instance.put(
      `/api/proffessors/${proffessorId}`,
      proffessorData
    );
    const { proffesors } = data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteProffessor = async (proffesors) => {
  try {
    const { data } = await instance.delete(`/api/proffessors/${proffessorId}`);
  } catch (e) {
    console.log(e);
  }
};

export const rateProffessor = async (proffessorId, ratings) => {
  const token = Cookies.get("jwt");
  try {
    const { data } = await instance.post(
      `/api/proffessors/${proffessorId}/rate`,
      ratings,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (e) {
    console.log(e);
  }
};
