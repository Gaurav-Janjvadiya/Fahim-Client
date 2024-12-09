import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
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
import getUserIdFromToken from "../../utils/getUserIdFromToken";

function AllComments({ professorId }) {
  const [replyMap, setReplyMap] = useState({});
  const [activeReplyId, setActiveReplyId] = useState(null);
  const queryClient = useQueryClient();
  const initialVisibleComments = 2;
  const [visibleComments, setVisibleComments] = useState(
    initialVisibleComments
  );

  const {
    data: comments = [],
    isLoading,
    isError,
    error,
    isFetching, // added isFetching to show a loading state
  } = useQuery({
    queryKey: ["getComments", professorId],
    queryFn: () => getProfessorComments(professorId),
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
    const reply = replyMap[commentId];
    if (reply?.trim()) {
      replyMutation.mutate({ commentId, reply });
      setReplyMap((prev) => ({ ...prev, [commentId]: "" }));
      setActiveReplyId(null);
    }
  };

  const handleReplyChange = (commentId, value) => {
    setReplyMap((prev) => ({ ...prev, [commentId]: value }));
  };

  const renderReplies = (replies) => {
    if (!Array.isArray(replies) || replies.length === 0) return null;

    return replies.map((reply) => (
      <div
        className="pl-4 border-l-2 border-gray-200 space-y-2"
        key={reply?._id}
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
              onClick={() => setActiveReplyId(reply?._id)}
              disabled={replyMutation.isLoading || isFetching} // Disable if fetching or mutation loading
            >
              <ReplyIcon />
            </IconButton>
            {getUserIdFromToken() === reply?.user?._id && (
              <IconButton
                color="secondary"
                size="small"
                onClick={() => handleDelete(reply?._id)}
                disabled={deleteMutation.isLoading || isFetching} // Disable if fetching or mutation loading
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        </div>
        {/* Render nested replies */}
        {activeReplyId === reply._id && (
          <div className="reply-input-container">
            <textarea
              className="w-full bg-[#1e1e1e] text-[#eee] border border-[#444] p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              placeholder="Write your reply here..."
              value={replyMap[reply._id] || ""}
              onChange={(e) => handleReplyChange(reply._id, e.target.value)}
            />
            <div className="reply-actions space-y-2 space-x-2">
              <button
                className="border px-4 py-2 rounded-md hover:bg-[#292929]"
                onClick={() => handleReply(reply._id)} // Pass nested reply ID
              >
                Send
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
        {reply?.replies?.length > 0 && renderReplies(reply.replies)}
      </div>
    ));
  };

  const showMoreComments = () => {
    setVisibleComments((prevVisible) => prevVisible + initialVisibleComments);
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
          comments.slice(0, visibleComments).map((comment) => (
            <div
              className="text-sm space-y-2 border-b pb-2 mb-2"
              key={comment?._id}
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
                    onClick={() => setActiveReplyId(comment?._id)}
                    disabled={replyMutation.isLoading || isFetching}
                  >
                    <ReplyIcon />
                  </IconButton>
                  {getUserIdFromToken() === comment?.user?._id && (
                    <IconButton
                      color="secondary"
                      size="small"
                      onClick={() => handleDelete(comment?._id)}
                      disabled={deleteMutation.isLoading || isFetching}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </div>
              </div>
              {comment?.replies?.length > 0 && renderReplies(comment.replies)}
              {activeReplyId === comment._id && (
                <div className="reply-input-container">
                  <textarea
                    className="w-full bg-[#1e1e1e] text-[#eee] border border-[#444] p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                    placeholder="Write your reply here..."
                    value={replyMap[comment._id] || ""}
                    onChange={(e) =>
                      handleReplyChange(comment._id, e.target.value)
                    }
                  />
                  <div className="reply-actions space-y-2 space-x-2">
                    <button
                      className="border px-4 py-2 rounded-md hover:bg-[#292929]"
                      onClick={() => handleReply(comment._id)}
                    >
                      Send
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
