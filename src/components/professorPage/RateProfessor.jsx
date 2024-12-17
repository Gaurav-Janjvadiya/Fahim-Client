import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateProfessor } from "../../api/professorApi";
import getUserIdFromToken from "../../utils/getUserIdFromToken";

import { Rating, Snackbar, Alert } from "@mui/material";

const RateProfessor = ({ professorId, ratings }) => {
  const queryClient = useQueryClient();
  const [rating, setRating] = useState({
    teachingQuality: 0,
    flexibility: 0,
    examsHomework: 0,
    classEnjoyment: 0,
    recommendation: 0,
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const hasRated =
    Array.isArray(ratings) &&
    ratings.some((rating) => rating.user === getUserIdFromToken());
  const { mutate, isLoading, isSuccess, isError, error } = useMutation({
    mutationFn: rateProfessor,
    onSuccess: () => {
      queryClient.invalidateQueries(["professors"]);
      setSnackbarMessage("Professor rated successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    },
    onError: (error) => {
      console.error("Failed to rate professor:", error.message);
      setSnackbarMessage("Failed to rate professor. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    },
  });

  const handleRateChange = (event) => {
    setRating((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = () => {
    mutate({ professorId, rating });
    setRating({
      teachingQuality: 0,
      flexibility: 0,
      examsHomework: 0,
      classEnjoyment: 0,
      recommendation: 0,
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="w-full space-y-3">
      <h4 className="font-bold mb-2">Rate & Review</h4>
      {hasRated ? (
        <p className="text-gray-400 text-sm">
          You have already rated this professor.
        </p>
      ) : (
        <>
          <div className="space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
              <p className="">Teaching Quality</p>
              <Rating
                name="teachingQuality"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
              <p className="">Flexibility</p>
              <Rating
                name="flexibility"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
              <p className="">Exams Homework</p>
              <Rating
                name="examsHomework"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
              <p className="">Class Enjoyment</p>
              <Rating
                name="classEnjoyment"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1">
              <p className="">Recommendation</p>
              <Rating
                name="recommendation"
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
          </div>
          <button
            className="mt-3 bg-[#39FF14] py-2 px-4 rounded-md font-medium hover:bg-[#0bda0a] transition duration-200 ease-in-out"
            style={{ textShadow: "2px 2px 5px gray" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      )}

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

export default RateProfessor;
