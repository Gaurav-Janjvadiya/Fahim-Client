import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCourseById } from "../api/courseApi";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
  CourseCommentBox,
  CourseComments,
  AllReview,
  ReviewBox,
} from "../components";

function Course() {
  const { courseId } = useParams();

  const {
    data: course = {},
    isError,
    isLoading,
    errors,
  } = useQuery({
    queryKey: ["course"],
    queryFn: () => getCourseById({ id: courseId }),
    staleTime: 60 * 1000 * 5,
    cacheTime: 60 * 1000 * 5,
  });
  return (
    <>
      <div className="relative min-h-screen max-h-fit py-2 sm:px-12 px-4 flex justify-center items-center">
        {isError && (
          <Alert>
            {errors.message ? errors.message : "Something went wrong!"}
          </Alert>
        )}
        <Link
          className="absolute top-0 left-0 m-4 rounded-full p-2 sm:p-4 text-lg flex items-center justify-center hover:bg-[#1A1A1A] transition duration-200 ease-in-out"
          to="/courses"
        >
          <ArrowBackRoundedIcon fontSize="large" />
        </Link>
        <div className="bg-[#1A1A1A] max-h-fit w-full sm:w-10/12 md:w-8/12 lg:w-6/12 rounded-lg border border-[#333] p-4 flex flex-col shadow-lg">
          <div className="px-4 sm:px-6 py-8 sm:py-12 rounded-lg flex flex-col space-y-6 text-[#eee]">
            {/* Professor Info */}
            {isLoading ? (
              <CircularProgress />
            ) : (
              <div className="flex flex-col items-start space-y-1">
                <h3 className="text-[#0A74DA] text-xl sm:text-2xl font-semibold">
                  {course.name}
                </h3>
                {course.major.map((mjr) => (
                  <p key={mjr._id} className="text-gray-400 text-sm">
                    {mjr.name}
                  </p>
                ))}
              </div>
            )}
            <div>
              <CourseComments courseId={courseId} />
              <CourseCommentBox />
              <AllReview />
              <ReviewBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
