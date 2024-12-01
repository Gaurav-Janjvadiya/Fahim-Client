import { useState } from "react";
import { SearchBar, AllProfessors, SortBy, FilterBy } from "../components"; // Adjust the path accordingly
import { useQuery } from "@tanstack/react-query";
import {
  fetchLowestRatedProfessors,
  fetchMostRatedProfessors,
  fetchProfessorsByDepartment,
  fetchProfessorsByTitle,
} from "../api/filterProffessors";
import { getAllProfessors } from "../api/professorApi"; // Ensure this function returns a promise
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

function Professors() {
  const [filterByTitle, setFilterByTitle] = useState({ title: "" });
  const [filterByDepartment, setFilterByDepartment] = useState({ department: "" });
  const [sortOption, setSortOption] = useState("");

  // Use React Query's useQuery to fetch the professors with the object syntax
  const {
    data: professors,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["professors", filterByTitle.title,filterByDepartment.department, sortOption],
    queryFn: () => {
      switch (filterByTitle.title) {
        case "doctor":
          return fetchProfessorsByTitle("Dr.");
        case "engineer":
          return fetchProfessorsByTitle("Eng.");
      }
      switch (filterByDepartment.department) {
        case "673f3140064450eb6c2530fa":
          return fetchProfessorsByDepartment("673f3140064450eb6c2530fa");
      }
      // Handle sorting options
      switch (sortOption) {
        case "topProfessors":
          return fetchMostRatedProfessors();
        case "lowestRated":
          return fetchLowestRatedProfessors();
      }
      return getAllProfessors();
    },
    staleTime: 60000, // Data stays fresh for 1 minute
    cacheTime: 300000, // Cached for 5 minutes
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });
  console.log("Fetched Professors", professors);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-2 sm:p-8 p-4">
        <SearchBar />
        <SortBy sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      <div className="flex justify-between items-start sm:p-8 p-4">
        <div className="w-full sm:w-3/4">
          {isLoading ? (
            <div className="w-full h-[40vh] flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <AllProfessors professors={professors} />
          )}
        </div>

        <FilterBy filterByTitle={filterByTitle} setFilterByTitle={setFilterByTitle} filterByDepartment={filterByDepartment} setFilterByDepartment={setFilterByDepartment} />
      </div>

      {isError && (
        <div className="h-screen w-full flex justify-center items-center">
          <Alert severity="error">Error: {error.message}</Alert>
        </div>
      )}
    </div>
  );
}

export default Professors;
