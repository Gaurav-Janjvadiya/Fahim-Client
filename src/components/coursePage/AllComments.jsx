import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  getCourseComments,
  replyToCourseComment,
  deleteCourseComment,
} from "../../api/courseCommentsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
import getUserIdFromToken from "../../utils/getUserIdFromToken";

function AllComments({ courseReviewId }) {
  const [reply, setReply] = useState("");
  const [activeReplyId, setActiveReplyId] = useState(null);
  const queryClient = useQueryClient();

  const {
    data: comments = [],
    isLoading,
    isError,
    error,
    isFetching, // Adding isFetching for background refetching states
  } = useQuery({
    queryKey: ["comments", courseReviewId],
    queryFn: () => getCourseComments({ id: courseReviewId }),
    staleTime: 60000,
    cacheTime: 300000,
    refetchOnWindowFocus: false,
  });

  const replyMutation = useMutation({
    mutationFn: replyToCourseComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", courseReviewId]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCourseComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", courseReviewId]);
    },
  });

  const handleReply = (commentId) => {
    if (reply.trim()) {
      replyMutation.mutate({ commentId, reply });
      setReply("");
      setActiveReplyId(null);
    }
  };

  const handleDelete = (commentId) => {
    if (commentId) {
      deleteMutation.mutate(commentId);
    }
  };

  const renderReplies = (replies) => {
    if (!Array.isArray(replies) || replies.length === 0) return null;

    return replies.map((reply) => (
      <div
        className="pl-4 border-l-2 border-gray-200 space-y-2"
        key={reply._id}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-600">{reply.user.username}</p>
            <p>{reply.content}</p>
          </div>
          <div className="flex items-center space-x-1">
            <IconButton
              color="primary"
              size="small"
              onClick={() => setActiveReplyId(reply._id)}
              disabled={replyMutation.isLoading} // Disable while loading
            >
              {replyMutation.isLoading ? (
                <CircularProgress size={20} />
              ) : (
                <ReplyIcon />
              )}
            </IconButton>
            {getUserIdFromToken() === reply?.user?._id && (
              <IconButton
                color="secondary"
                size="small"
                onClick={() => handleDelete(reply._id)}
                disabled={deleteMutation.isLoading} // Disable while loading
              >
                {deleteMutation.isLoading ? (
                  <CircularProgress size={20} />
                ) : (
                  <DeleteIcon />
                )}
              </IconButton>
            )}
          </div>
        </div>
        {renderReplies(reply.replies)}
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
        {isLoading || isFetching ? (
          <div className="flex justify-center items-center">
            <CircularProgress size={30} />
          </div>
        ) : !comments || comments.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          comments.map((comment) => (
            <div
              className="text-sm space-y-2 border-b pb-2 mb-2"
              key={comment._id}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{comment.user.username}</p>
                  <p>{comment.content}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => setActiveReplyId(comment._id)}
                    disabled={replyMutation.isLoading} 
                  >
                    {replyMutation.isLoading ? (
                      <CircularProgress size={20} />
                    ) : (
                      <ReplyIcon />
                    )}
                  </IconButton>
                  {getUserIdFromToken() === reply?.user?._id && (
                    <IconButton
                      color="secondary"
                      size="small"
                      onClick={() => handleDelete(comment._id)}
                      disabled={deleteMutation.isLoading} // Disable while loading
                    >
                      {deleteMutation.isLoading ? (
                        <CircularProgress size={20} />
                      ) : (
                        <DeleteIcon />
                      )}
                    </IconButton>
                  )}
                </div>
              </div>
              {renderReplies(comment.replies)}
              {activeReplyId === comment._id && (
                <div className="reply-input-container">
                  <textarea
                    className="w-full bg-[#1e1e1e] text-[#eee] border border-[#444] p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                    placeholder="Write your reply here..."
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                  />
                  <div className="reply-actions space-y-2 space-x-2">
                    <button
                      className="border px-4 py-2 rounded-md hover:bg-[#292929]"
                      onClick={() => handleReply(comment._id)} // Pass comment ID
                      disabled={replyMutation.isLoading} // Disable while loading
                    >
                      {replyMutation.isLoading ? (
                        <CircularProgress size={20} />
                      ) : (
                        "Send"
                      )}
                    </button>
                    <button
                      className="border px-4 py-2 rounded-md hover:bg-[#292929]"
                      onClick={() => setActiveReplyId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllComments;
