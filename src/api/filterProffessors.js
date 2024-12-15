import instance from "./";

export const fetchProfessorsByTitle = async (title) => {
  try {
    const { data } = await instance.get(`api/filterProfessor/title/${title}`);
    return data; 
  } catch (error) {
    console.error("Error fetching professors by title:", error);
    if (error.response) {
      throw new Error(
        `Failed to fetch professors sorted by title. Server responded with status ${error.response.status}`
      );
    } else if (error.request) {
      throw new Error(
        "Failed to fetch professors sorted by title. No response received from server."
      ); 
    } else {
      throw new Error(
        `Error in fetching professors sorted by title: ${error.message}`
      );
    }
  }
};

export const fetchProfessorsByDepartment = async (departmentId) => {
  try {
    const { data } = await instance.get(
      `/api/filterProfessor/department/${departmentId}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching professors by department:", error);
    if (error.response) {
      throw new Error(
        `Failed to fetch professors by department. Server responded with status ${error.response.status}`
      );
    } else if (error.request) {
      throw new Error(
        "Failed to fetch professors by department. No response received from server."
      );
    } else {
      throw new Error(
        `Error in fetching professors by department: ${error.message}`
      );
    }
  }
};

export const fetchMostRatedProfessors = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessor/most-rated");
    return data;
  } catch (error) {
    console.error("Error fetching most rated professors:", error);
    if (error.response) {
      throw new Error(
        `Failed to fetch most rated professors. Server responded with status ${error.response.status}`
      );
    } else if (error.request) {
      throw new Error(
        "Failed to fetch most rated professors. No response received from server."
      );
    } else {
      throw new Error(
        `Error in fetching most rated professors: ${error.message}`
      );
    }
  }
};

export const fetchLowestRatedProfessors = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessor/lowest-rated");
    return data;
  } catch (error) {
    console.error("Error fetching lowest rated professors:", error);
    if (error.response) {
      throw new Error(
        `Failed to fetch lowest rated professors. Server responded with status ${error.response.status}`
      );
    } else if (error.request) {
      throw new Error(
        "Failed to fetch lowest rated professors. No response received from server."
      );
    } else {
      throw new Error(
        `Error in fetching lowest rated professors: ${error.message}`
      );
    }
  }
};
