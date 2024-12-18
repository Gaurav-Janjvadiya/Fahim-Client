import { useState } from "react";
import { Button } from "../";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseComment } from "../../api/courseCommentsApi";

function CommentBox({ courseReviewId }) {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState({ comment: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation({
    mutationKey: ["comments"],
    mutationFn: createCourseComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", courseReviewId]); // Match query key structure
      setComment({ comment: "" });
      setErrorMessage("");
    },
    onError: (error) => {
      setErrorMessage(error.message || "Failed to post comment");
    },
  });

  return (
    <div className="mt-4 space-y-2">
      <textarea
        className="w-full bg-[#1e1e1e] text-[#eee] border border-[#444] p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
        onChange={(e) =>
          setComment((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
        name="comment"
        value={comment.comment}
      />
      <Button
        onClick={() => mutation.mutate({ courseReviewId, comment: comment.comment })}
        style={"rounded-xl"}
      >
        Post
      </Button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default CommentBox;
