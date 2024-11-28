import React from "react";
import { SearchBar, AllProfessors, SortBy } from "../components"; // Adjust the path accordingly
import { useQuery } from "@tanstack/react-query";
import { getAllProfessors } from "../api/professorApi"; // Ensure this function returns a promise
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

function Professors() {
  // Use React Query's useQuery to fetch the professors with the object syntax
  const {
    data: professors,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["professors"], // Query key (can still be an array)
    queryFn: getAllProfessors, // The fetch function (make sure it returns a promise)
    staleTime: 60000, // Data stays fresh for 1 minute
    cacheTime: 300000, // Cached for 5 minutes
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });

  if (isLoading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  if (isError) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <div className="min-h-screen">
      <div className="flex flex-col  sm:px-8 px-4 sm:flex-row items-center justify-between">
        <SearchBar />
        <SortBy />
      </div>

      <AllProfessors professors={professors} />
    </div>
  );
}

export default Professors;
