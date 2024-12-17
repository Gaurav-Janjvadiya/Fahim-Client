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
  const initialVisibleComments = 2;
  const [visibleComments, setVisibleComments] = useState(
    initialVisibleComments
  );
  const [visibleReplies, setVisibleReplies] = useState({});  // Track visibility of replies
  const queryClient = useQueryClient();

  const {
    data: comments = [],
    isLoading,
    isError,
    error,
    isFetching,
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

  const showMoreComments = () => {
    setVisibleComments((prevVisible) => prevVisible + initialVisibleComments);
  };

  // Toggle visibility of replies for a specific comment
  const toggleRepliesVisibility = (commentId) => {
    setVisibleReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId], // Toggle the visibility
    }));
  };

  const renderReplies = (replies) => {
    if (!Array.isArray(replies) || replies.length === 0) return null;
    return replies.map((reply) => (
      <div
        className="pl-4 border-l-2 border-gray-200 space-y-2"
        key={reply._id}
      >
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <p className="font-medium text-gray-600">@{reply.user.username}</p>
            <p>{reply.content}</p>
          </div>
          <div className="flex items-center space-x-1">
            <IconButton
              color="primary"
              size="small"
              onClick={() => setActiveReplyId(reply._id)}
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
                onClick={() => handleDelete(reply._id)}
                disabled={deleteMutation.isLoading}
              >
                <DeleteIcon />
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
      <h4 className="font-bold mb-2">Comments</h4>
      <div className="space-y-2">
        {isLoading || isFetching ? (
          <div className="flex justify-center items-center">
            <CircularProgress size={30} />
          </div>
        ) : !comments || comments.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          comments.slice(0, visibleComments).map((comment) => (
            <div
              className="text-sm space-y-2 border-b pb-2 mb-2"
              key={comment._id}
            >
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <p className="font-medium">@{comment.user.username}</p>
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
                  {getUserIdFromToken() === comment?.user?._id && (
                    <IconButton
                      color="secondary"
                      size="small"
                      onClick={() => handleDelete(comment._id)}
                      disabled={deleteMutation.isLoading}
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

              {/* Show/Hide Replies Button */}
              {comment.replies && comment.replies.length > 0 && (
                <button
                  className="ml-1 flex items-center space-x-2 hover:text-gray-500 w-[85%] active:text-gray-400 text-gray-400 text-left p-0 bg-transparent cursor-pointer"
                  onClick={() => toggleRepliesVisibility(comment._id)}
                >
                  {visibleReplies[comment._id]
                    ? "Hide replies"
                    : "View replies"}
                </button>
              )}

              {/* Render replies if visible */}
              {visibleReplies[comment._id] && renderReplies(comment.replies)}

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
                      onClick={() => handleReply(comment._id)}
                      disabled={replyMutation.isLoading}
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
      {visibleComments < comments.length && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white py-1 px-4 rounded"
            onClick={showMoreComments}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default AllComments;
