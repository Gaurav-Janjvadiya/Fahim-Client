import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCourseReviews } from "../api/courseReviewApi";
import {
  fetchTopCourseReviews,
  fetchLowestRatedCourseReviews,
  fetchCourseReviewsByCourseId,
  fetchCourseReviewsByProfessorId,
} from "../api/filterCourseReview";
import { CourseList } from "../components";
import { CircularProgress } from "@mui/material";
import SortBy from "../components/coursesPage/SortBy";
import SearchBar from "../components/coursesPage/SearchBar";
import FilterBy from "../components/coursesPage/FilterBy";

function Courses() {
  const [sortOption, setSortOption] = useState("");
  const [filterByCourse, setFilterByCourse] = useState({ course: "" });
  const [filterByProfessor, setFilterByProfessor] = useState({ professor: "" });
  const { data: courseReviews = [], isLoading } = useQuery({
    queryKey: [
      "courseReviews",
      sortOption,
      filterByCourse.course,
      filterByProfessor.professor,
    ],
    queryFn: () => {
      if (filterByCourse.course != "")
        return fetchCourseReviewsByCourseId({
          courseId: filterByCourse.course,
        });
      if (filterByProfessor.professor != "")
        return fetchCourseReviewsByProfessorId({
          professorId: filterByProfessor.professor,
        });
      if (sortOption === "topCourses") return fetchTopCourseReviews();
      if (sortOption === "lowestRated") return fetchLowestRatedCourseReviews();
      return getAllCourseReviews();
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
  {
    courseReviews.length > 0 && console.log(courseReviews[0]);
  }
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:p-8 p-4 sm:grid-cols-3 md:grid-cols-3 gap-4">
        <SearchBar />
        <SortBy sortOption={sortOption} setSortOption={setSortOption} />
        <FilterBy
          courseReviews={courseReviews}
          filterByCourse={filterByCourse}
          setFilterByCourse={setFilterByCourse}
          filterByProfessor={filterByProfessor}
          setFilterByProfessor={setFilterByProfessor}
        />
      </div>
      <div className="sm:p-8 p-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-96">
            <CircularProgress />
          </div>
        ) : courseReviews.length === 0 ? (
          <p className="text-center text-gray-500">
            No courses available to display.
          </p>
        ) : (
          <CourseList courseReviews={courseReviews} />
        )}
      </div>
    </div>
  );
}

export default Courses;
