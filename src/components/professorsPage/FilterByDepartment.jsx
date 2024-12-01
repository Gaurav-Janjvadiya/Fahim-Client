import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllMajors } from "../../api/majorApi";
import { useEffect, useState } from "react";

const FilterByDepartment = ({
  filterByDepartment,
  setFilterByDepartment = () => {},
}) => {
  const {
    data: majors = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["majors"],
    queryFn: getAllMajors,
    staleTime: 600000, // Data is fresh for 10 minutes
    cacheTime: 900000, // Data stays in the cache for 15 minutes
    refetchOnWindowFocus: true, // Refetch data when the window gains focus
    retry: 3, // Retry failed queries 3 times before throwing an error
    onError: (err) => {
      console.error("Error fetching majors:", err);
    },
    onSuccess: (data) => {
      console.log("Majors fetched successfully:", data);
    },
  });

  const handleFilterChange = (event, filterType) => {
    setFilterByDepartment((prev) => ({
      ...prev,
      [filterType]: event.target.value,
    }));
  };

  return (
    <FormControl component="fieldset" sx={{ position: "relative", zIndex: 1 }}>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ color: "#fff", marginTop: "16px" }}
      >
        Department
      </Typography>
      <RadioGroup
        value={filterByDepartment?.department || ""}
        onChange={(e) => handleFilterChange(e, "department")}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiFormControlLabel-label": { color: "#fff" },
        }}
      >
        {isLoading ? (
          <CircularProgress size={20} />
        ) : error ? (
          <Typography color="error">Error loading majors</Typography>
        ) : (
          majors.map((major) => (
            <FormControlLabel
              key={major._id}
              value={major._id}
              control={
                <Radio
                  sx={{
                    color: "#0DFF15",
                    "&.Mui-checked": { color: "#0DFF15" },
                  }}
                />
              }
              label={major.name}
              sx={{ "& .MuiFormControlLabel-label": { whiteSpace: "nowrap" } }}
            />
          ))
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default FilterByDepartment;
