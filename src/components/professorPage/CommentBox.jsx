import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { createProfessorComment } from "../../api/proffessorComments";
import { Button } from "../../components";

function CommentBox({ professorId }) {
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: createProfessorComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", { professorId }]);
      setComment("");
      setErrorMessage("");
    },
    onError: (error) => {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setErrorMessage("");
      mutate({ professorId, comment });
    } else {
      setErrorMessage("Comment cannot be empty");
    }
  };

  return (
    <div className="w-full">
      <textarea
        placeholder="Share your thoughts here..."
        className="w-full bg-[#1e1e1e] text-[#eee] border border-[#444] p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
        rows="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {isError && (
        <p className="text-red-500">{error?.message || "An error occurred"}</p>
      )}
      <Button type="submit" style={"rounded-xl"} onClick={handleSubmit}>
        {isLoading ? "Posting..." : "Post"}
      </Button>
    </div>
  );
}

CommentBox.propTypes = {
  professorId: PropTypes.string.isRequired,
};

export default CommentBox;
