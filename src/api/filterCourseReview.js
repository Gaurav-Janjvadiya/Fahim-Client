import instance from "./";

const handleError = (error, context) =>
  console.error(`Error ${context}:`, error);

export const fetchCourseReviewsByCourseId = async () => {
  try {
    const { data } = await instance.get(
      "/api/filterCourseReview/course/:courseId"
    );
    return data;
  } catch (e) {
    handleError(e, "fetching course reviews by courseID");
  }
};

export const fetchCourseReviewsByProfessorId = async ({ professorId }) => {
  try {
    const { data } = await instance.get(
      `api/filterCourseReview/professor/${professorId}`
    );
    return data;
  } catch (e) {
    handleError(e, "fetching course reviews by professorID");
  }
};

export const fetchTopCourseReviews = async () => {
  try {
    const { data } = await instance.get("/api/filterCourseReview/top-rated");
    return data;
  } catch (e) {
    handleError(e, "fetching top course reviews");
  }
};

export const fetchLowestRatedCourseReviews = async () => {
  try {
    const { data } = await instance.get("/api/filterCourseReview/lowest-rated");
    return data;
  } catch (e) {
    handleError(e, "fetching lowest rated course reviews");
  }
};
