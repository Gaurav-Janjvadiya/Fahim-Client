import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCourseReviews } from "../api/courseReviewApi";
import { CourseList } from "../components";
import { CircularProgress, Alert } from "@mui/material";
function Courses() {
  const {
    data: courseReviews,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourseReviews,
  });

  return (
    <div className="sm:px-12 sm:py-32 py-16 px-4 min-h-screen">
      {isError && <Alert>{error}</Alert>}
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        <CourseList courseReviews={courseReviews} />
      )}
    </div>
  );
}

export default Courses;
