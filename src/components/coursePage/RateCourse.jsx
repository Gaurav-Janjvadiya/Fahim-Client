import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateCourseReview } from "../../api/courseReviewApi";
import {
  Rating,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { Button } from "../";

const RateCourse = ({ courseReviewId }) => {
  const queryClient = useQueryClient();
  const [rating, setRating] = useState({
    teachingQuality: 0,
    courseMaterial: 0,
    classParticipation: 0,
    examsHomework: 0,
    overallSatisfaction: 0,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const { mutate, isLoading, isSuccess, isError, error } = useMutation({
    mutationFn: rateCourseReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      setSnackbarMessage("Course rated successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    },
    onError: (error) => {
      console.error("Failed to rate course:", error.message);
      setSnackbarMessage("Failed to rate course. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    },
  });

  const handleRateChange = (event, newValue) => {
    setRating((prev) => ({ ...prev, [event.target.name]: newValue }));
  };

  const handleSubmit = () => {
    mutate({ courseReviewId, rating });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="w-full space-y-3">
      <h4 className="font-bold mb-2">Rate & Review</h4>
      <div className="space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
          <p className="">Teaching Quality</p>
          <Rating
            name="teachingQuality"
            size="large"
            value={rating.teachingQuality}
            onChange={handleRateChange}
            sx={{
              "& .MuiRating-iconEmpty": { color: "#555" },
              "& .MuiRating-iconFilled": { color: "gold" },
              "& .MuiRating-iconHover": { color: "orange" },
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
          <p className="">Course Material</p>
          <Rating
            name="courseMaterial"
            size="large"
            value={rating.courseMaterial}
            onChange={handleRateChange}
            sx={{
              "& .MuiRating-iconEmpty": { color: "#555" },
              "& .MuiRating-iconFilled": { color: "gold" },
              "& .MuiRating-iconHover": { color: "orange" },
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
          <p className="">Class Participation</p>
          <Rating
            name="classParticipation"
            size="large"
            value={rating.classParticipation}
            onChange={handleRateChange}
            sx={{
              "& .MuiRating-iconEmpty": { color: "#555" },
              "& .MuiRating-iconFilled": { color: "gold" },
              "& .MuiRating-iconHover": { color: "orange" },
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
          <p className="">Exams & Homework</p>
          <Rating
            name="examsHomework"
            size="large"
            value={rating.examsHomework}
            onChange={handleRateChange}
            sx={{
              "& .MuiRating-iconEmpty": { color: "#555" },
              "& .MuiRating-iconFilled": { color: "gold" },
              "& .MuiRating-iconHover": { color: "orange" },
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
          <p className="">Overall Satisfaction</p>
          <Rating
            name="overallSatisfaction"
            size="large"
            value={rating.overallSatisfaction}
            onChange={handleRateChange}
            sx={{
              "& .MuiRating-iconEmpty": { color: "#555" },
              "& .MuiRating-iconFilled": { color: "gold" },
              "& .MuiRating-iconHover": { color: "orange" },
            }}
          />
        </div>
      </div>

      <Button
        className="mt-3 bg-[#39FF14] py-2 px-4 rounded-md font-medium hover:bg-[#0bda0a] transition duration-200 ease-in-out"
        style={{ textShadow: "2px 2px 5px gray" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RateCourse;
