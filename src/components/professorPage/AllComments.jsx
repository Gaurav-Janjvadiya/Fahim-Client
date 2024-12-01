import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProfessorComments } from "../../api/proffessorComments";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";

function AllComments({ professorId }) {
  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getComments"],
    queryFn: () => getProfessorComments(professorId),
    staleTime: 60000,
    cacheTime: 300000,
    refetchOnWindowFocus: false,
  });

  if (isError)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Alert severity="error">Error: {error.message}</Alert>
      </div>
    );

  return (
    <>
      <div className="w-full">
        <h4 className="font-medium mb-2">Comments</h4>
        <div className="space-y-2">
          {isLoading ? (
            <CircularProgress />
          ) : comments.length === 0 ? (
            <p>No comments available.</p>
          ) : (
            comments.map((comment) => (
              <div
                className="text-sm flex justify-start items-center"
                key={comment._id}
              >
                <p className="font-medium mr-2">{comment.user.username}</p>
                <p className="rounded-md">{comment.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default AllComments;
