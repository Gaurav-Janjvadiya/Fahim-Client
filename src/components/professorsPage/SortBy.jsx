import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SortBy = ({ setSortOption, sortOption }) => {
  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        width: "full",
      }}
    >
      <InputLabel
        id="sort-by-label"
        sx={{
          color: "#F2F2F2",
          "&.Mui-focused": {
            color: "#0DFF15", // Custom label color when focused (gold in this case)
          }, // Light text color for dark background
        }}
      >
        Sort By
      </InputLabel>
      <Select
        labelId="sort-by-label"
        id="sort-by-label"
        value={sortOption}
        onChange={handleChange}
        label="Sort By"
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#1A1A1A", // Dropdown menu background
              color: "#F2F2F2", // Dropdown text color
            },
          },
        }}
        sx={{
          color: "#F2F2F2", // Text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F2F2F2",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0DFF15",
          },
          "& .MuiSelect-icon": {
            color: "#F2F2F2", // Change the color of the dropdown arrow icon
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0DFF15", // Custom border color when focused (gold in this case)
          },
        }}
      >
        {/* <MenuItem value="title">Title</MenuItem> */}
        <MenuItem value="topProfessors">Top Professors</MenuItem>
        <MenuItem value="lowestRated">Lowest Rated Professors</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBy;
