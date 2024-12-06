import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { createProfessorComment } from "../../api/proffessorComments";

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
        className="w-full bg-[#1e1e1e] text-[#eee] border border-[#444] p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0A74DA]"
        rows="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {isError && (
        <p className="text-red-500">{error?.message || "An error occurred"}</p>
      )}
      <button
        type="submit"
        className="mt-3 bg-[#0A74DA] py-2 px-4 rounded-md font-medium hover:bg-[#0bda0a] transition duration-200 ease-in-out"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Posting..." : "Post"}
      </button>
    </div>
  );
}

CommentBox.propTypes = {
  professorId: PropTypes.string.isRequired,
};

export default CommentBox;
