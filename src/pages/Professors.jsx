import { useState } from "react";
import {
  SearchBar,
  Sort,
  FilterBy,
  DataList,
  ProfessorItem,
} from "../components"; // Adjust the path accordingly
import { useQuery } from "@tanstack/react-query";
import {
  fetchLowestRatedProfessors,
  fetchMostRatedProfessors,
  fetchProfessorsByDepartment,
  fetchProfessorsByTitle,
} from "../api/filterProffessors";
import { getAllProfessors } from "../api/professorApi";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

function Professors() {
  const [filterByTitle, setFilterByTitle] = useState({ title: "" });
  const [filterByDepartment, setFilterByDepartment] = useState({
    department: "",
  });
  const [filteredProfessors, setFilteredProfessors] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const {
    data: professors,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [
      "professors",
      filterByTitle.title,
      filterByDepartment.department,
      sortOption,
    ],
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
  });

  const sortOptions = [
    { value: "topProfessors", label: "Top Professors" },
    { value: "lowestRated", label: "Lowest Rated Professors" },
  ];

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:p-8 p-4">
        <SearchBar
          dataList={professors}
          setFilteredDataList={setFilteredProfessors}
          searchOptionKeys={[
            {
              name: "name",
              weight: 0.7,
            },
            {
              name: "title",
              weight: 0.2,
            },
            {
              name: "department.name",
              weight: 0.1,
            },
          ]}
        />
        <Sort
          statte={sortOption}
          setState={setSortOption}
          options={sortOptions}
        />
        <FilterBy
          filterByTitle={filterByTitle}
          setFilterByTitle={setFilterByTitle}
          filterByDepartment={filterByDepartment}
          setFilterByDepartment={setFilterByDepartment}
        />
      </div>

      <div className="flex justify-between items-start sm:p-8 p-4">
        {isLoading ? (
          <div className="w-full h-[40vh] flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          <DataList
            dataList={
              filteredProfessors.length > 0 ? filteredProfessors : professors
            }
            Child={ProfessorItem}
          />
        )}
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
