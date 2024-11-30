import instance from "./";

// Fetch and sort professors by title
export const fetchProfessorsSortedByTitle = async ({ title }) => {
  try {
    const { data } = await instance.get(`api/filterProfessor/title/${title}`);
    return data; // Return data if request is successful
    console.log(data);
  } catch (error) {
    throw new Error("Failed to fetch professors sorted by title."); // Throw an explicit error
  }
};

// Fetch professors by department
export const fetchProfessorsByDepartment = async (departmentId) => {
  try {
    const { data } = await instance.get(
      `/api/filterProfessor/department/${departmentId}`
    );
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch professors by department.");
  }
};

// Fetch the most rated professors
export const fetchMostRatedProfessors = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessor/most-rated");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch the most rated professors.");
  }
};

// Fetch the lowest rated professors
export const fetchLowestRatedProfessors = async () => {
  try {
    const { data } = await instance.get("/api/filterProfessor/lowest-rated");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch the lowest rated professors.");
  }
};
