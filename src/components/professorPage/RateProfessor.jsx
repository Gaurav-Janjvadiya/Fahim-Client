import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateProfessor } from "../../api/professorApi";
import { Rating, Typography, CircularProgress } from "@mui/material";

const RateProfessor = ({ professorId }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation({
    mutationFn: rateProfessor,
    onSuccess: () => {
      queryClient.invalidateQueries(["professors"]);
      console.log("Professor rated successfully!");
    },
    onError: (error) => {
      console.error("Failed to rate professor:", error.message);
    },
  });

  const handleRateChange = (event, value) => {
    if (value) {
      mutate({ professorId, rating: value });
    }
  };

  return (
    <div className="w-full">
      <h4 className="font-medium mb-2">Rate</h4>
      <div className="flex items-center">
        <Rating
          name="professor-rating"
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

export default RateProfessor;
