import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../api/courseApi";
import { CourseList } from "../components";
import { CircularProgress, Alert } from "@mui/material";
function Courses() {
  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  // console.log(courses);
  return (
    <div className="sm:px-12 sm:py-32 py-16 px-4 min-h-screen">
      {isError && <Alert>{error}</Alert>}
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress />
        </div>
      ) : (
        <CourseList courses={courses} />
      )}
    </div>
  );
}

export default Courses;
