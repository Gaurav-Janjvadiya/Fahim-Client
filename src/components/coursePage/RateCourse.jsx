import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateCourseReview } from "../../api/courseReviewApi";
import {
  Rating,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MUIButton,
} from "@mui/material";
import { Button } from "../";
import getUserIdFromToken from "../../utils/getUserIdFromToken";

const RateCourse = ({ courseReviewId, avgRatings }) => {
  const queryClient = useQueryClient();
  const [rating, setRating] = useState({
    teachingQuality: 0,
    courseMaterial: 0,
    classParticipation: 0,
    examsHomework: 0,
    overallSatisfaction: 0,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const userId = getUserIdFromToken();
  const { mutate, isLoading } = useMutation({
    mutationFn: rateCourseReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      setSnackbarMessage("Course rated successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setOpenDialog(false);
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

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const ratingCategories = [
    { label: "Teaching Quality", name: "teachingQuality" },
    { label: "Flexibility", name: "flexibility" },
    { label: "Exams Homework", name: "examsHomework" },
    { label: "Class Enjoyment", name: "classEnjoyment" },
    { label: "Recommendation", name: "recommendation" },
  ];
  const combinedRatings = ratingCategories.map((category, index) => ({
    label: category.label,
    name: category.name,
    rating: avgRatings[index] || 0, // Ensure avgRatings[index] is never undefined
  }));

  return (
    <div className="w-full space-y-4">
      <h4 className="font-bold mb-2 text-white">Rate & Review</h4>
      <div className="space-y-2">
        {combinedRatings.map(({ label, name, rating }) => (
          <div
            key={name}
            className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1"
          >
            <p className="text-gray-300">{label}</p>
            <Rating
              name="read-only"
              size="large"
              value={rating} // Always use a defined value
              readOnly
              sx={{
                "& .MuiRating-iconEmpty": { color: "#555" },
                "& .MuiRating-iconFilled": { color: "#ffc107" },
                "& .MuiRating-iconHover": { color: "#ffa000" },
              }}
            />
          </div>
        ))}
      </div>

      <Button style="rounded-xl" onClick={handleOpenDialog}>
        Rate Course
      </Button>

      {/* Dialog for Rating */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "#1c1c1c",
            color: "white",
          },
        }}
      >
        <DialogTitle style={{ color: "white" }}>Rate This Course</DialogTitle>
        <DialogContent>
          <div className="space-y-2">
            {ratingCategories.map(({ label, name }) => (
              <div
                key={name}
                className="grid grid-cols-1 sm:grid-cols-2 w-fit sm:space-y-0 space-y-1"
              >
                <p className="text-gray-300">{label}</p>
                <Rating
                  name={name}
                  size="large"
                  value={rating[name] || 0} // Ensure rating[name] is never undefined
                  onChange={handleRateChange}
                  sx={{
                    "& .MuiRating-iconEmpty": { color: "#555" },
                    "& .MuiRating-iconFilled": { color: "#ffc107" },
                    "& .MuiRating-iconHover": { color: "#ffa000" },
                  }}
                />
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <MUIButton
            onClick={handleCloseDialog}
            color="secondary"
            style={{ color: "#ffffffb3" }}
          >
            Cancel
          </MUIButton>
          <MUIButton
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: "#39FF14",
              color: "black",
              textShadow: "2px 2px 5px gray",
              "&.Mui-disabled": {
                backgroundColor: "#9E9E9E", // Gray color for disabled state
                color: "#1A1A1A", // Light gray text color for disabled state
              },
            }}
            disabled={isLoading}
          >
            Submit
          </MUIButton>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            backgroundColor:
              snackbarSeverity === "success" ? "#2e7d32" : "#d32f2f",
            color: "white",
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RateCourse;
