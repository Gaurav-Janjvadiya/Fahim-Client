import instance from './';

export const fetchCourseReviewsByCourseId = async ({ courseId }) => {
  try {
    const { data } = await instance.get(
      `/api/filterCourseReview/course/${courseId}`,
    );
    return data;
  } catch (error) {
    console.error(
      'Error fetching course reviews by courseID:',
      error.response?.data?.error,
    );
    throw error;
  }
};

export const fetchCourseReviewsByProfessorId = async ({ professorId }) => {
  try {
    const { data } = await instance.get(
      `api/filterCourseReview/professor/${professorId}`,
    );
    return data;
  } catch (error) {
    console.error('Error fetching course reviews by professorID:', error);
    throw error;
  }
};

export const fetchTopCourseReviews = async () => {
  try {
    const { data } = await instance.get('/api/filterCourseReview/most-rated');
    return data;
  } catch (error) {
    console.error('Error fetching top course reviews:', error);
    throw error;
  }
};

export const fetchLowestRatedCourseReviews = async () => {
  try {
    const { data } = await instance.get('/api/filterCourseReview/lowest-rated');
    return data;
  } catch (error) {
    console.error('Error fetching lowest rated course reviews:', error);
    throw error;
  }
};
