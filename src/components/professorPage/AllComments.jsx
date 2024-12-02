import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import {
  getProfessorComments,
  deleteProfessorComment,
  replyToProfessorComment,
} from "../../api/proffessorComments";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";

function AllComments({ professorId }) {
  const queryClient = useQueryClient();

  const {
    data: comments = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getComments", professorId],
    queryFn: () => getProfessorComments(professorId),
    staleTime: 60000,
    cacheTime: 300000,
    refetchOnWindowFocus: false,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProfessorComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", professorId]);
    },
  });

  const replyMutation = useMutation({
    mutationFn: replyToProfessorComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments", professorId]);
    },
  });

  const handleDelete = (commentId) => {
    if (commentId) {
      deleteMutation.mutate(commentId);
    }
  };

  const handleReply = (commentId) => {
    if (commentId) {
      const reply = prompt("Enter your reply:");
      if (reply) {
        replyMutation.mutate({ commentId, reply });
      }
    }
  };

  const renderReplies = (replies) => {
    if (!Array.isArray(replies) || replies.length === 0) return null;

    return replies.map((reply) => (
      <div
        className="pl-4 border-l-2 border-gray-200 space-y-2"
        key={reply?._id || Math.random()} // fallback to unique key for safety
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-600">
              {reply?.user?.username || "Unknown User"}
            </p>
            <p>{reply?.content || "No content provided"}</p>
          </div>
          <div className="flex items-center space-x-1">
            <IconButton
              color="primary"
              size="small"
              onClick={() => handleReply(reply?._id)}
              disabled={replyMutation.isLoading}
            >
              <ReplyIcon />
            </IconButton>
            <IconButton
              color="secondary"
              size="small"
              onClick={() => handleDelete(reply?._id)}
              disabled={deleteMutation.isLoading}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        {reply?.replies?.length > 0 && renderReplies(reply.replies)}
      </div>
    ));
  };

  if (isError) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Alert severity="error">
          Error: {error?.message || "Unknown error occurred"}
        </Alert>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h4 className="font-medium mb-2">Comments</h4>
      <div className="space-y-2">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <CircularProgress size={30} />
          </div>
        ) : !comments || comments.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          comments.map((comment) => (
            <div
              className="text-sm space-y-2 border-b pb-2 mb-2"
              key={comment?._id || Math.random()} // fallback to unique key for safety
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {comment?.user?.username || "Unknown User"}
                  </p>
                  <p>{comment?.content || "No content provided"}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => handleReply(comment?._id)}
                    disabled={replyMutation.isLoading}
                  >
                    <ReplyIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    size="small"
                    onClick={() => handleDelete(comment?._id)}
                    disabled={deleteMutation.isLoading}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
              {comment?.replies?.length > 0 && renderReplies(comment.replies)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllComments;
