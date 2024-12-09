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
          color: "#F1F1F1",
          "&.Mui-focused": {
            color: "#39FF14", // Custom label color when focused (gold in this case)
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
              color: "#F1F1F1", // Dropdown text color
            },
          },
        }}
        sx={{
          color: "#F1F1F1", // Text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F1F1F1",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#39FF14",
          },
          "& .MuiSelect-icon": {
            color: "#F1F1F1", // Change the color of the dropdown arrow icon
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#39FF14", // Custom border color when focused (gold in this case)
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
