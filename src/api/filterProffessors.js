import instance from "./";

// Fetch and sort professors by title
export const fetchProfessorsByTitle = async (title ) => {
  try {
    const { data } = await instance.get(`api/filterProfessor/title/${title}`);
    return data; // Return data if request is successful
  } catch (error) {
    console.error("Error fetching professors by title:", error); // Log the full error for debugging
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      throw new Error(`Failed to fetch professors sorted by title. Server responded with status ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("Failed to fetch professors sorted by title. No response received from server.");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(`Error in fetching professors sorted by title: ${error.message}`);
    }
  }
};

// Fetch professors by department
export const fetchProfessorsByDepartment = async (departmentId) => {
  try {
    const { data } = await instance.get(`/api/filterProfessor/department/${departmentId}`);
    return data;
  } catch (error) {
    console.error("Error fetching professors by department:", error);
    if (error.response) {
      throw new Error(`Failed to fetch professors by department. Server responded with status ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Failed to fetch professors by department. No response received from server.");
    } else {
      throw new Error(`Error in fetching professors by department: ${error.message}`);
    }
  }
};

// Fetch the most rated professors
export const fetchMostRatedProfessors = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessor/most-rated");
    return data;
  } catch (error) {
    console.error("Error fetching most rated professors:", error);
    if (error.response) {
      throw new Error(`Failed to fetch most rated professors. Server responded with status ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Failed to fetch most rated professors. No response received from server.");
    } else {
      throw new Error(`Error in fetching most rated professors: ${error.message}`);
    }
  }
};

// Fetch the lowest rated professors
export const fetchLowestRatedProfessors = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessor/lowest-rated");
    return data;
  } catch (error) {
    console.error("Error fetching lowest rated professors:", error);
    if (error.response) {
      throw new Error(`Failed to fetch lowest rated professors. Server responded with status ${error.response.status}`);
    } else if (error.request) {
      throw new Error("Failed to fetch lowest rated professors. No response received from server.");
    } else {
      throw new Error(`Error in fetching lowest rated professors: ${error.message}`);
    }
  }
};
