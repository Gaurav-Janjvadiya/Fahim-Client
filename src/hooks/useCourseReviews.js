import { useMemo } from 'react';
import {
  fetchTopCourseReviews,
  fetchLowestRatedCourseReviews,
  fetchCourseReviewsByCourseId,
  fetchCourseReviewsByProfessorId,
} from '../api/filterCourseReview';
import { getAllCourseReviews } from '../api/courseReviewApi';
import { useQuery } from '@tanstack/react-query';

const useCourseReviews = (sortOption, filterByCourse, filterByProfessor) => {
  const queryKey = useMemo(
    () => [
      'courseReviews',
      sortOption,
      filterByCourse.course,
      filterByProfessor.professor,
    ],
    [sortOption, filterByCourse.course, filterByProfessor.professor],
  );

  const { data: courseReviews = [], isLoading } = useQuery({
    queryKey,
    queryFn: () => {
      if (filterByCourse.course !== '')
        return fetchCourseReviewsByCourseId({
          courseId: filterByCourse.course,
        });
      if (filterByProfessor.professor !== '')
        return fetchCourseReviewsByProfessorId({
          professorId: filterByProfessor.professor,
        });
      if (sortOption === 'topCourses') return fetchTopCourseReviews();
      if (sortOption === 'lowestRated') return fetchLowestRatedCourseReviews();
      return getAllCourseReviews();
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  return { isLoading, courseReviews };
};

export default useCourseReviews;
