import { useState } from "react";
import { SearchBar, AllProfessors, SortBy, FilterBy } from "../components"; // Adjust the path accordingly
import { useQuery } from "@tanstack/react-query";
import {
  fetchProfessorsByDepartment,
  fetchProfessorsSortedByTitle,
  fetchLowestRatedProfessors,
  fetchMostRatedProfessors,
} from "../api/filterProffessors";
import { getAllProfessors } from "../api/professorApi"; // Ensure this function returns a promise
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

function Professors() {
  // const [filter, setFilter] = useState({
  //   title: '',
  //   department: '',
  // });
  const [sortOption, setSortOption] = useState("");
  // Use React Query's useQuery to fetch the professors with the object syntax
  const {
    data: professors,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["professors", sortOption],
    queryFn: () => {
      // // // Handle filters first
      // switch (true) {
      //   case filter.title === "doctor":
      //     console.log(filter.title);
      //     return fetchProfessorsSortedByTitle("Dr.");

      //   case filter.title === "engineer":
      //     return fetchProfessorsSortedByTitle("Eng.");

      //   case filter.department === "673f3140064450eb6c2530fa":
      //     return fetchProfessorsByDepartment("673f3140064450eb6c2530fa");
      // }

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

        <FilterBy />
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
