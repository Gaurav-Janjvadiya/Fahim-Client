import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateCourseReview } from "../../api/courseReviewApi";
import { Rating, Typography, CircularProgress } from "@mui/material";

const RateCourse = ({ courseReviewId }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation({
    mutationFn: rateCourseReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      console.log("Course rated successfully!");
    },
    onError: (error) => {
      console.error("Failed to rate course:", error.message);
    },
  });

  const handleRateChange = (event, value) => {
    if (value) {
      mutate({ courseReviewId, rating: value });
    }
  };

  return (
    <div className="w-full">
      <h4 className="font-medium mb-2">Rate</h4>
      <div className="flex items-center">
        <Rating
          name="course-rating"
          size="large"
          defaultValue={0}
          onChange={handleRateChange}
          sx={{
            "& .MuiRating-iconEmpty": { color: "#555" },
            "& .MuiRating-iconFilled": { color: "gold" },
            "& .MuiRating-iconHover": { color: "orange" },
          }}
        />
      </div>
      {isLoading && (
        <div className="flex items-center mt-2">
          <CircularProgress size={24} />
          <Typography variant="body2" className="ml-2">
            Submitting your rating...
          </Typography>
        </div>
      )}
      {isSuccess && (
        <Typography variant="body2" color="success.main" className="mt-2">
          Thank you for your rating!
        </Typography>
      )}
      {isError && (
        <Typography variant="body2" color="error.main" className="mt-2">
          Error: {error?.message || "Something went wrong."}
        </Typography>
      )}
    </div>
  );
};

export default RateCourse;
