import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllProfessors } from "../../api/professorApi";

const FilterByProfessor = ({
  filterByDepartment,
  setFilterByDepartment = () => {},
  filterByProfessor,
  setFilterByProfessor = () => {},
}) => {
  const {
    data: professors = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["professors", filterByProfessor.professor],
    queryFn: getAllProfessors,
    staleTime: 600000, // Data is fresh for 10 minutes
    cacheTime: 900000, // Data stays in the cache for 15 minutes
    refetchOnWindowFocus: true, // Refetch data when the window gains focus
    retry: 3, // Retry failed queries 3 times before throwing an error
    onError: (err) => {
      console.error("Error fetching Professors:", err);
    },
    onSuccess: (data) => {
      console.log("Professors fetched successfully:", data);
    },
  });

  const handleFilterChange = (event, filterType) => {
    setFilterByProfessor((prev) => ({
      ...prev,
      [filterType]: event.target.value,
    }));
  };

  return (
    <FormControl
      component="fieldset"
      sx={{
        position: "relative",
        zIndex: 1,
        marginTop: "1px",
        width: "100%",
        backgroundColor: "#1A1A1A",
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ color: "#fff", marginBottom: "1px" }}
      >
        Professors
      </Typography>
      <RadioGroup
        value={filterByDepartment?.department || ""}
        onChange={(e) => handleFilterChange(e, "professor")}
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
          professors.map((professor) => (
            <FormControlLabel
              key={professor._id}
              value={professor._id}
              control={
                <Radio
                  sx={{
                    color: "#39FF14",
                    "&.Mui-checked": { color: "#39FF14" },
                  }}
                />
              }
              label={professor.name}
              sx={{ "& .MuiFormControlLabel-label": { whiteSpace: "nowrap" } }}
            />
          ))
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default FilterByProfessor;
