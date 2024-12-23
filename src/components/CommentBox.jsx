import { useState } from "react";
import { TextField } from "@mui/material"; // Importing MUI components
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../components";

function CommentBox({ id, createCommentFunc }) {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState({ comment: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation({
    mutationKey: ["comments"],
    mutationFn: createCommentFunc,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", id]);
      setComment({ comment: "" });
      setErrorMessage("");
    },
    onError: (error) => {
      setErrorMessage(error.message || "Failed to post comment");
    },
  });

  return (
    <div className="mt-4 space-y-3">
      <TextField
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        placeholder="Write your comment here..."
        sx={{
          backgroundColor: "#1e1e1e",
          "& .MuiInputBase-input": {
            color: "#F1F1F1",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
            "& fieldset": {
              borderColor: "#444",
            },
            "&:hover fieldset": {
              borderColor: "#39FF14",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#39FF14",
            },
          },
        }}
        onChange={(e) =>
          setComment((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
        name="comment"
        value={comment.comment}
      />
      <Button
        style={"rounded-xl"}
        onClick={() => mutation.mutate({ id, comment: comment.comment })}
      >
        Post
      </Button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default CommentBox;
