import { Box, Typography } from "@mui/material";
import FilterByTitle from "./FilterByTitle";
import FilterByDepartment from "./FilterByDepartment";

const FilterBy = ({
  filterByTitle,
  setFilterByTitle = () => {},
  filterByDepartment,
  setFilterByDepartment = () => {},
}) => {
  return (
    <Box className="w-fit ml-8 border sm:p-8 p-4 rounded">
      <Typography variant="h6" gutterBottom>
        Filter By
      </Typography>

      {/* Child components */}
      <FilterByTitle
        filterByTitle={filterByTitle}
        setFilterByTitle={setFilterByTitle}
      />
      <FilterByDepartment
        filterByDepartment={filterByDepartment}
        setFilterByDepartment={setFilterByDepartment}
      />
    </Box>
  );
};

export default FilterBy;
