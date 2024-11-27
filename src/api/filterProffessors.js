import instance from "./";

// Fetch and sort professors by title
export const fetchProfessorsSortedByTitle = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessors/title");
    return data; // Return data if needed
  } catch (error) {
    console.error(error); // Use `console.error` for logging errors
  }
};

// Fetch professors by department
export const fetchProfessorsByDepartment = async (departmentId) => {
  try {
    const { data } = await instance.get(
      `/api/filterProfessors/department/${departmentId}`
    );
    return data; // Return data if needed
  } catch (error) {
    console.error(error);
  }
};

// Fetch the most rated professors
export const fetchMostRatedProfessors = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessors/most-rated");
    return data; // Return data if needed
  } catch (error) {
    console.error(error);
  }
};

// Fetch the lowest rated professors
export const fetchLowestRatedProfessors = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessors/lowest-rated");
    return data; // Return data if needed
  } catch (error) {
    console.error(error);
  }
};
